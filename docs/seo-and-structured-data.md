# SEO and structured data

What MedMosa tells crawlers, on which routes, and — at least as important —
what it refuses to tell them.

Source: `index.html` (the static head), `src/App.tsx` (per-route metadata),
`src/lib/structured-data.ts` (JSON-LD), `scripts/generate-sitemap.mjs` and
`scripts/site-routes.mjs` (the sitemap), and
`scripts/create-github-pages-fallback.mjs` (per-route canonical URLs on a
static host).

There are no third-party scripts, fonts, analytics or verification tags
anywhere in this. Nothing on any page makes a network request to anyone.

## What is emitted

### The static head, on every page

`index.html` ships the tags a crawler needs before any JavaScript runs:
`title`, `description`, `robots` (`index, follow, max-image-preview:large`),
`theme-color`, `color-scheme`, a canonical link, `og:type`, `og:site_name`,
`og:locale`, `og:title`, `og:description`, `og:url`, `og:image` (absolute, with
width, height and alt), and the Twitter card tags.

`twitter:card` is `summary_large_image`, which is only honest because
`public/og.png` really exists at 1200×630. If that file is ever removed, the
card must drop to `summary`; `scripts/validate-structured-data.mjs` fails the
build rather than let the site promise an image it cannot serve.

The head also carries one static JSON-LD node, `EducationalOrganization`: the
name, slogan, URL, audience and a description that states in as many words that
MedMosa is not a medical provider.

### Per-route metadata, at run time

`applyDocumentMetadata` in `src/App.tsx` rewrites `document.title`, the
canonical link, `description`, `og:title`, `og:description`, `og:url`,
`og:image`, `twitter:title`, `twitter:description` and `twitter:image` on every
route change, from the `PAGE_METADATA` table and `staticMetadataFor`.

Curriculum unit and topic titles live in lazily-loaded bundles, so the route
effect refines the title a second time once the real record has loaded. A route
that resolves to nothing gets the title `Page not found`.

### JSON-LD, at run time

`src/lib/structured-data.ts` writes two node types into the head, and only two:

| Type | Where | Built from |
| --- | --- | --- |
| `WebSite` | every route | the site name and the deployment origin |
| `BreadcrumbList` (of `ListItem`) | every route with a real trail | the same crumbs the page renders |

Breadcrumbs mirror the visible trail: Home, then one crumb per path segment,
each with a 1-based `position` and an absolute `item` URL. They are produced
for the course, unit, topic, practice, study-path and classic-library routes —
`/learn/:subject`, `/learn/:subject/:unit`, `/learn/:subject/:unit/:topic`,
`/paths/:pathSlug`, `/subjects/...` — and for the single-segment pages
(`/coverage`, `/review`, `/paths`, `/search`, the legal pages, and so on).

Names are real titles wherever the app can resolve one synchronously (course,
study-path, classic-library subject and lesson titles) or once the lazy
curriculum record arrives (unit and topic titles). Anything unresolved falls
back to a title-cased slug rather than a raw URL fragment.

Nothing is emitted where a trail would be a fiction:

- the site root, which is one crumb and therefore not a trail;
- `/404`, `/error`, `/prototype/*` and `/auth/callback`;
- any route whose metadata resolved to `Page not found`, so a soft 404 never
  ships a breadcrumb for a page that is not there.

Each element is built with `document.createElement` and its payload is assigned
with `textContent`, never as markup. Every element is tagged
`data-medmosa-schema`, and `applyStructuredData` removes the ones it wrote
before writing new ones, so a route change replaces the markup instead of
stacking another copy on it. The router's effect cleanup clears them outright,
so a breadcrumb cannot outlive the page it described.

### The sitemap

`scripts/generate-sitemap.mjs` writes `dist/sitemap.xml` from the same route
list the static route entry points are generated from, so the two cannot drift.
Priorities:

| Priority | Routes |
| --- | --- |
| `1.0` | the homepage |
| `0.9` | `/learn`, `/search`, `/questions` |
| `0.8` | a course, `/coverage`, `/review`, `/paths` |
| `0.7` | a unit, a course's practice page, `/paths/<slug>` |
| `0.6` | everything else, including topics and the classic library |
| `0.3` | `/terms`, `/privacy`, `/licensing`, `/accessibility` |
| — | `/404` and `/error` are excluded entirely, as is `/auth/callback` |

