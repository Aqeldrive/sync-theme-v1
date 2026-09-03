---
version: alpha
name: SYNC Atelier
description: Salla's most refined storefront — editorial restraint meets commerce velocity. Inspired by Aritzia, SSENSE, and Apple Store: quiet luxury, surgical hierarchy, and motion that sells.
colors:
  # Core — deepened ONA, calibrated in OKLCH for perceptual evenness
  primary: "#0A1834"
  primaryHover: "#132A5C"
  primaryActive: "#0B1220"
  onPrimary: "#FFFFFF"
  secondary: "#0D3B2E"
  secondaryHover: "#12543F"
  onSecondary: "#FFFFFF"
  accent: "#D4FF00"
  accentHover: "#E0FF33"
  onAccent: "#0A1834"
  # Surfaces — warm paper, not cold grey
  background: "#F8F9FF"
  surface: "#FFFFFF"
  surfaceContainer: "#EEF1FF"
  surfaceVariant: "#E6E9F2"
  surfaceElevated: "#FFFFFF"
  # Text
  onBackground: "#0A1834"
  onSurface: "#0A1834"
  onSurfaceVariant: "#6B7280"
  outline: "#E6E9F2"
  outlineVariant: "#F1F3FF"
  # Semantic
  success: "#0D3B2E"
  warning: "#9A6A00"
  error: "#B91C1C"
  # Overlay
  scrim: "rgba(10, 24, 52, 0.45)"
typography:
  display-xl:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 3.5rem
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: "-0.04em"
  display-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 2.5rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  display-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "IBM Plex Sans Arabic"
    fontSize: 1.375rem
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  headline-md:
    fontFamily: "IBM Plex Sans Arabic"
    fontSize: 1.125rem
    fontWeight: 700
    lineHeight: 1.35
  title-lg:
    fontFamily: "IBM Plex Sans Arabic"
    fontSize: 1rem
    fontWeight: 700
    lineHeight: 1.4
  title-md:
    fontFamily: "IBM Plex Sans Arabic"
    fontSize: 0.9375rem
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: "IBM Plex Sans Arabic"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: "IBM Plex Sans Arabic"
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "IBM Plex Sans Arabic"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
  label-lg:
    fontFamily: "IBM Plex Sans Arabic"
    fontSize: 0.8125rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.02em"
  label-sm:
    fontFamily: "IBM Plex Sans Arabic"
    fontSize: 0.6875rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
rounded:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  2xl: 32px
  3xl: 40px
  full: 9999px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.onPrimary}"
    rounded: "{rounded.full}"
    padding: 16px
  button-primary-hover:
    backgroundColor: "{colors.primaryHover}"
    textColor: "{colors.onPrimary}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.onAccent}"
    rounded: "{rounded.full}"
    padding: 16px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
  card-product:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.onSurface}"
    rounded: "{rounded.2xl}"
    padding: 20px
  card-glass:
    backgroundColor: "rgba(255,255,255,0.72)"
    textColor: "{colors.onSurface}"
    rounded: "{rounded.2xl}"
  chip-new:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.onAccent}"
    rounded: "{rounded.full}"
    padding: 6px
  header-glass:
    backgroundColor: "rgba(255,255,255,0.82)"
    textColor: "{colors.onSurface}"
    rounded: "{rounded.full}"
---

## Overview

**SYNC Atelier** is Salla's answer to quiet luxury. Not loud gradients or neon — just brutal attention to spacing, type, and material.

The previous ONA glass was decorative. Atelier glass is *architectural*: three explicit layers — paper (`#F8F9FF`), glass (`rgba(255,255,255,0.82) / blur 20px`), and ink (`#0A1834`). Everything sits on one of those three. If a component doesn't know which layer it belongs to, it is removed.

We keep Arabic as first-class: IBM Plex Sans Arabic runs the UI, Plus Jakarta Sans owns the display. Both at optical sizes that survive 320px and 1440px. Line-height is generous (1.6–1.7) so Arabic diacritics breathe.

Motion is 200–300ms, `cubic-bezier(0.16, 1, 0.3, 1)` (the Apple spring). No bounce, no elastic. Products translate 4–8px on hover and scale 1.03–1.05 — just enough to feel alive, never gimmicky.

## Colors

