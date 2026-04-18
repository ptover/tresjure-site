# Tresjure Site Growth Upgrade Implementation Plan

> **For Hermes:** Implement directly in the static site repo and verify with browser + HTTP checks after each major change.

**Goal:** Upgrade tresjure.com from a polished one-page brand site into a stronger SEO and conversion site with supporting pages, technical search infrastructure, richer content, and thorough QA.

**Architecture:** Keep the site static and GitHub Pages-friendly. Reuse one shared stylesheet and one shared JS file across the homepage and new supporting pages. Add crawl/indexing files, structured data, and clearer conversion paths without introducing forms or backend dependencies that could fail.

**Tech Stack:** Static HTML/CSS/JS, GitHub Pages, browser QA, Python scripts for safe refactors/generation.

---

### Task 1: Extract shared assets
**Objective:** Move inline CSS/JS into reusable files so multiple pages can share the design.

**Files:**
- Modify: `/opt/hermes/work/tresjure-site/index.html`
- Create: `/opt/hermes/work/tresjure-site/styles.css`
- Create: `/opt/hermes/work/tresjure-site/main.js`

**Verification:** Homepage still renders correctly after extraction.

### Task 2: Add SEO infrastructure
**Objective:** Add crawl/indexing files and richer metadata.

**Files:**
- Modify: `/opt/hermes/work/tresjure-site/index.html`
- Create: `/opt/hermes/work/tresjure-site/robots.txt`
- Create: `/opt/hermes/work/tresjure-site/sitemap.xml`

**Verification:** `robots.txt` and `sitemap.xml` return 200 and include the main URLs.

### Task 3: Add structured data
**Objective:** Add JSON-LD for person/organization/site/book/FAQ where factual.

**Files:**
- Modify: `/opt/hermes/work/tresjure-site/index.html`
- Create or modify supporting pages as needed for page-specific schema.

**Verification:** JSON-LD blocks exist in the HTML and contain only factual data.

### Task 4: Create supporting landing pages
**Objective:** Add crawlable supporting pages for About, Books, Media, and Contact.

**Files:**
- Create: `/opt/hermes/work/tresjure-site/about.html`
- Create: `/opt/hermes/work/tresjure-site/books.html`
- Create: `/opt/hermes/work/tresjure-site/media.html`
- Create: `/opt/hermes/work/tresjure-site/contact.html`
- Modify: `/opt/hermes/work/tresjure-site/index.html`

**Verification:** Each page loads, has unique title/meta/canonical, and links back into the site.

### Task 5: Improve homepage conversion support
**Objective:** Add sections that increase trust and make the page more commercially useful.

**Files:**
- Modify: `/opt/hermes/work/tresjure-site/index.html`

**Verification:** Homepage includes stronger credibility, buying guidance, and FAQ/CTA support while keeping a premium look.

### Task 6: QA all key flows
**Objective:** Confirm the site works cleanly across local and live checks.

**Files:**
- No content files; use browser and terminal validation.

**Verification:**
- Internal pages return 200
- HTTPS still works
- Navigation links work
- No browser console errors on key pages
- robots, sitemap, manifest load successfully

### Task 7: Publish and verify
**Objective:** Push all improvements, confirm GitHub Pages rebuild, and verify live production.

**Files:**
- All modified files above.

**Verification:** GitHub Pages reports built, and live pages return 200 over HTTPS.
