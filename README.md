# aartiksarma.github.io

Personal site. Jekyll, built natively by GitHub Pages — there is no CI workflow
and no build step to run before pushing. Push to the default branch and the
site rebuilds.

## Where things live

| What | File |
|---|---|
| Name, title, email, social links | `_config.yml` |
| Publication list | `_data/publications.yml` |
| Software list | `_data/software.yml` |
| Media / interviews | `_data/media.yml` |
| Homepage copy | `index.html` |
| Research narrative | `research.md` |
| CV entries | `cv.html` |
| Design tokens, all styling | `assets/css/main.css` |
| Page shell, nav, footer | `_layouts/`, `_includes/` |

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
  summary: >-
    One or two plain-language sentences saying why it matters. Shown under
    featured papers.
```

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

Add an entry to `_data/media.yml`. `title`, `outlet`, and `url` are required;
`featured: true` also surfaces it on the homepage. The **Media** nav link only
appears while that file has at least one entry.

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
