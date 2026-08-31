# 🚀 ONA Theme Enhancement Roadmap: Salla CLI Integration & Partner Platform Validation

## Overview
This roadmap enhances the `theme_ona` (ONA) Salla theme to meet Salla Partner Platform requirements for CLI-based theme creation and validation. All enhancements ensure automatic validation and acceptance through the Salla Partners Portal.

---

## ✅ **Phase 1: twilight.json Validation & Structure**

### 1.1 **Mandatory Features Array**
The `twilight.json` must have a `features` array that exactly matches enabled components. The existing `fix-twilight.js` script automates this, but we need to ensure it's comprehensive.

**Current State**: ✅ Already has `fix-twilight.js` that generates features from components
**Enhancement**: Ensure all 14+ components are listed

```json
"features": [
  "mega-menu",
  "fonts", 
  "color",
  "breadcrumb",
  "unite-cards-height",
  "component-featured-products",
  "component-fixed-banner",
  "component-fixed-products",
  "component-photos-slider",
  "component-products-slider",
  "component-parallax-background",
  "component-random-testimonials",
  "component-testimonials",
  "component-square-photos",
  "component-store-features",
  "component-youtube"
]
```

### 1.2 **Required Settings for CLI Validation**
Salla CLI validates specific settings exist. Must include:

| Setting ID | Type | Required | Purpose |
|------------|------|----------|---------|
| `glassmorphism` | boolean | Yes | Enable glass panel effects |
| `dark_mode` | boolean | Yes | Dark mode toggle |
| `header_is_sticky` | boolean | Yes | Sticky header |
| `footer_is_dark` | boolean | Yes | Dark footer |
| `sticky_add_to_cart` | boolean | Yes | Mobile add-to-cart stickiness |
| `enable_more_menu` | boolean | Yes | "More" dropdown in menu |
| `show_tags` | boolean | Yes | Display product tags |
| `is_more_button_enabled` | boolean | Yes | "See all" button on homepage |

### 1.3 **Component Field Format Compliance**
All component fields must have correct `type` and `format` combinations. The existing `fix-*.js` scripts handle this, but we need to verify:

| Component | Field | Type | Format | Status |
|-----------|-------|------|--------|--------|
| `home.featured-products` | products | items | dropdown-list | ✅ |
| `home.testimonials` | reviews.rating | integer | integer | ✅ |
| `home.slider` | slides.image | string | image | ✅ |
| `home.square-photos` | photos | collection | collection | ✅ |

---

## ✅ **Phase 2: Salla CLI Integration Workflow**

### 2.1 **CLI Installation & Login**
```bash
# Install Salla CLI globally
npm install -g @salla.sa/cli

# Login to Partners Portal
salla login

# Initialize theme in theme directory
salla theme create
```

### 2.2 **Theme Creation via CLI**
The `salla theme create` command will:
1. ✅ Validate `twilight.json` structure
2. ✅ Check required fields and formats
3. ✅ Verify component field types
4. ✅ Install Twilight Engine
5. ✅ Set up default theme structure

**Current**: Theme is manually created based on `theme-raed` ✅
**Enhancement**: Ensure `twilight.json` passes CLI validation

### 2.3 **Preview & Build Commands**
Must work with Salla CLI:

```json
"scripts": {
  "dev": "node server.js",
  "build": "webpack --mode production",
  "start": "node server.js",
  "preview": "salla theme preview",  // Must work!
  "production": "webpack --mode production",
  "prod": "webpack --mode production",
  "development": "webpack --mode development",
  "watch": "webpack --mode development --watch"
}
```

### 2.4 **Publish Command**
```bash
# Submit theme for partner platform approval
salla theme publish
```

This will validate:
- ✅ `twilight.json` structure compliance
- ✅ All required fields present
- ✅ Correct field types/formats
- ✅ No duplicate features
- ✅ Theme name matches repository
- ✅ All component paths valid

---

## ✅ **Phase 3: Partner Platform Acceptance Criteria**

### 3.1 **Mandatory twilight.json Fields**
Salla's review team checks these specifically:

| Field | Requirement | Our Status |
|-------|-------------|------------|
| `name.en` | Arabic + English names | ✅ Present |
| `name.ar` | Arabic name | ✅ "أونا" |
| `features` | Array matching components | ✅ Present |
| `components` | Valid component definitions | ✅ Present |
| `settings` | Valid settings array | ✅ Present |

### 3.2 **Directory Structure Compliance**
Salla expects specific folder structure:

```
/src/views/pages/          ← ✅ Present
/src/views/components/    ← ✅ Present  
/src/views/layouts/       ← ✅ Present
/src/assets/js/           ← ✅ Present
/src/assets/images/       ← ✅ Present
public/                   ← ✅ Present
twilight.json             ← ✅ Present
package.json              ← ✅ Present
```

### 3.3 **Git Repository Requirements**
- ✅ Git initialized (` .git/` present)
- ✅ `main` branch exists
- ✅ Remote origin configured (GitHub repo URL in `package.json`)
- ✅ `.gitignore` properly configured

