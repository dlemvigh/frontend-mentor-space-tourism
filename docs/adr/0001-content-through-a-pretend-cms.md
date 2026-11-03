# Content comes through a pretend CMS

All content, including every piece of UI copy (headings, nav labels, hero text), is read through an async, schema-validated content module that imitates a headless CMS SDK (Contentful-style). The backing data is a local JSON file. Nothing imports that JSON directly, and no component hardcodes text. We do this on purpose, even though a plain JSON import would be simpler: the project is practice for building statically rendered sites on top of a real CMS.

## Considered Options

- **Direct `data.json` import**: rejected. It's simplest, but it doesn't exercise the CMS boundary, which is the point of the project.
- **Page + blocks model** (each page is `contents: Module[]`, rendered by a block renderer), which is how our production CMS works: rejected. Generic typed collections (Destinations, Crew Members, Technologies, Section copy) couple data and code more tightly, but are much easier to reason about at this size.

## Consequences

- Localization is out of scope. Real CMSs usually take a locale argument; we deliberately leave it out, because there's no localized data.
