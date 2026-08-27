# aartiksarma.github.io

Personal site. Jekyll, built natively by GitHub Pages — there is no CI workflow
and no build step to run before pushing. Push to the default branch and the
site rebuilds.

## Where things live

| What | File |
|---|---|
| Name, title, email, social links | `_config.yml` |
| Publication list | `_data/publications.yml` |
| Software list (page currently off) | `_data/software.yml` |
| Media / interviews | `_data/media.yml` |
| Homepage note | `index.html` |
| Research narrative | `research.md` |
| CV entries | `cv.html` |
| Design tokens, all styling | `assets/css/main.css` |
| Page shell, nav, footer | `_layouts/`, `_includes/` |

## The Software page is parked

`software.html` carries `published: false`, so Jekyll skips it and the nav link
is commented out. The file and `_data/software.yml` are untouched — the header
comment in `software.html` lists the three steps to bring it back. Until then,
"open tools" on the homepage and "open source" on the research page point
straight at GitHub.

## The homepage

`index.html` is a first-person note aimed at a general and technical audience,
not an academic one — the academic version is UCSF Profiles, linked at the end.
It has no cards, buttons, or section headings: links sit inside the sentences
and do the navigating. Keep it that way when editing, and keep it short. It is
currently ~430 words.

**There is an empty spot for a personal paragraph**, marked by a Liquid comment
near the bottom of the file. Nothing placeholder-y is published while it stays
commented out. Delete the comment markers and write two or three sentences of
non-work material to turn it on.

## Adding a publication

Copy an existing block in `_data/publications.yml` and fill it in. Only `year`,
`title`, `journal`, and `authors` are required.

```yaml
- year: 2026
  title: "Title in sentence case"
  journal: "Journal name"
  authors: "Sarma A, Coauthor B, Coauthor C"
  doi: "10.1234/example"
  pmid: "12345678"
  role: first        # first | senior | (omit for contributing)
  kind: research     # research | review | commentary | guideline | trial
  featured: true     # promotes it to "Selected work" on the homepage
  code: "https://github.com/aartiksarma/repo"
```

There is also an optional `summary` field — one or two plain-language sentences
saying why a paper matters, rendered beneath it. It is unused at the moment; set
it on any paper to turn it back on for that entry.

Notes:

- `Sarma A` is bolded automatically wherever it appears in `authors`.
- Author lists longer than 10 names are truncated to the first 6, and your own
  name is always kept visible even when it falls past the cutoff. Change
  `publications.max_authors` in `_config.yml` to show full lists.
- Preprint versions of published papers are deliberately omitted so each study
  appears once.
- Publications sort by `year`, newest first. The filter chips on the page are
  driven by `role` and `kind`.

## Adding a media appearance

Add an entry to `_data/media.yml`, newest first. Only `title` and `outlet` are
required — omit `url` and the title renders as plain text rather than a dead
link. The **Media** nav link only appears while that file has at least one
entry.

When an outlet's own headline describes something other than your contribution
— a roundup that bundles several pieces, say — title the entry for what you
actually said and put their headline in `published_as`, which renders in small
type underneath so a reader isn't surprised on arrival.

There is an optional `quote` field for a pull quote. It suits someone else's
words about the work better than quoting yourself, and is unused by default. If
you do use it, keep the quote contiguous — don't splice sentences from different
parts of a piece together.

## Starting the blog

Drop a file in `_posts/` named `YYYY-MM-DD-slug.md`:

```markdown
---
title: "Post title"
subtitle: "Optional one-line standfirst"
description: "Optional summary used on the index page and for SEO."
---

Body text.
```

The **Writing** link appears in the navigation on its own once at least one post
exists, and disappears again if the directory is emptied.

## Things worth knowing

- **No gem theme.** `_config.yml` has no `theme:` key, so the layouts in
  `_layouts/` and `_includes/` are the whole design. GitHub Pages falls back to
  `jekyll-theme-primer` when no theme is set, so `assets/css/style.scss` exists
  purely to shadow that theme's stylesheet and keep it out of the build.
- **Light and dark.** The palette follows the visitor's system setting, and the
  toggle in the header overrides it and remembers the choice. Both palettes are
  defined at the top of `assets/css/main.css`; changing `--accent` there
  re-tints the whole site.
- **Blanking a link removes it.** Set any value under `social:` in `_config.yml`
  to `""` and that footer link disappears.
- **The CV is hand-written.** Entries live directly in `cv.html` as `.cv-block`
  elements — copy one to add a row. A comment at the top of the file notes what
  is still worth adding.

## Running it locally

```sh
bundle install
bundle exec jekyll serve   # http://localhost:4000
```
