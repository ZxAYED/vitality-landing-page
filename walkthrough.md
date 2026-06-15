# Vitalyze Landing Page — Walkthrough

## What Was Built

A premium, modern **Next.js landing page** for the Vitalyze health & wellness app featuring:

- **Scroll-based storytelling** — a sticky iPhone frame transitions through 6 app screens as users scroll
- **Dark theme** from Figma designs (#0A0B0D background, #3D6CF5 primary blue)
- **All content** from vitalyze.io preserved (no information missed)
- **Responsive design** for desktop, tablet, and mobile

## Project Location

```
/Users/Borhan/shakils_projects/surajashray-app/vitalyze-landing/
```

Run with: `npm run dev` → `http://localhost:3000`

---

## Sections Built (In Page Order)

| # | Section | Description |
|---|---------|-------------|
| 1 | **Navbar** | Glassmorphism sticky nav with logo, links, "Join Waitlist" CTA, mobile hamburger |
| 2 | **Hero** | "Your Body Talks. Your Mind Matters. Vitalyze Listens." + iPhone preview + gradient blobs |
| 3 | **Feature Showcase** | 🎯 Core scroll engine — sticky iPhone, 6 features: Emotion, Wellness, Community, Health ID, Exclusive, Appointment |
| 4 | **Physical Health** | Doctor video calls, lab report AI, food scanner (3 cards) |
| 5 | **How It Works** | 3-step flow: Connect → AI Learns → Get Blueprint |
| 6 | **Testimonials** | 6 real beta outcomes with tagged categories |
| 7 | **Pricing** | Premium & Premium+ plans with feature lists + quotes |
| 8 | **FAQ** | 7-question accordion with expand/collapse |
| 9 | **Waitlist CTA** | Email form with success state, 14-day free offer |
| 10 | **Footer** | Product, Support, Mental Health Resources links + disclaimer |

---

## Scroll Storytelling — iPhone Screen Transitions

The centerpiece — as users scroll through feature descriptions, the iPhone frame updates:

````carousel
![Hero section with iPhone frame and gradient text](file:///Users/Borhan/.gemini/antigravity/brain/d8c59f71-e39e-4ebf-b360-df249dcbddd7/hero_section_1774331699806.png)
<!-- slide -->
![FAQ section with accordion](file:///Users/Borhan/.gemini/antigravity/brain/d8c59f71-e39e-4ebf-b360-df249dcbddd7/bottom_sections_1774331809279.png)
````

## Browser Recording

![Scroll through the entire landing page](file:///Users/Borhan/.gemini/antigravity/brain/d8c59f71-e39e-4ebf-b360-df249dcbddd7/landing_page_verification_1774331651356.webp)

---

## Tech Stack

| Technology | Usage |
|-----------|-------|
| Next.js 16 + TypeScript | Framework |
| Framer Motion | Scroll transitions, entry animations |
| CSS Modules | Component-scoped styling (vanilla CSS) |
| Inter (Google Fonts) | Typography |

## Files Created (24 files)

- `src/app/globals.css` — Design token system
- `src/app/layout.tsx` — Root layout with SEO
- `src/app/page.tsx` — Main page assembly
- `src/components/Navbar.tsx` + `.module.css`
- `src/components/Hero.tsx` + `.module.css`
- `src/components/IPhoneFrame.tsx` + `.module.css`
- `src/components/FeatureShowcase.tsx` + `.module.css`
- `src/components/PhysicalHealth.tsx` + `.module.css`
- `src/components/HowItWorks.tsx` + `.module.css`
- `src/components/Testimonials.tsx` + `.module.css`
- `src/components/Pricing.tsx` + `.module.css`
- `src/components/FAQ.tsx` + `.module.css`
- `src/components/WaitlistCTA.tsx` + `.module.css`
- `src/components/Footer.tsx` + `.module.css`
- `src/components/screens/EmotionScreen.tsx`
- `src/components/screens/WellnessScreen.tsx`
- `src/components/screens/CommunityScreen.tsx`
- `src/components/screens/HealthCardScreen.tsx`
- `src/components/screens/ExclusiveScreen.tsx`
- `src/components/screens/AppointmentScreen.tsx`
- `src/components/screens/AppScreens.module.css`

## Verification

✅ Hero renders with gradient text and iPhone frame  
✅ Scroll storytelling works — iPhone content transitions smoothly  
✅ All 10 sections present with complete content from vitalyze.io  
✅ FAQ accordion opens/closes  
✅ Waitlist form has success state  
✅ Navbar sticky with glassmorphism on scroll
