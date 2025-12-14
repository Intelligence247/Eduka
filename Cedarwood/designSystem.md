# Eduka Project Design System
**Version:** 1.0
**Source of Truth:** Figma & Project Documentation
**Tech Stack:** React (MERN), Tailwind CSS (Recommended for implementation)

---

## 1. Core Visual Identity

### 1.1 Typography
**Font Family:** `Inter` (Google Fonts)
**Weights:**
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)

#### Heading Scale
*Usage: Use strictly for section headers.*
| Tag | Name | Size (px) | Line Height | Weight Options |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | Headline 1 | **56px** | 1.2 | Bold |
| **H2** | Headline 2 | **48px** | 1.2 | Bold, SemiBold |
| **H3** | Header 1 | **40px** | 1.3 | Bold, SemiBold |
| **H4** | Header 2 | **32px** | 1.3 | Bold, SemiBold |
| **H5** | Header 3 | **24px** | 1.4 | Bold, SemiBold |
| **H6** | Header 4 | **20px** | 1.4 | Bold, SemiBold |

#### Body Text Scale
*Usage: Default text color is Grey-900 or Grey-700.*
| Token | Name | Size (px) | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **p-xl** | Paragraph XL | **18px** | 28px | Intros, Lead text |
| **p-l** | Paragraph L | **16px** | 24px | Default Body text |
| **p-m** | Paragraph M | **14px** | 20px | Secondary text, Inputs |
| **p-s** | Paragraph S | **12px** | 16px | Captions, Hints |
| **p-xs** | Paragraph XS | **10px** | 12px | Badges, Tiny details |

---

## 2. Color System
*Note: The palette uses a 50-900 scale. When implementing in Tailwind, extend the theme with these specific values.*

### 2.1 Brand Colors
* **Primary (Blue):** The core brand color. Used for primary actions, active states, and links.
    * *Reference:* Look for `#0056D2` (approx) as the `Primary-600` or `Primary-500` anchor.
* **Accent (Yellow):** Used for icons, "New" badges, and star ratings.
* **Accent (Orange):** Used for highlights or secondary call-outs.

### 2.2 Functional Colors (Status)
* **Success (Green):** Completion, Valid states.
* **Warning (Gold/Amber):** Pending states, alerts.
* **Error (Red):** Validation errors, destructive actions.
* **Grey (Neutral):** Text, borders, backgrounds.

### 2.3 Backgrounds
* **Main Background:** `White (#FFFFFF)`
* **Section Background:** `Grey-50 (#F4F7FA approx)` - Used for alternating sections on landing pages.

---

## 3. UI Component Specifications

### 3.1 Buttons
*Border Radius: Rounded (approx 8px)*

**A. Primary Button**
* **Background:** `Primary-600` (Blue)
* **Text:** `White`
* **State (Hover):** Darken to `Primary-700`
* **State (Disabled):** `Primary-200` with reduced opacity.

**B. Secondary/Outline Button**
* **Background:** `Transparent`
* **Border:** 1px Solid `Primary-600`
* **Text:** `Primary-600`
* **State (Hover):** Light Blue background (`Primary-50`).

**C. Button Sizes**
* **Large:** Padding `16px 32px`, Text `16px` (p-l)
* **Medium:** Padding `12px 24px`, Text `14px` (p-m)
* **Small:** Padding `8px 16px`, Text `12px` (p-s)

### 3.2 Input Fields
*Style: Modern, Clean, Accessibility-focused.*

**Default State:**
* **Background:** `White` or extremely light grey (`Grey-50`)
* **Border:** 1px Solid `Grey-300`
* **Text:** `Grey-900`
* **Placeholder:** `Grey-400`
* **Radius:** 8px

**Active/Focus State:**
* **Border:** 2px Solid `Primary-600`
* **Shadow:** Light Blue ring/glow.

**Error State:**
* **Border:** 1px Solid `Error-600`
* **Helper Text:** `Error-600` text below the field.

---

## 4. Layout & Spacing Rules

### 4.1 Global Spacing
* **Section Padding (Vertical):** `80px` - `120px` for major sections.
* **Container Max-Width:** `1280px` (or Tailwind `max-w-7xl`) centered.
* **Grid Gaps:** standard `24px` (1.5rem) or `32px` (2rem).

### 4.2 Shadows
* **Card Shadow:** Soft, diffused shadow.
    * *CSS Estimate:* `box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);`

---

## 5. Specific Page Requirements

### 5.1 School Landing Page (Dynamic)
* **Dynamic Elements:** The logo, school name, hero image, and primary color theme must be fetched from the `SchoolConfig` database schema.
* **Navbar:** Contains Logo (Left) and "Login Portal" button (Right).
* **Hero Section:** H1 Headline + Subtext + "Get Started" CTA.
* **Features Grid:** 3-column layout using Icons (Accent Yellow) + H4 Header + Description.

### 5.2 Staff Dashboard
* **Layout:** Sidebar Navigation (Left) + Top Header (Search & Profile) + Main Content Area.
* **Sidebar Active State:** The active menu item uses the Primary Blue color/background to denote location.
* **Widgets:** Dashboard strictly uses "Card" components with white background and standard shadow.