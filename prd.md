1. Overview

Goal: Redesign justbeklin.com
 with modern UI, smooth animations, and eco-friendly branding.

Stack:

Frontend: React + Vite

Animations: GSAP (scroll-triggered, fade/slide, parallax)

Styling: TailwindCSS (or your choice of CSS)

Deployment: Vercel / Netlify

2. Pages/Sections

Home (Hero)

Large background image or subtle looping video

Headline + CTA ("Book Now" / "Contact Us")

GSAP fade-in + text stagger animation

About

Eco-friendly cleaning story

Parallax background with GSAP scroll reveal

Services

Residential, Commercial, Move In/Out

Card layout with hover animations + GSAP fade-up

Eco Benefits

Animated infographic (eco icons, counters/stats)

GSAP number counter animation

Join Our Team

Job listings (expandable/collapsible cards)

Apply button → modal form

GSAP stagger list reveal

Contact

Animated contact form with validation

Embedded map with subtle fade-in

GSAP scroll-trigger on form fields

Footer

Links, contact info, social icons

3. Animation Guidelines (GSAP)

Use ScrollTrigger for on-scroll animations (fade, slide-in, parallax).

Use Stagger for lists (services cards, job openings).

Subtle hover micro-interactions (buttons scale slightly, icons bounce).

Animations must support mobile (disable heavy effects for small screens).

4. Technical Rules

Responsive first → Mobile, tablet, desktop layouts.

SEO → Use semantic HTML, meta tags, structured headings.

Accessibility → Alt tags, focus states, ARIA where needed.

Performance → Lazy load images, compress assets.

Code Quality → Component-driven structure, reusable animation hooks.