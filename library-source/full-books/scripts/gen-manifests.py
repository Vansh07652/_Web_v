#!/usr/bin/env python3
"""Generate per-book manifests listing every topic file, grouped by chapter."""
import os, json, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "manifests")
os.makedirs(OUT, exist_ok=True)

book_counts = []
for subject in ("nursing", "science"):
    sroot = os.path.join(ROOT, subject, subject)
    if not os.path.isdir(sroot):
        continue
    for book in sorted(os.listdir(sroot)):
        bdir = os.path.join(sroot, book)
        if not os.path.isdir(bdir):
            continue
        chapters = []
        total = 0
        for ch in sorted(os.listdir(bdir)):
            cdir = os.path.join(bdir, ch)
            if not os.path.isdir(cdir):
                continue
            topics = sorted(f for f in os.listdir(cdir)
                            if re.match(r'^\d\d-.*\.md$', f))
            if topics:
                chapters.append({"chapter": ch, "topics": topics})
                total += len(topics)
        manifest = {
            "subject": subject,
            "book": book,
            "book_dir": os.path.join(subject, subject, book),
            "topic_count": total,
            "chapters": chapters,
        }
        path = os.path.join(OUT, f"{subject}--{book}.json")
        with open(path, "w") as fh:
            json.dump(manifest, fh, indent=2)
        book_counts.append((total, f"{subject}/{book}"))

for total, name in sorted(book_counts, reverse=True):
    print(f"{total:4d}  {name}")
print(f"\nTOTAL topics: {sum(t for t, _ in book_counts)}")
