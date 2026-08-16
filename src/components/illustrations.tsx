/**
 * Body-system and course artwork.
 *
 * Authored here as inline SVG rather than fetched as images, for three
 * reasons that matter for this site specifically:
 *
 *  - Licensing. Everything here is original to this repository, so there is no
 *    attribution or share-alike obligation to track. (OpenStax figures, the
 *    obvious alternative, are CC BY-NC-SA 4.0 — fine to cite as a text source,
 *    but embedding the figures would attach a non-commercial + share-alike
 *    obligation to the site itself.)
 *  - Weight. The audience is mobile-heavy. These cost no network request at
 *    all and add roughly a kilobyte each to a bundle that is already loaded.
 *  - Theming. They draw in `currentColor` and the accent token, so they follow
 *    the palette instead of fighting it, and they stay sharp at any size.
 *
 * Each is decorative and paired with a real text label in the UI, so they are
 * marked aria-hidden rather than given a redundant accessible name.
 */

type ArtProps = { className?: string };

const wrap = (children: React.ReactNode, viewBox = "0 0 64 64", className?: string) => (
  <svg
    className={className ? `sc-art ${className}` : "sc-art"}
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

export function CardiovascularArt({ className }: ArtProps) {
  return wrap(
    <>
      <path d="M32 52c-11-7.5-18-14.6-18-23a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 8.4-7 15.5-18 23Z" />
      <path className="sc-art-accent" d="M12 34h9l4-7 5 14 4-9 3 4h15" strokeWidth="2" />
    </>,
    "0 0 64 64",
    className,
  );
}

export function RespiratoryArt({ className }: ArtProps) {
  return wrap(
    <>
      <path d="M32 14v18" />
      <path d="M32 24c-3 0-5 2-6 5" />
      <path d="M32 24c3 0 5 2 6 5" />
      <path d="M26 29c-6 2-9 8-9 15 0 5 2 8 6 8 4 0 6-3 6-8V31" />
      <path d="M38 29c6 2 9 8 9 15 0 5-2 8-6 8-4 0-6-3-6-8V31" />
      <path className="sc-art-accent" d="M24 40v6M40 40v6" strokeWidth="2" />
    </>,
    "0 0 64 64",
    className,
  );
}

export function NervousArt({ className }: ArtProps) {
  return wrap(
    <>
      <path d="M24 20a9 9 0 0 1 16-3 8 8 0 0 1 8 9c2 2 2 6 0 8a8 8 0 0 1-8 9 9 9 0 0 1-16-3" />
      <path d="M24 20a8 8 0 0 0-8 9c-2 2-2 6 0 8a8 8 0 0 0 8 9" />
      <path className="sc-art-accent" d="M32 17v30M26 27h12M26 37h12" strokeWidth="1.4" />
    </>,
    "0 0 64 64",
    className,
  );
}

export function MusculoskeletalArt({ className }: ArtProps) {
  return wrap(
    <>
      <path d="M22 16a5 5 0 0 1 8 4v24a5 5 0 1 1-8 4 5 5 0 1 1 0-8V24a5 5 0 1 1 0-8Z" />
      <path d="M42 16a5 5 0 0 0-8 4v24a5 5 0 1 0 8 4 5 5 0 1 0 0-8V24a5 5 0 1 0 0-8Z" />
      <path className="sc-art-accent" d="M30 28h4M30 36h4" strokeWidth="2" />
    </>,
    "0 0 64 64",
    className,
  );
}

export function CellArt({ className }: ArtProps) {
  return wrap(
    <>
      <circle cx="32" cy="32" r="20" />
      <circle cx="28" cy="29" r="7" />
      <circle className="sc-art-accent" cx="28" cy="29" r="2.5" strokeWidth="2" />
      <path d="M40 38c3-1 5-3 6-6" />
      <path d="M22 44c1-3 3-5 6-6" />
    </>,
    "0 0 64 64",
    className,
  );
}

export function ChemistryArt({ className }: ArtProps) {
  return wrap(
    <>
      <path d="M26 12v14L14 46a4 4 0 0 0 3 6h30a4 4 0 0 0 3-6L38 26V12" />
      <path d="M23 12h18" />
      <path className="sc-art-accent" d="M20 38h24" strokeWidth="2" />
      <circle className="sc-art-accent" cx="28" cy="45" r="2.2" strokeWidth="1.4" />
      <circle className="sc-art-accent" cx="36" cy="43" r="1.6" strokeWidth="1.4" />
    </>,
    "0 0 64 64",
    className,
  );
}

export function MicrobeArt({ className }: ArtProps) {
  return wrap(
    <>
      <path d="M24 20c8-4 18-1 20 7 2 9-5 17-14 17-8 0-14-6-13-13 .6-5 3-9 7-11Z" />
      <path className="sc-art-accent" d="M20 18l-5-4M46 22l6-3M44 44l5 5M22 46l-4 5" strokeWidth="1.6" />
      <circle cx="30" cy="30" r="2.4" />
      <circle cx="37" cy="37" r="2" />
    </>,
    "0 0 64 64",
    className,
  );
}

export function BookArt({ className }: ArtProps) {
  return wrap(
    <>
      <path d="M12 16c6-3 13-3 20 0v34c-7-3-14-3-20 0Z" />
      <path d="M52 16c-6-3-13-3-20 0v34c7-3 14-3 20 0Z" />
      <path className="sc-art-accent" d="M32 16v34" strokeWidth="2" />
    </>,
    "0 0 64 64",
    className,
  );
}

/**
 * The dashboard's lead illustration: a stylised chest with heart and lungs,
 * drawn larger and with more detail than the small system marks above.
 */
export function StudyHeroArt({ className }: ArtProps) {
  return (
    <svg
      className={className ? `sc-hero-art ${className}` : "sc-hero-art"}
      viewBox="0 0 240 180"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="sc-hero-halo" cx="150" cy="84" r="62" />
      <circle className="sc-hero-halo sc-hero-halo--inner" cx="150" cy="84" r="44" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M150 60v34" />
        <path d="M150 74c-5 0-8 3-10 8" />
        <path d="M150 74c5 0 8 3 10 8" />
        <path d="M140 82c-11 4-16 14-16 27 0 9 4 14 11 14s10-5 10-14V78" />
        <path d="M160 82c11 4 16 14 16 27 0 9-4 14-11 14s-10-5-10-14V78" />
      </g>
      <path
        className="sc-hero-heart"
        d="M150 118c-9-6-15-12-15-19a8 8 0 0 1 15-5 8 8 0 0 1 15 5c0 7-6 13-15 19Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        className="sc-hero-pulse"
        d="M22 112h34l8-20 12 42 10-30 6 10h22"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Course slug -> artwork. Falls back to a book for anything unmapped. */
const COURSE_ART: Record<string, (props: ArtProps) => React.ReactElement> = {
  "anatomy-physiology-1": CardiovascularArt,
  "anatomy-physiology-2": CardiovascularArt,
  "respiratory-therapy": RespiratoryArt,
  "sleep-technology": NervousArt,
  "developmental-psychology": NervousArt,
  "pathophysiology": MusculoskeletalArt,
  "biology-1": CellArt,
  "biology-2": CellArt,
  "cell-biology": CellArt,
  "biochemistry": ChemistryArt,
  "general-chemistry-1": ChemistryArt,
  "general-chemistry-2": ChemistryArt,
  "organic-chemistry-1": ChemistryArt,
  "organic-chemistry-2": ChemistryArt,
  "microbiology": MicrobeArt,
  "genetics": CellArt,
  "physics-1": ChemistryArt,
  "physics-2": ChemistryArt,
};

export function CourseArt({ slug, className }: { slug: string; className?: string }) {
  const Art = COURSE_ART[slug] ?? BookArt;
  return <Art className={className} />;
}