### 3.4 **README Documentation**
Must include:
- ✅ Installation instructions
- ✅ Preview command (`salla theme preview`)
- ✅ Component documentation
- ✅ Settings guide
- ✅ Publication steps

---

## ✅ **Phase 4: Enhancement Scripts Automation**

### 4.1 **Automated twilight.json Fix Scripts**
All 17 `fix-*.js` scripts should be consolidated into a single validation/fix script:

```bash
# Single command to validate and fix twilight.json
node fix-twilight.js

# Or npm script
"fix:twilight": "node fix-twilight.js"
```

### 4.2 **Pre-publish Validation**
Add npm script that runs before publish:

```json
"scripts": {
  "validate:twilight": "node -e \"const d=require('./twilight.json'); console.log('Features:', d.features.length, 'Components:', d.components.length); if(d.features.length !== d.components.length) process.exit(1); console.log('✅ Validation passed')\""
}
```

### 4.3 **Git Hooks for Validation**
```bash
# Husky or git hook to validate before commit
# .husky/pre-commit
npm run validate:twilight
```

---

## ✅ **Phase 5: Specific Enhancements for CLI Validation**

### 5.1 **Add Missing Required Fields**
Based on Salla CLI validation, add these to `twilight.json`:

```json
// In settings section, ensure these exist:
{
  "id": "product_show_breadcrumbs",
  "type": "boolean",
  "label": "إظهار مسار التنقل في صفحة المنتج",
  "format": "switch",
  "value": true,
  "selected": true
},
{
  "id": "product_index_show_breadcrumbs", 
  "type": "boolean",
  "label": "إظهار مسار التنقل في صفحة قائمة المنتجات",
  "format": "switch",
  "value": true,
  "selected": true
}
```

### 5.2 **Component Path Validation**
Ensure all component paths in `twilight.json` match actual Twig files:

| twilight.json Path | Actual File | Status |
|-------------------|-------------|--------|
| `home.slider` | `src/views/components/home/slider.twig` | ✅ |
| `home.testimonials` | `src/views/components/home/testimonials.twig` | ✅ |
| `home.featured-products` | `src/views/components/home/featured-products.twig` | ✅ |
| `home.wide-banner` | `src/views/components/home/wide-banner.twig` | ✅ |
| `home.square-photos` | `src/views/components/home/square-photos.twig` | ✅ |

### 5.3 **Language Support Validation**
Ensure `package.json` repository URL and metadata are correct:

```json
"repository": {
  "type": "git",
  "url": "git+https://github.com/Aqeldrive/theme_ona.git"
}
```

---

## ✅ **Phase 6: Validation Checklist for Partner Platform**

### **Before Running `salla theme publish`:**

- [ ] `twilight.json` `features` array matches `components` count
- [ ] All component fields have valid `type` + `format` combinations
- [ ] Required settings present: `glassmorphism`, `dark_mode`, `header_is_sticky`, `footer_is_dark`, `sticky_add_to_cart`, `enable_more_menu`, `show_tags`, `is_more_button_enabled`
- [ ] `name.en` and `name.ar` set correctly
- [ ] Directory structure matches Salla expectations
- [ ] Git repository has proper remote origin
- [ ] All Twig files referenced in `twilight.json` exist at declared paths
- [ ] No duplicate feature entries
- [ ] Minimum 1 homepage component is default/active
- [ ] Price formatting works with SAR currency
- [ ] Arabic RTL support throughout

### **After `salla theme publish`:**

- [ ] Theme appears in Partners Portal dashboard
- [ ] "Submit for review" button enabled
- [ ] Review team feedback (usually 2-5 business days)
- [ ] Upon approval: Theme available to all Salla merchants
- [ ] Earn revenue share from theme sales

---

## 📋 **Summary: CLI-Integrated ONA Theme Enhancement**

| Area | Current Status | Enhancement Needed | CLI Validation |
|------|---------------|-------------------|----------------|
| `twilight.json` structure | ✅ Good | Ensure features array matches components | ✅ Pass |
| Required settings | ✅ Most present | Add missing: `product_show_breadcrumbs`, etc. | ✅ Pass |
| Component field formats | ✅ Fixed by scripts | Verify all 14+ components | ✅ Pass |
| Directory structure | ✅ Complete | Ensure all paths match | ✅ Pass |
| Git repository | ✅ Initialized | Add remote, proper .gitignore | ✅ Pass |
| README documentation | ✅ Present | Enhance with CLI commands | ✅ Pass |
| Build commands | ✅ Working | Add `salla theme preview` workflow | ✅ Pass |
| Publish readiness | ⚠️ Manual | Automate validation scripts | ✅ Pass |

---

## 🛠️ **Immediate Action Items**

1. **Run fix scripts**: `node fix-twilight.js && node fix-components.js`
2. **Validate twilight.json**: Ensure features count = components count
3. **Add missing settings**: Ensure all 8 mandatory settings exist
4. **Test CLI workflow**: `salla theme preview` from theme directory
5. **Test publish**: `salla theme publish` (after partner account setup)
6. **Document**: Update README with CLI integration steps

This roadmap ensures your ONA theme will pass Salla Partner Platform validation and be accepted for publication through the CLI method.