The legal pages are indexable and belong in the sitemap — they are how a reader
checks the licensing and the medical disclaimer — but they are not what anyone
came here to study.

## What is deliberately NOT emitted, and why

This is the part that matters. schema.org has types that would make this site
look far more institutional than it is. None of them are used.

**No `Course` or `CourseInstance`.** Those types carry provider, enrolment and
credential semantics. MedMosa enrols nobody, awards nothing, has no instructor
of record and no term dates. A course node would assert a relationship that
does not exist, purely to win a richer search result.

**No `Quiz`, `Question` or accepted-answer markup.** What this library holds is
study material with written rationales, not a graded or calibrated assessment.
Marking the questions up as structured answers would also invite a search
result to lift the answer away from the explanation that is the only reason the
question is worth anything.

**No `EducationalOccupationalCredential`, and no exam-alignment claim.** There
is no exam blueprint anywhere in this repository, and no mapping from this
material to one. `docs/study-paths.md` declines the same claim for the same
reason: publishing a TEAS, HESI, NCLEX or MCAT alignment would mean inventing a
syllabus and implying a correspondence nobody has checked.

**No medical types** — no medical entity, condition, medical web page, drug or
guideline markup, and no `Physician` or clinical-author node. Those types imply
clinical authorship and clinical review. This content is developed from open
educational resources, peer-reviewed research and publicly available academic
references; there is no credentialed clinical reviewer behind it, and the site
says so on `/about` and in the terms.

**No `Review` or `AggregateRating`.** Nobody has rated this site. Star ratings
in a search result that came from nowhere are fabricated social proof.

**No `FAQPage` or `HowTo`** scraped out of note bodies, and no `speakable`
markup. The notes are not written as answers to the questions that would be
claimed for them.

A structured-data claim the project cannot back is untrue first and a
manual-action risk second. The allowed set is therefore exactly `WebSite`,
`BreadcrumbList` and `ListItem`.

### The sitelinks search box

`WebSite` has an optional `SearchAction` — the sitelinks search box — and it is
deliberately absent.

`src/pages/SearchPage.tsx` keeps its query in component state and never reads
the query string, so `/search?q=` is not a working endpoint: the parameter is
ignored and the visitor lands on an empty search form. A `SearchAction` was
removed from the static `EducationalOrganization` node in `index.html` for the
same reason — it had been advertising that endpoint.

`SearchAction` stays on the validator's allowed list so the markup can be
restored the day the search page reads the parameter. Until then the site does
not advertise a search endpoint that does not work.

## The canonical-URL contract on a static host

MedMosa is a single-page app. On GitHub Pages,
`scripts/create-github-pages-fallback.mjs --routes` writes a copy of
`index.html` into a directory for every route, and rewrites two tags in each
copy so the route advertises itself rather than the homepage:

```
/<link rel="canonical" href="[^"]*" \/>/
/<meta property="og:url" content="[^"]*" \/>/
```

Those regexes require the exact current formatting of both tags, **including
the space before the closing slash**. Reformat either tag — rewrap it across
lines, drop the space — and the replacement silently stops matching. Nothing
throws; every one of the ~2,000 route entry points just ships
`https://medmosa.org/` as its canonical URL, and the whole site looks like
duplicate content.

`scripts/validate-structured-data.mjs` checks both directions: that `index.html`
still matches the regexes, and that the fallback script still contains them. If
either side moves, the build fails loudly instead of the site failing quietly.

## Validation

```
node scripts/validate-structured-data.mjs
npm run typecheck
```

`validate-structured-data` analyses `src/lib/structured-data.ts` and
`index.html` statically, with no build step, and fails on: a schema type
outside the allowed set; any of the refused types appearing as a quoted string;
an `@context` that is not `https://schema.org`; markup assigned through an HTML
sink instead of `textContent`; a missing element marker attribute (which would
let route changes accumulate duplicate JSON-LD); a missing canonical, `og:url`,
`og:title`, `og:description`, `og:image` or `twitter:card` tag; a relative
`og:image`; a large-image Twitter card with no `public/og.png`; and either side
of the canonical rewrite contract above drifting.

`tests/unit/structured-data.test.ts` covers the builders themselves: the
`WebSite` shape, breadcrumbs below two crumbs producing nothing, 1-based
contiguous positions, absolute item URLs, crumb derivation for a topic, a
course, a study path and the site root, and that no disallowed type is ever
produced for any route.