- **Ink (#0A1834):** Deeper than ONA's #00173b — richer on P3 displays, still 16.5:1 on paper. Used for price, title, and header text. Never for backgrounds larger than a button.
- **Forest (#0D3B2E):** Secondary that actually contrasts. Replaces the flat #006c49. Reads as premium, not “eco badge.” Used for sale price and success states only.
- **Lime (#D4FF00 → Hover #E0FF33):** ONA's signal kept but lightened 4% so it glows on ink without vibrating. One job: call to action. Never used for body text.
- **Paper (#F8F9FF) / Container (#EEF1FF):** Warm, not grey. All product cards float on this. Variant (#E6E9F2) is the only border color allowed.
- **Scrim (rgba(10,24,52,0.45)):** For image overlays — uniform, no gradient spanning the whole card.

All semantic colors meet WCAG AA on their intended surface. Lime on ink is 14.2:1.

## Typography

Display is **Plus Jakarta Sans ExtraBold**, tracked tight (-0.03 to -0.04em) — editorial, not tech. UI is **IBM Plex Sans Arabic** with generous line-height so Arabic and Latin coexist. No third font (Inter removed) — two is the limit.

Scale is fluid via clamp, not breakpoint jumps. `display-xl` is 3.5rem on desktop and 2.25rem on mobile without a media query.

Arabic labels use `label-sm` at 11px/0.08em tracking — the only place small caps appear. Body never goes below 14px.

## Layout

8-point grid locked. Container is 1280px, padding is fluid (`clamp(16px, 4vw, 32px)`). Product grids are 2 → 3 → 4 columns, never 5 on desktop — 5 makes cards too narrow for Arabic titles. Gap is 24px on desktop, 16px on mobile.

Cards use `rounded-2xl` (32px) — softer than ONA's 40px squircle, more iOS. Only the sticky header is `rounded-full`. Everything else that was `rounded-[2.5rem]` moves to `2xl` for consistency.

## Elevation & Depth

Three depths, no more:

1. **Paper (0):** Background, no shadow.
2. **Glass (1):** `blur 20px`, `border white/40`, `shadow 0 8px 32px rgba(10,24,52,0.06)`.
3. **Elevated (2):** Glass + `shadow 0 20px 40px rgba(10,24,52,0.10)` on hover, `translateY(-4px)`.

Dark mode is not a separate theme — Atelier is light-only and proud of it. Dark was decorative in ONA; here we remove `dark_mode` as a visual toggle and keep it only as `prefers-color-scheme` for system respect, not a button.

## Shapes

Super-ellipse is retired. Atelier uses true `border-radius` only. The only clip-path allowed is `rounded-full` for header and chips.

Images inside cards are `rounded-xl` (24px) + `overflow-hidden` — framing, not masking.

## Components

- **`button-primary` (Ink pill):** 56px hit target, full pill, 16px padding. Hover is `#132A5C`, not a lighter ink — darker signals press.
- **`button-accent` (Lime pill):** Only for `Add to Cart` on product cards. Never two limes on one viewport.
- **`card-product` / `card-glass`:** White at rest, `hover: translateY(-4px) + shadow-elevated + border-accent/40`. Image scales 1.04 over 600ms. Quick-add slides up from bottom 85% width.
- **`chip-new` (Lime capsule):** Top-right, 6px padding, text is `onAccent` ink. Only appears with `product.is_new`.
- **`header-glass`:** `sticky top-4`, `max-w-1280`, `mx-auto`, `blur 20px`, `border white/40`. Search is `w-72`, not 64 — breathing room matters.

## Do's and Don'ts

- **Do** use one lime CTA per card. Second action is ghost (wishlist heart) or link.
- **Do** keep Arabic titles to 1–2 lines (`line-clamp-2` on cards, `line-clamp-1` on list).
- **Do** use `loading="lazy"` on every image below the fold; eager only for hero slider.
- **Don't** add inner glow, mesh gradient, or mouse-follow aura — Atelier is still, not reactive.
- **Don't** use `theme.settings.*` that don't exist — every color is a Tailwind token now (`text-ink`, `bg-lime`, `border-outline`).
- **Don't** exceed 16 features / 15 components / 8 settings in `twilight.json` — Salla's Ruby validator rejects.

