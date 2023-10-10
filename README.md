# Ahavas Chaya Site
[![Netlify Status](https://api.netlify.com/api/v1/badges/a019aca2-0ed7-4aeb-9cec-81cdb983677a/deploy-status)](https://app.netlify.com/sites/ahavaschaya/deploys)

My personal starter for [Eleventy](https://www.11ty.dev) sites.

## [📱 Live demo ›](https://razorux-eleventy-starter.netlify.app/)

## Features

*Performance*
* 100% Lighthouse score
* Optimized Font Loading (self-hosted Google Fonts)
* Optimized Image loading (`<picture>` with `avif` & `webp`)
* Cache-busting with `?=version`
* Optimized Netlify build time with the Netlify Cache plugin
* [Quicklink](https://github.com/GoogleChromeLabs/quicklink)

*Robustness*
* Asset Retry

*SEO ready*
* SEO ready with OpenGraph & Twitter meta tags
* Open Graph card image & Favicon ready
* SEO with JSON-LD

*Embedding:*
* JSON embedding
* YouTube embedding
* ENV VAR embedding
* SVG embedding

## Included libraries
* [Tailwind CSS](https://tailwindcss.com)
* [Alpine.js](https://alpinejs.dev) JS microframework
* [Phosphor](https://phosphoricons.com) icons

*Eleventy Plugins*
* [`nbsp`](https://github.com/jeremenichelli/eleventy-nbsp-filter#readme) filter
* [Emoji Read Time](https://github.com/5t3ph/eleventy-plugin-emoji-readtime)

*Monitoring:*
* [Fathom Analytics](http://usefathom.com) privacy-respecting analytics
* [Honeybadger](http://honeybadger.io) error monitoring
* [Fullstory](https://www.fullstory.com) simulated video monitoring


## Launch checklist

* Set up [Honeybadger deploy tracking](https://docs.honeybadger.io/lib/javascript/guides/tracking-deploys/)


## To-do
- [ ] Update `manifest.json` from `seo.json`
- [ ] Fix footer
- [ ] Fix JSON-LD for FAQs (diy's in the front matter of `index.njk`)



## Components
- [x] Hero
- [x] Navbar
- [x] Sticky navbar
- [x] Mega bullets
- [x] Article CTA
- [x] FAQ - [NEW] - collapsable on mobile!
- [x] Footer
- [x] Footer social links
- [x] Footer links
- [x] Footer link badges
- [x] Mailing list signup
- [x] Mobile Menu toggle
- [x] Mobile Menu
- [x] Section background images
- [ ] Navbar dropdown
- [ ] Navbar mega dropdown
- [ ] Slider with lightbox
- [ ] Gallery
- [x] Logo Cloud
- [ ] Testimonial cloud
- [ ] Contact Us
- [ ] Contact Form
- [ ] Blog snippets
- [ ] Blog page
- [ ] Search

## Someday

- [ ] [Service Worker?](https://www.npmjs.com/package/eleventy-plugin-pwa)


### Other
- [x] Auto-updating copyright year
- [x] Open Graph image
- [x] Favicons


## Getting Started

1. Copy `.env.example`. Rename to `.env`, then fill out all values.
2. Generate Favicons with https://realfavicongenerator.net. Place the files in `/public`
3. Run fonts through https://google-webfonts-helper.herokuapp.com and add them to `/fonts`.
Then update `styles/tailwind.config.js` to use the new font.

## Other features

### Canonical URLs

To add a [canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) to a blog post, add the `canonicalUrl` property to your front matter.


## Shortcodes

### Link

```nunkucks
{% link {
 url: "", 
 label: "",
 ariaLabel: "",
 cssClasses: "",
 inlineStyles: "",
 attributes: "",
 openInNewTab: false,
 download: false,
 protectFromScrapers: false,
 fathomClickId: ""
} %}
{% endlink %}
```


### Embed an SVG

```
{{ '/images/backgrounds/Background Ellipse 1.svg' | svgContents(".css_classes") | safe }}
```

### Embed an Icon

```
	{{ '/phosphor-icons/regular/caret-left.svg' | svgContents("icon-lg") | safe }}
```

### Embed a responsive image

```
	{% image {src: partner.imagePath, alt: partner.imageDescription, widths: [600, 320, 300, 160], cssSizes: '(max-width: 639px) 160px, 300px', cssClass: ''} %}
```

### Other

## Logo SVG Viewbox

For some reason, the SVG logos have huge amounts of padding.
This can be fixed by manually changing the `viewBox` attribute on the `svg` element to this value:

```svg
viewBox="520 650 2030 560"
```

### Using JSON-LD

```liquid
{% jsonLdScript meta, type, tags %}
```

`type` is a String that can be "page", "post", or "product". Anything else will be silently ignored. Default is "page"
`tags` is an Array[String]. It only has an effect on the "post" type. Otherwise it'll be ignored.

The generated JSON LD will try to render:
- organization
- breadcrumbs
- website
- faq

Depending on `type` it'll also render a "page", "post", or "product".



## Thank You

* Original theme by [Greg Wolanski](https://gregwolanski.com)


## License

This repository is property of Ahavas Chaya Inc.
All rights reserved.

See `LICENSE` for more information.
