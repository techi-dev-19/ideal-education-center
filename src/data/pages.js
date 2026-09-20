// Metadata for pages whose full content has not been copied into this project yet.
// Ye pages "PlaceholderPage" se render hote hain. Content add karne ke liye:
//   1. yahan `body` (paragraph array) bharo, ya
//   2. us page ke liye alag file banao src/pages/ me aur App.jsx me route badlo.

import { CAMPUSES } from "./campuses";

const base = [
  {
    path: "/school-management",
    title: "School Management",
    eyebrow: "About Us",
  },
  {
    path: "/quality-assurance-and-innovation-department",
    title: "Quality Assurance & Innovation Department",
    eyebrow: "About Us",
  },
  { path: "/curriculum", title: "IEC'ss Education", eyebrow: "Academics" },
  { path: "/achievements", title: "Achievements", eyebrow: "Academics" },
  {
    path: "/teachers-development",
    title: "Teachers Development",
    eyebrow: "Academics",
  },
  {
    path: "/academic-calendars",
    title: "Academic Calendars",
    eyebrow: "Academics",
  },
  {
    path: "/student-advancement-program",
    title: "Student Advancement Program",
    eyebrow: "Students",
  },
  {
    path: "/career-talk",
    title: "Career Talk",
    eyebrow: "Student Advancement Program",
  },
  { path: "/vinam", title: "Vinam Scholarship", eyebrow: "Scholarship" },
  // {
  //   path: "/nlks-referral-program",
  //   title: "NLK’s Referral Program",
  //   eyebrow: "Admission",
  // },
  { path: "/career", title: "Career", eyebrow: "Join Us" },
  { path: "/pushpanjali", title: "Pushpanjali", eyebrow: "Happenings" },
  { path: "/kheltarang", title: "Kheltarang", eyebrow: "Happenings" },
  {
    path: "/literature-festival",
    title: "Literature Festival",
    eyebrow: "Happenings",
  },
  {
    path: "/kanpur-hoga-clean",
    title: "Kanpur Hoga Clean",
    eyebrow: "Happenings",
  },
  {
    path: "/jugaad-reinventing-junk",
    title: "Jugaad: Reinventing Junk",
    eyebrow: "Happenings",
  },
  { path: "/steam", title: "STEAM", eyebrow: "Happenings" },
  {
    path: "/inter-branch-competitions",
    title: "Inter Branch Competitions",
    eyebrow: "Happenings",
  },
];

// Campus pages that live on nlkschools.org itself get generated from campuses.js
const campusPages = CAMPUSES.filter((c) => c.route).map((c) => ({
  path: c.route,
  title: c.name,
  eyebrow: "Our Campuses",
  campusId: c.id,
}));

export const PLACEHOLDER_PAGES = [...base, ...campusPages];

// Happenings overview cards. Blurbs sirf verified pages ke liye bhare hain; baaki khaali hain, aap bhar sakte ho.
export const HAPPENINGS = [
  {
    title: "Pushpanjali",
    to: "/pushpanjali",
    blurb:
      "The NLK school magazine, a tribute to the visionary Late Smt. Pushpa Khanna Ji.",
  },
  {
    title: "Kathasangam",
    to: "/kathasangam",
    blurb:
      "The mega annual event at Lajpat Bhawan, celebrating stories, heritage and student performance.",
  },
  { title: "Kheltarang", to: "/kheltarang", blurb: "" },
  { title: "Literature Festival", to: "/literature-festival", blurb: "" },
  { title: "Kanpur Hoga Clean", to: "/kanpur-hoga-clean", blurb: "" },
  {
    title: "Jugaad: Reinventing Junk",
    to: "/jugaad-reinventing-junk",
    blurb: "",
  },
  { title: "STEAM", to: "/steam", blurb: "" },
  {
    title: "Inter Branch Competitions",
    to: "/inter-branch-competitions",
    blurb: "",
  },
];

export const KATHASANGAM = {
  tagline: "Kathasangam: Weaving Tales, Inspiring Generations",
  editions: [
    {
      title: "Kathasangam",
      paragraphs: [
        "In commemoration of the illustrious 75-year journey of NLK Group of Schools, we organised a Mega Annual Event, Kathasangam, marking its long-awaited return after an eight-year hiatus.",
        "The Annual Fest was held at the majestic Lajpat Bhawan from December 20th to 24th, 2022. The theme of ‘Kathasangam’, literally “The Amalgamation of Stories”, revolved around the Panchatantra stories, Folktales and Navras. The fest also witnessed the unveiling of our school magazine, ‘Pushpanjali’, as a heartfelt tribute to the visionary Late Pushpa Khanna Ji.",
        "The fourth day of the event was graced by Mr. Ashutosh Rana, whose career spans Bollywood as well as Marathi, Tamil, Telugu and Kannada cinema.",
        "Throughout the five-day event, the zest, zeal and tenacity of the young performers of NLK Group of Schools shone brightly.",
      ],
    },
    {
      title: "Kathasangam 2.0",
      paragraphs: [
        "In continuation of the legacy of NLK Group of Schools, Kathasangam 2.0 – A Mega Annual Event was held at Lajpat Bhawan from 24th December to 28th December, 2025.",
        "The fest revolved around the theme ‘Yugotsav’ – The Celebration of Eras, woven with the concepts of ‘Kaal Chakra’, Sultanates, Kingdoms, and Festivals. Through performances, storytelling and visual presentations, students portrayed the journey of time and India’s diverse cultural heritage.",
        "A key highlight was the unveiling of our school magazine, ‘Pushpanjali: Adhyay 2’, dedicated as a tribute to the visionary Late Smt. Vina Sabharwal.",
      ],
    },
  ],
};
