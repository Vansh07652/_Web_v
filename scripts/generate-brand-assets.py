#!/usr/bin/env python3
"""Generates the MedMosa raster brand assets: favicon and social card.

One-off build tool, not part of the site build. Run it when the mark or the
palette changes:

    python3 scripts/generate-brand-assets.py

It writes `public/favicon/favicon.png` (64x64, and a 512 variant for install
prompts) and `public/og.png` (1200x630). Colours are read from the Editorial
Ink token block in `src/styles/main.css`, so the assets cannot drift away from
the site's palette the way a hand-exported PNG does.

The previous og.png was 901 KB — larger than the entire JavaScript bundle, for
an image only social crawlers ever fetch. This one is quantised to a small
palette and comes out around 25 KB, because it is flat colour and type.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:  # pragma: no cover - tool-only dependency
    sys.exit("Pillow is required: pip install --break-system-packages pillow")

WEB = Path(__file__).resolve().parent.parent
CSS = WEB / "src" / "styles" / "main.css"

WORDMARK = "MedMosa"
TAGLINE = "Every prerequisite, connected."
SUBLINE = "Open learning for the health-care path ahead. Free for pre-health students."


def tokens() -> dict[str, str]:
    """Colour tokens straight from the stylesheet's :root block."""
    block = re.search(r":root\s*\{(.*?)\n\}", CSS.read_text(encoding="utf8"), re.S)
    if not block:
        sys.exit("Could not find the :root token block in main.css")
    return dict(re.findall(r"(--[\w-]+):\s*(#[0-9a-fA-F]{3,8})\s*;", block.group(1)))


def font(paths: list[str], size: int) -> ImageFont.FreeTypeFont:
    for path in paths:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


SERIF = ["/usr/share/fonts/truetype/crosextra/Caladea-Bold.ttf",
         "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"]
SANS = ["/usr/share/fonts/truetype/crosextra/Carlito-Regular.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"]
SANS_BOLD = ["/usr/share/fonts/truetype/crosextra/Carlito-Bold.ttf",
             "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"]


def draw_mark(draw: ImageDraw.ImageDraw, x: int, y: int, size: int, ink: str, accent: str) -> None:
    """The MedMosa mark: nine tesserae on a 3x3 grid.

    The five that form a plus are inked, the four corners are amber. Read one
    way it is a mosaic; read the other it is a medical cross. That double
    reading is the whole point of the name, so the mark carries it too.
    """
    pitch = size / 3
    tile = pitch * 0.76
    gap = (pitch - tile) / 2
    cross = {(1, 0), (0, 1), (1, 1), (2, 1), (1, 2)}
    for row in range(3):
        for column in range(3):
            left = x + column * pitch + gap
            top = y + row * pitch + gap
            draw.rounded_rectangle(
                [left, top, left + tile, top + tile],
                radius=max(2, tile * 0.22),
                fill=ink if (column, row) in cross else accent,
            )


def build_favicon(colour: dict[str, str], size: int, path: Path) -> None:
    scale = 4  # drawn large, then downsampled, so the corners stay clean
    image = Image.new("RGB", (size * scale, size * scale), colour["--navy-900"])
    draw = ImageDraw.Draw(image)
    inset = size * scale * 0.17
    draw_mark(draw, int(inset), int(inset), int(size * scale - inset * 2), colour["--paper"], colour["--amber-500"])
    path.parent.mkdir(parents=True, exist_ok=True)
    image.resize((size, size), Image.LANCZOS).save(path, "PNG", optimize=True)
    print(f"  {path.relative_to(WEB)}  {path.stat().st_size // 1024} KB")


def catalogue_chips() -> list[str]:
    """Course, topic and question counts, read from the built catalogue."""
    totals = json.loads((WEB / "content-v2" / "catalog.json").read_text(encoding="utf8"))["totals"]
    return [
        f"{totals['subjects']:,} courses",
        f"{totals['topics']:,} topics",
        f"{totals['uniqueQuestionsAcrossCatalog']:,} questions",
    ]


def build_og(colour: dict[str, str], path: Path) -> None:
    width, height = 1200, 630
    image = Image.new("RGB", (width, height), colour["--canvas"])
    draw = ImageDraw.Draw(image)

    # Editorial Ink is hairline rules and flat paper, so the card is too.
    draw.rectangle([0, 0, width, 14], fill=colour["--navy-900"])
    draw.rectangle([72, 150, 74, height - 120], fill=colour["--line"])

    draw_mark(draw, 72, 64, 64, colour["--navy-900"], colour["--amber-500"])

    draw.text((152, 74), WORDMARK, font=font(SERIF, 44), fill=colour["--navy-900"])
    # The tagline is set once, at the top of this file, and split on its comma
    # for the two-line treatment. It used to be typed out here as two string
    # literals, which is how the card kept saying "FINALLY CONNECTED." after
    # the wording changed.
    head, _, tail = TAGLINE.partition(",")
    draw.text((112, 190), f"{head.upper()},", font=font(SERIF, 76), fill=colour["--navy-900"])
    draw.text((112, 280), tail.strip().upper(), font=font(SERIF, 76), fill=colour["--teal-700"])
    draw.text((112, 400), SUBLINE, font=font(SANS, 30), fill=colour["--ink-muted"])

    # Counts come from the catalogue the site is built from. Hardcoded, they
    # were 30 courses / 1,074 topics / 9,401 questions — a year out of date and
    # visible on every shared link.
    chips = [*catalogue_chips(), "no account needed"]
    chip_font = font(SANS_BOLD, 24)
    x = 112
    for chip in chips:
        text_width = draw.textlength(chip, font=chip_font)
        draw.rounded_rectangle([x, 480, x + text_width + 40, 532], radius=6,
                               fill=colour["--teal-050"], outline=colour["--line"], width=1)
        draw.text((x + 20, 492), chip, font=chip_font, fill=colour["--teal-700"])
        x += text_width + 60

    # Flat art quantises to a tiny file with no visible loss.
    image.convert("P", palette=Image.ADAPTIVE, colors=64).save(path, "PNG", optimize=True)
    print(f"  {path.relative_to(WEB)}  {path.stat().st_size // 1024} KB")


def main() -> None:
    colour = tokens()
    missing = [key for key in ("--navy-900", "--paper", "--amber-500", "--canvas", "--line", "--teal-700", "--teal-050", "--ink-muted") if key not in colour]
    if missing:
        sys.exit(f"main.css is missing colour tokens: {', '.join(missing)}")
    print("Generating MedMosa brand assets from the Editorial Ink tokens:")
    build_favicon(colour, 64, WEB / "public" / "favicon" / "favicon.png")
    build_favicon(colour, 512, WEB / "public" / "favicon" / "icon-512.png")
    build_og(colour, WEB / "public" / "og.png")


if __name__ == "__main__":
    main()
