// Site-wide constants: contact info, social links and image URLs.
// Images abhi original site se load hoti hain. Local karne ke liye public/images/README.md dekho.

const UP = "https://www.nlkschools.org/wp-content/uploads";

export const SITE = {
  name: "Ideal Education Center",
  shortName: "IEC",
  tagline: "Enlightening Education",
  session: "2026-27",
  liveUrl: "https://www.nlkschools.org",
  tollFree: "7843935876",
  tollFreeHref: "tel:7843935876",
  email: "idealeducationcentre2@gmail.com",
  address:
    "ward no 8, shivli road, near darshani cold store, Shivarajpur, Kanpur, Uttar Pradesh 209205",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.965338726369!2d80.13631057116395!3d26.681591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c2d041113ed11%3A0xa0bdb17b5be2b8a0!2sideal%20education%20centre!5e0!3m2!1sen!2sin!4v1789923760543!5m2!1sen!2sin",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100069185554404",
    instagram: "https://www.instagram.com/wendy_high_school_",
    youtube: "https://www.youtube.com/@nlkgroupofschools",
  },
};

export const IMAGES = {
  logo: `${UP}/2025/02/nlk_logo.png`,
  footerBanner: `${UP}/2026/01/Slide-12.png`,
  philosophy: `${UP}/2026/02/Image.png`,
  stats: {
    experience: `${UP}/2025/07/1235.png`,
    students: `${UP}/2025/07/1222.png`,
    educators: `${UP}/2025/07/1231.png`,
    branches: `${UP}/2025/07/1236.png`,
  },
  associations: [
    `${UP}/2026/01/storyweaver-logo.png`,
    `${UP}/2026/01/jodo-gyan.png`,
    `${UP}/2025/07/logo-3.png`,
    `${UP}/2026/01/arpan-logo.png`,
    `${UP}/2026/02/Picture12.png`,
    `${UP}/2026/02/Picture13.png`,
  ],
  media: [
    `${UP}/2025/08/MEDIA-3.jpg`,
    `${UP}/2025/08/MEDIA-2.jpg`,
    `${UP}/2025/08/ARCHERY-5.jpeg`,
    `${UP}/2025/08/ARCHERY-1.jpeg`,
    `${UP}/2025/08/ARCHERY-2.jpeg`,
    `${UP}/2025/08/MEDIA-4.jpg`,
    `${UP}/2025/08/05-banner.jpg`,
    `${UP}/2025/07/n515.jpg`,
    `${UP}/2025/07/n1.jpg`,
    `${UP}/2025/07/n313.jpg`,
    `${UP}/2025/07/n212.jpg`,
    `${UP}/2025/07/n414.jpg`,
  ],
  visionaries: {
    hiralal: `${UP}/2025/07/hiralalji.jpg`,
    nandlal: `${UP}/2025/07/nanadlal-ji.jpg`,
    pushpa: `${UP}/2025/07/pushpaji.jpg`,
  },
  kathasangam: [
    `${UP}/2026/02/DSC_0709.jpg`,
    `${UP}/2026/02/DSC_1290.jpg`,
    `${UP}/2026/02/DSC_1443.jpg`,
    `${UP}/2026/02/DSC_0133.jpg`,
    `${UP}/2026/02/DSC_0270.jpg`,
  ],
};

export const HIGHLIGHTS = [
  { text: "Admissions Open for Session 2026-27", to: "/admission" },
  { text: "Vinam Scholarship - Up to ₹ 10 Lakhs", to: "/vinam" },
  { text: "Career Talk 2.0 - 22nd Feb, 2026", to: "/career-talk" },
];

// Home page stats. Original site counts these up from 0 with JS.
// `value: null` => is stat ko site par hide kar diya jata hai.
// TODO: students aur educators ke asli numbers yahan daalo (site ke HTML me exact number nahi mila).
const FOUNDED = 1947; // Governing body established 1947 (see /our-history)
export const STATS = [
  {
    key: "experience",
    label: "Years of Experience",
    value: new Date().getFullYear() - FOUNDED,
    suffix: "+",
  },
  { key: "students", label: "Students", value: null, suffix: "+" },
  { key: "educators", label: "Educators", value: null, suffix: "+" },
  { key: "branches", label: "Branches", value: 9, suffix: "" },
];

export const FOOTER_LINKS = [
  { label: "Scholarship", to: "/vinam" },
  // { label: "NLK’s Referral Program", to: "/nlks-referral-program" },
  { label: "Career", to: "/career" },
  {
    label: "KES Annual Report 2024-25",
    href: `${UP}/2026/05/KES-Annual-Report-2024-25.pdf`,
  },
  {
    label: "KES Annual Report 2025-26",
    href: `${UP}/2026/07/KES-Annual-Report-2025-26.pdf`,
  },
];
