#!/usr/bin/env python3
"""Verify OpenStax topic files were rewritten with real content.

Usage:
  python3 scripts/verify-topic.py [path]     # path = book dir, subject dir, or single file
Prints PASS/FAIL per file and a summary. Exit 0 if all pass.
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

REQUIRED = [
    "## ELI-10",
    "## High-Yield Points",
    "## Key Terms",
    "## Common Confusions",
    "## Quick Review",
    "<details>",
]
BOILERPLATE_MARKERS = [
    "is like learning the job of one important part in a bigger team",
    "The goal is to build a usable mental model",
    "best studied as a focused idea, not as a list of disconnected facts",
    "Separate observation from interpretation. An observation is what is measured",
    "Imagine a learner encounters a question",
    "name the important parts, describe how they relate",
]

def check_file(path):
    txt = open(path, encoding="utf-8", errors="replace").read()
    fails = []
    for sec in REQUIRED:
        if sec not in txt:
            fails.append(f"missing {sec}")
    for marker in BOILERPLATE_MARKERS:
        if marker in txt:
            fails.append("still has boilerplate text")
            break
    words = len(re.findall(r"\S+", txt))
    if words < 500:
        fails.append(f"too short ({words} words)")
    return fails

def walk(path):
    if os.path.isfile(path) and path.endswith(".md"):
        yield path
    else:
        for dp, dn, fn in os.walk(path):
            if ".git" in dp:
                continue
            for f in sorted(fn):
                if f.endswith(".md") and not f.endswith("README.md"):
                    yield os.path.join(dp, f)

target = sys.argv[1] if len(sys.argv) > 1 else ROOT
if not os.path.isabs(target):
    target = os.path.join(ROOT, target)

files = list(walk(target))
bad = 0
for f in files:
    fails = check_file(f)
    rel = os.path.relpath(f, ROOT)
    if fails:
        bad += 1
        print(f"FAIL {rel}: {'; '.join(fails)}")
print(f"\nChecked {len(files)} topic files: {len(files)-bad} pass, {bad} fail")
sys.exit(1 if bad else 0)
