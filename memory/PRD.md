# Baker's Glove — Product Requirements Document

## Original Problem Statement
Build a stunning, modern bakery & cake shop website for **Baker's Glove**, a beloved neighbourhood bakery in Jayanagar, Bengaluru. Frontend-only, fully self-contained marketing site with tel: / WhatsApp call-to-order flow.

- Business: Baker's Glove · 733/A, 10th Main Rd, 4th Block, Jayanagar, Bengaluru 560041
- Phone: +91 99165 54504 · Hours: Daily 10 AM – 11:30 PM · Rating: 4.6★ (918 reviews)
- Brand: Chocolate brown `#3B1F0A` + cream `#FFF8F0` + antique gold `#C9962C` + dusty rose `#E8B4A0`
- Typography: Playfair Display (headings), Cormorant Garamond (italic accents), Inter (body)

## Architecture
- **Stack:** React 19 + Tailwind CSS + lucide-react icons
- **Pattern:** Single-page marketing site, no backend, no database
- **Entry:** `src/App.js` → `src/pages/BakersGlove.jsx`
- **Sections:** `src/components/bakers/` (Nav, Hero, Bestsellers, CustomCakes, WhyBakersGlove, Testimonials, MenuSection, Visit, Footer, WhatsAppFab)
- **Content:** `src/data/bakersGloveData.js` (single source of truth for business info, bestsellers, menu, testimonials, custom cakes)
- **Imagery:** Unsplash CDN direct URLs (no uploads/storage)

## User Persona
- **Jayanagar / JP Nagar / HSR residents** looking for an occasion cake or same-day dessert, browsing on mobile, converting via tap-to-call or WhatsApp.

## Core Requirements (static)
1. Hero with full-width cake image + "Order Your Cake" tel: CTA
2. 6 Bestsellers with prices and tags
3. Custom Cakes section (Birthday / Wedding / Corporate / Baby Shower)
4. 4 Trust signals (rating, custom, late hours, Jayanagar heritage)
5. 3 Customer testimonials
6. 8-category price list
7. Visit section: tel:, address with Maps link, hours, embedded Google Map, WhatsApp CTA
8. Floating WhatsApp FAB linking to pre-filled order message
9. OG meta tags, responsive down to 375px

## What's Been Implemented (as of Dec 2026)
- ✅ All 8 required sections built with premium pâtisserie aesthetic
- ✅ Responsive nav (mobile drawer, scrolled state)
- ✅ Reveal-on-scroll animations via IntersectionObserver
- ✅ Slow-zoom hero image, card-lift hover, image-grow on card hover
- ✅ WhatsApp floating action button with ping animation
- ✅ Google Maps iframe embed at correct lat/lng
- ✅ OG + Twitter meta tags, Playfair + Cormorant + Inter fonts loaded
- ✅ All interactive elements have `data-testid` attributes
- ✅ tel:+919916554504 wired to 5+ CTAs
- ✅ WhatsApp link with pre-filled order message

## Prioritized Backlog
- **P1:** Owner self-serve content (photo gallery, daily-special banner)
- **P2:** Lead form → Zapier/Sheets (capture custom-cake briefs with images)
- **P2:** Google Reviews live feed
- **P3:** Simple online pre-order with Razorpay deposit
- **P3:** Instagram feed embed
- **P3:** Multi-language (Kannada + English toggle)

## Next Tasks
- Collect real product photography from the bakery to replace Unsplash placeholders
- Add Google Analytics / Meta Pixel for ad campaigns
- Seasonal banner component (festive cakes, Valentine's, Christmas)
