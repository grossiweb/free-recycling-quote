# Recycling Quote — WordPress Block Editor Style Guide

This guide explains how to create and edit page content in WordPress that renders
correctly on the headless Next.js frontend.

---

## Key Principle

**WordPress controls CONTENT. The frontend controls LAYOUT and STYLING.**

Do NOT use inline colors, custom fonts, or manual spacing in the block editor.
The Next.js templates automatically apply the correct design system.

---

## Page Templates

| Template     | Used For                                | Layout Handled By              |
|--------------|-----------------------------------------|--------------------------------|
| Hub Page     | /services, /industries, /materials, etc | `HubPageTemplate.tsx`          |
| Doc Template | All subpages (e.g. /services/pallet-recycling) | `SubpageTemplate.tsx` |

### Hub Pages (e.g. Services, Industries, Materials, Resources, About)
- The **page title** becomes the H1 automatically
- The **excerpt** becomes the intro paragraph
- Content body appears below the hero section
- Keep content minimal — the template generates the sub-item card grid

### Subpages / Doc Template (e.g. Pallet Recycling, Retail, Electronics)
- The **page title** becomes the H1 in the hero section
- The **excerpt** becomes the intro text below the H1
- The **featured image** appears in the hero right column
- Content body appears in the main content area below the hero
- Two CTA buttons are added automatically: "Get a Quote" and "Schedule Pickup"

---

## Content Structure Rules

### Heading Hierarchy
- **H1** — NEVER use in the editor. The template adds H1 from the page title.
- **H2** — Main content sections (e.g. "What We Offer", "How It Works")
- **H3** — Subsections within an H2 section
- **H4-H6** — Rarely needed, use sparingly

### Recommended Page Structure (Doc Template)
```
H2: What We Offer / Overview
  Paragraph(s)

H2: How It Works
  Ordered or unordered list

H2: Why Choose Us / Benefits
  Paragraph or list

H2: FAQ (optional)
  Paragraph(s)
```

---

## Allowed Blocks

Use ONLY these Gutenberg blocks:

| Block          | Usage                                  |
|----------------|----------------------------------------|
| **Heading**    | H2, H3 only — section titles           |
| **Paragraph**  | Body text                              |
| **List**       | Bullet or numbered lists               |
| **Image**      | In-content images (with alt text)      |
| **Buttons**    | CTAs (see button styles below)         |
| **Separator**  | Horizontal rule between sections       |
| **Quote**      | Testimonials or callouts               |
| **Table**      | Data tables only                       |

### Blocks to AVOID
- Columns block (layout is handled by the frontend)
- Cover block (use featured image instead)
- Spacer block (spacing is controlled by the frontend)
- Custom HTML block (breaks the design system)
- Any third-party blocks with inline styling

---

## Button Styles

There are exactly TWO button styles. Do not create custom button designs.

