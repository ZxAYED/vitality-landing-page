# Vitalyze Landing Page — Next.js Scroll Storytelling

Build a premium, scroll-driven landing page for the Vitalyze health & wellness app. The centerpiece is a **sticky iPhone frame** where the screen content transitions as the user scrolls through feature sections — creating an immersive storytelling experience.

## User Review Required

> [!IMPORTANT]
> **New Project Directory**: This will be created as a new Next.js app at `landing-page/` inside your workspace (not modifying the existing Flutter app). Please confirm this location is acceptable.

> [!IMPORTANT]
> **Figma Screen Images**: I'll recreate the app screens as styled HTML/CSS components (not screenshots) inside the iPhone frame to ensure crisp rendering at all sizes. The designs will match your Figma's dark theme (`#0F1113` background, `#3D6CF5` primary blue, `#1A1C1D` card surfaces).

---

## Design Concept

Inspired by the uploaded **Stride** reference and your Figma designs:

| Aspect | Implementation |
|--------|---------------|
| **Layout** | Full-width hero → sticky iPhone scroll sections → CTA/footer |
| **Theme** | Dark mode (`#0F1113`) with blue gradients and glassmorphism |
| **Typography** | Inter font family, matching Figma scale |
| **Animation** | Framer Motion for scroll-triggered iPhone screen transitions |
| **iPhone Frame** | CSS-crafted device frame, sticky-positioned during scroll |
| **Color System** | Primary `#3D6CF5`, Success `#19C30D`, surfaces `#1A1C1D`/`#2E3133` |

### Scroll Storytelling Flow (6 feature sections)

As user scrolls, the iPhone screen **smoothly transitions** between these app screens:

1. **Emotion Input** — "How are you feeling?" with emoji mood selector
2. **Wellness Score** — 88% Wellness, 7h-20m Sleep cards
3. **Community** — Live session card with "Join Now" CTA
4. **Health Card** — QR code health ID with personal info
5. **Exclusive Features** — AR Grounding, Bio-Feedback, Sleep Hypnosis tools
6. **Doctor Appointment** — Appointment list with booking CTA

Each section has **left/right text content** describing the feature while the iPhone shows the matching UI.

---

## Proposed Changes

### Next.js Project Setup

#### [NEW] `landing-page/` — New Next.js App

Created via `npx create-next-app` with TypeScript, App Router, no Tailwind (vanilla CSS).

---

### Global Styles & Design System

#### [NEW] `app/globals.css`
- CSS custom properties for all Figma design tokens
- Dark theme colors, typography scale, spacing
- Glassmorphism utilities, gradient backgrounds
- Responsive breakpoints

#### [NEW] `app/layout.tsx`
- Root layout with Inter font, meta tags, SEO

#### [NEW] `app/page.tsx`
- Main landing page composing all sections

---

### Components

#### [NEW] `components/Navbar.tsx` + `Navbar.module.css`
- Glassmorphism navbar with Vitalyze logo
- Nav links: Features, About, Download
- "Get Started" CTA button
- Sticky on scroll with backdrop blur

#### [NEW] `components/Hero.tsx` + `Hero.module.css`
- Hero headline: "Your Body Talks. Your Mind Matters. Vitalyze Listens."
- Subtitle and CTA buttons
- Background gradient blobs (blue/green radials like Figma)
- Initial iPhone preview

#### [NEW] `components/IPhoneFrame.tsx` + `IPhoneFrame.module.css`
- Realistic iPhone frame with CSS (notch, bezels, rounded corners)
- Status bar (time, signal, wifi, battery)
- Content slot for swappable screens
- Smooth fade/slide transitions between screens

#### [NEW] `components/FeatureShowcase.tsx` + `FeatureShowcase.module.css`
- The main scroll storytelling engine
- Sticky iPhone frame (left side on desktop)
- Scrolling text sections (right side)
- Intersection Observer / Framer Motion to detect active section
- Triggers screen change in iPhone frame

#### [NEW] `components/screens/EmotionScreen.tsx`
- Recreates Figma Home screen's mood selector
- Emoji grid: Great, Good, Okay, Sad, Angry
- Dark cards with `#101112` backgrounds

#### [NEW] `components/screens/WellnessScreen.tsx`
- Wellness 88% + Sleep 7h-20m cards
- Blue primary accent, green success indicators

#### [NEW] `components/screens/CommunityScreen.tsx`
- Live session banner with background image
- "Mental Wellness Circle" with Join Now button

#### [NEW] `components/screens/HealthCardScreen.tsx`
- Health ID card with QR code
- Personal info: Name, Gender, Blood Group, Emergency Contact

#### [NEW] `components/screens/ExclusiveScreen.tsx`
- Mental health tools list: AR Grounding, Bio-Feedback, Sleep Hypnosis
- Mood History bar chart
- Neural Focus and Vocal Journal cards

#### [NEW] `components/screens/AppointmentScreen.tsx`
- Book New Appointment CTA
- Upcoming appointments list with doctor details

#### [NEW] `components/Stats.tsx` + `Stats.module.css`
- Social proof: 12,000+ members, session counts
- Animated counters on scroll

#### [NEW] `components/CTA.tsx` + `CTA.module.css`
- Final call-to-action section
- App store download buttons
- Email signup for launch notification

#### [NEW] `components/Footer.tsx` + `Footer.module.css`
- Links, social media, copyright

---

## Verification Plan

### Browser Testing
1. Run `npm run dev` inside `landing-page/`
2. Open `http://localhost:3000` in browser
3. Verify:
   - Hero section renders with gradient background and headline
   - Navbar is sticky with glassmorphism effect
   - **Scroll storytelling works**: iPhone frame stays sticky while scrolling through feature sections
   - iPhone screen content transitions smoothly between all 6 features
   - Each feature section shows correct text + matching iPhone screen
   - Responsive: test at 1440px, 1024px, 768px, 375px widths
   - All animations are smooth (no jank)
   - Dark theme colors match Figma tokens

### Manual Verification
- User to review the live dev server and confirm:
  - Scroll storytelling experience feels premium and engaging
  - iPhone screen transitions match the intended flow
  - Design matches the Figma reference and Stride inspiration
  - Mobile responsiveness is acceptable
