# ACF Hero Section Setup Guide

Control the hero/banner section of every page from WordPress.

---

## 1. Install Required Plugins

Install and activate these plugins on your WordPress site:

1. **Advanced Custom Fields (ACF)** - Free version
   - WordPress admin > Plugins > Add New > Search "Advanced Custom Fields"
   - Install and Activate

2. **WPGraphQL for ACF** - Exposes ACF fields in GraphQL
   - Download from: https://github.com/wp-graphql/wpgraphql-acf
   - Upload via Plugins > Add New > Upload Plugin
   - Activate

---

## 2. Create the "Hero Section" Field Group

Go to **ACF > Field Groups > Add New**

### Field Group Settings

| Setting | Value |
|---------|-------|
| **Title** | Hero Section |
| **Show in GraphQL** | Yes (toggle ON) |
| **GraphQL Field Name** | heroSection |
| **Location Rules** | Post Type is equal to Page |

### Fields

Add these 4 fields:

#### Field 1: Hero Subtitle
| Setting | Value |
|---------|-------|
| **Label** | Hero Subtitle |
| **Name** | hero_subtitle |
| **Type** | Text |
| **Instructions** | Small uppercase text above the page heading (e.g., "Resources", "Services", "Get In Touch") |
| **Show in GraphQL** | Yes |

#### Field 2: Hero Description
| Setting | Value |
|---------|-------|
| **Label** | Hero Description |
| **Name** | hero_description |
| **Type** | Textarea |
| **Rows** | 3 |
| **Instructions** | Paragraph below the page heading. Leave empty to use the default description. |
| **Show in GraphQL** | Yes |

#### Field 3: Hero Background Type
| Setting | Value |
|---------|-------|
| **Label** | Hero Background Type |
| **Name** | hero_background_type |
| **Type** | Select |
| **Choices** | `gradient : Default Gradient` / `image : Background Image` / `dark : Dark Background` |
| **Default Value** | gradient |
| **Instructions** | Controls the hero section background style. |
| **Show in GraphQL** | Yes |

#### Field 4: Hero Background Image
| Setting | Value |
|---------|-------|
| **Label** | Hero Background Image |
| **Name** | hero_background_image |
| **Type** | Image |
| **Return Format** | Image Array |
| **Instructions** | Only used when Background Type is "Background Image". Recommended size: 1920x600px. |
| **Conditional Logic** | Show this field if Hero Background Type equals "image" |
| **Show in GraphQL** | Yes |

Click **Publish** to save the field group.

---

## 3. How to Use

### Edit any Page in WordPress:

1. Go to **Pages** and edit any page
2. Scroll down to the **Hero Section** panel
3. Fill in the fields:
   - **Hero Subtitle**: Override the small text above the heading
   - **Hero Description**: Override the paragraph below the heading
   - **Hero Background Type**: Choose gradient (default), image, or dark
   - **Hero Background Image**: Upload an image (only when type = "image")
4. Click **Update** to save

### Background Types:

| Type | Appearance |
|------|-----------|
| **Default Gradient** | Light green-to-white gradient with dark text (current design) |
| **Background Image** | Full-width image with dark overlay and white text |
| **Dark Background** | Solid dark (#1F1E1E) background with white text |

### Fallback Behavior:

- If you leave fields empty, the page uses its hardcoded default text
- If ACF is not installed or fields are empty, everything works as before
- The page **title** (WordPress page title) is always used as the H1 heading

---

## 4. Verify in GraphQL

After setup, test in the WPGraphQL IDE (WordPress admin > GraphQL > IDE):

```graphql
{
  page(id: "contact", idType: URI) {
    title
    heroSection {
      heroSubtitle
      heroDescription
      heroBackgroundType
      heroBackgroundImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}
```

You should see your ACF field values in the response.

---

## 5. Recommended Image Sizes

For hero background images:
- **Minimum**: 1920 x 600px
- **Recommended**: 1920 x 800px
- **Format**: JPEG (compressed) or WebP
- **File size**: Keep under 200KB for performance
- Use images with good contrast for text readability (the site adds a 60% dark overlay automatically)
