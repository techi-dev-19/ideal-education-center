# NLK Group of Schools – Website Clone (React + Vite)

Clone of https://www.nlkschools.org/ banaya gaya React 18 + Vite 5 + React Router 6 par.
URLs original site jaise hi hain (`/our-history`, `/admission`, `/contact-us` ...).

## Run kaise kare

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # build ko locally test karo
```

Node 18+ chahiye.

## Folder structure

```
nlk-school-clone/
├── index.html                  # HTML shell (Inter font, meta tags)
├── package.json                # pinned dependency versions
├── vite.config.js
├── vercel.json                 # SPA rewrite (Vercel)
├── public/
│   ├── favicon.svg
│   ├── _redirects              # SPA fallback (Netlify)
│   └── images/                 # apni local images yahan rakho
└── src/
    ├── main.jsx                # entry: BrowserRouter + App
    ├── App.jsx                 # saare routes yahan
    ├── index.css               # styles/ ki files import karta hai
    ├── styles/
    │   ├── variables.css       # colors, spacing (theme yahan badlo)
    │   ├── base.css            # reset, buttons, section basics
    │   ├── layout.css          # topbar, header/dropdown, footer
    │   ├── home.css            # home page sections
    │   └── pages.css           # inner pages (history, admission, contact...)
    ├── data/                   # ALL content yahan hai, JSX me nahi
    │   ├── site.js             # contact info, social, image URLs, stats, ticker
    │   ├── navigation.js       # mega-menu (About, Campuses, Academics ...)
    │   ├── campuses.js         # 10 campuses (address, phone, email, social)
    │   ├── history.js          # /our-history timeline
    │   ├── visionaries.js      # /our-visionaries
    │   ├── admission.js        # /admission content
    │   └── pages.js            # placeholder pages + happenings + kathasangam
    ├── hooks/
    │   ├── useCountUp.js       # stats count-up animation
    │   └── usePageTitle.js     # document.title per page
    ├── components/
    │   ├── layout/             # Layout, TopBar, Header, Footer, ScrollToTop
    │   ├── ui/                 # AppLink, Logo, PageBanner, SectionHeading,
    │   │                       # CampusCard, EnquiryForm
    │   └── home/               # HighlightsTicker, Hero, Stats, Philosophy,
    │                           # WhatSetsUsApart, Associations,
    │                           # CampusesSection, MediaCoverage, EnrollCta
    └── pages/
        ├── Home.jsx
        ├── OurHistory.jsx
        ├── OurVisionaries.jsx
        ├── Admission.jsx
        ├── Contact.jsx
        ├── Happenings.jsx
        ├── Kathasangam.jsx
        ├── PlaceholderPage.jsx # jin pages ka content abhi add nahi hua
        └── NotFound.jsx
```

## Kya complete hai, kya baaki hai

**Content ke saath complete pages** (original site se liya gaya):
Home, Our History, Our Visionaries, Admission, Contact Us, Happenings (overview), Kathasangam.

**Placeholder pages** (route + banner ready, content baaki): School Management, Quality Assurance,
NLK's Education, Achievements, Teachers Development, Academic Calendars, Student Advancement Program,
Career Talk, Vinam Scholarship, Referral Program, Career, Pushpanjali, Kheltarang, Literature Festival,
Kanpur Hoga Clean, Jugaad, STEAM, Inter Branch Competitions, aur 4 campus pages
(NLK Public School, Little Steps, Wendy School, Disha - inme campus ka address/phone/email dikhta hai).

Inme content daalne ke 2 tarike:
1. `src/data/pages.js` me us page ke object me `body: ['paragraph 1', 'paragraph 2']` add karo, ya
2. `src/pages/` me naya component banao aur `App.jsx` me route replace karo (Kathasangam example dekho).

## Jaanne wali baatein

- **Images**: abhi original site ke URLs se load hoti hain (`src/data/site.js` -> `IMAGES`).
  Agar wo site image blocking kare ya aap independent hosting chahte ho, images download karke
  `public/images/` me rakho aur URLs badlo. Image fail ho to fallback dikhta hai (page toot'ta nahi).
- **Stats** (Students / Educators): asli numbers site ke HTML me nahi mile, isliye `null` rakhe hain aur
  wo hide rehte hain. `src/data/site.js` -> `STATS` me numbers daalo. Years = 1947 se auto-calculate.
- **Enquiry form** sirf frontend hai. Backend/API connect karne ke liye
  `src/components/ui/EnquiryForm.jsx` ka `handleSubmit` edit karo.
- **Design**: exact pixel-perfect nahi hai (original Elementor/WordPress theme ka CSS hamare paas nahi tha).
  Colors/layout ko `src/styles/variables.css` se tune kar sakte ho. Original ka theme color `#F8C34F` hai.
- **Deploy**: Netlify (`public/_redirects`) aur Vercel (`vercel.json`) ke liye SPA fallback already set hai.