### Primary Button (Green Pill)
- **Use for:** Main CTAs — "Get a Quote", "Learn More", "Contact Us"
- **In editor:** Add a Buttons block → select green background (#4BE576), dark text (#1E1E1E)
- **Frontend renders:** Green pill button with bold text, rounded-full

### Secondary Button (Dark Outlined)
- **Use for:** Secondary actions — "Schedule Pickup", "View All"
- **In editor:** Add a Buttons block → select outline style, dark color (#1F1E1E)
- **Frontend renders:** Dark outlined pill button

### Service Page Hero CTAs (Automatic)
Service/material/industry subpages automatically get two hero CTAs:
1. **Get a Quote** → links to /contact
2. **Schedule Pickup** → links to /schedule-pickup

You do NOT need to add these in the editor — they are injected by the template.

---

## Typography Reference

| Element       | Font Family      | Weight | Size  | Color   |
|---------------|------------------|--------|-------|---------|
| H1 (auto)     | SF Pro Display   | Bold   | 48px  | #1F1E1E |
| H2            | SF Pro Display   | Bold   | 32px  | #1F1E1E |
| H3            | SF Pro Display   | Bold   | 24px  | #1F1E1E |
| Body text     | Inter            | Regular| 16px  | #686767 |
| Small text    | Inter            | Regular| 14px  | #686767 |
| Button text   | Inter            | Bold   | 16px  | #1E1E1E |

---

## Color Palette

| Name              | Hex       | Usage                            |
|-------------------|-----------|----------------------------------|
| Primary Green     | `#4BE576` | Buttons, accents, links          |
| Dark              | `#1F1E1E` | Headings, nav text               |
| Body Gray         | `#686767` | Body paragraphs, descriptions    |
| Light Background  | `#F5F5F5` | Section backgrounds              |
| White             | `#FFFFFF` | Card backgrounds, page bg        |
| Footer Dark       | `#303030` | Footer background                |

**Do NOT** use colors outside this palette. Do NOT use the color picker in the editor
to set custom colors on individual blocks.

---

## Spacing

Spacing is controlled by the frontend. In the editor:
- Do NOT add Spacer blocks
- Do NOT add extra empty paragraphs for spacing
- Do NOT use custom padding/margin on blocks
- Just write clean content — the template handles spacing

---

## Images

- Always set **alt text** for accessibility
- Use the **Featured Image** panel (right sidebar) for the hero image
- In-content images should be relevant and high-quality
- Recommended: upload images at 2x resolution for retina displays
- The frontend handles responsive sizing — do not manually set dimensions

---

## SEO Fields

For each page, fill in:
1. **Title** — The page title (becomes H1 and browser tab title)
2. **Excerpt** — 1-2 sentence summary (becomes intro text and meta description)
3. **Featured Image** — Hero image for the page
4. **Slug** — URL-friendly name (auto-generated, verify it matches the routing)

### Slug Reference

| Page                    | Required Slug            |
|-------------------------|--------------------------|
| Services                | `services`               |
| Pallet Recycling        | `pallet-recycling`       |
| Business Recycling      | `business-recycling-programs` |
| Material Solutions      | `material-recycling-solutions` |
| Consumer Take Back      | `consumer-take-back-programs` |
| Collection Events       | `collection-events`      |
| Industries              | `industries`             |
| Retail                  | `retail`                 |
| Manufacturing           | `manufacturing`          |
| Distribution & Logistics| `distribution-logistics` |
| Construction            | `construction`           |
| Schools & Government    | `schools-government`     |
| Other Industries        | `other-industries`       |
| Materials               | `materials`              |
| Electronics             | `electronics`            |
| Metal                   | `metal`                  |
| Paper                   | `paper`                  |
| Plastic                 | `plastic`                |
| Cell Phones             | `cell-phones`            |
| Clothing / Textile      | `clothing-textile`       |
| Organics                | `organics`               |
| Chemicals               | `chemicals`              |
| Vehicle                 | `vehicle`                |
| Junk                    | `junk`                   |
| Pallets                 | `pallets`                |
| Light Bulbs             | `light-bulbs`            |
| Batteries               | `batteries`              |
| Dumpster Rental         | `dumpster-rental`        |
| Hazardous Materials     | `hazardous-materials`    |
| Resources               | `resources`              |
| Blog                    | `blog`                   |
| FAQ                     | `faq`                    |
| Videos                  | `videos`                 |
| About                   | `about`                  |
| Our Story               | `our-story`              |
| Why Choose Us           | `why-choose-us`          |
| ESG & Sustainability    | `esg-sustainability`     |
| Our Impact              | `our-impact`             |
| Contact                 | `contact`                |
| Schedule Pickup         | `schedule-pickup`        |

---

## WordPress Setup Checklist

1. Install the WPGraphQL plugin (required for headless)
2. Import `pages-menu-export.xml` via Tools > Import > WordPress
3. Go to Appearance > Menus, assign "Primary Navigation" to the PRIMARY location
4. Set permalinks to "Post name" (/%postname%/)
5. Optionally add `theme.json` to your active theme for editor styling
6. Set the NEXT_PUBLIC_WP_MENU_LOCATION env var to "PRIMARY" on your frontend

---

## Quick Checklist Before Publishing

- [ ] Page has a clear, descriptive title
- [ ] Excerpt is filled in (1-2 sentences)
- [ ] Featured image is set (for subpages)
- [ ] Slug matches the routing table above
- [ ] Content starts with H2 (never H1)
- [ ] No inline colors or custom fonts used
- [ ] No Spacer or Columns blocks
- [ ] Images have alt text
- [ ] Parent page is set correctly (e.g. Pallet Recycling → parent: Services)
