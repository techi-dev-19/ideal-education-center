// Main menu. Each item is { label, to } for internal routes or { label, href } for external links.
// Top level items with `children` render as dropdowns.

const UP = "https://www.nlkschools.org/wp-content/uploads";

export const NAV = [
  {
    label: "About Us",
    children: [
      // { label: "Our Visionaries", to: "/our-visionaries" },
      { label: "Our History", to: "/our-history" },
      { label: "School Management", to: "/school-management" },
      {
        label: "Quality Assurance and Innovation Department",
        to: "/quality-assurance-and-innovation-department",
      },
    ],
  },
  // {
  //   label: 'Campuses',
  //   children: [
  //     { label: 'NLK’s Little Steps', to: '/nlks-little-steps' },
  //     { label: 'NLK’s Wendy School', to: '/nlks-wendy-school' },
  //     { label: 'NLK Inter College', href: 'https://www.nlkintercollege.com/' },
  //     { label: 'NLK’s Disha', to: '/nlks-disha' },
  //     { label: 'NLK Academy', href: 'https://www.nlkacademy.com/' },
  //     { label: 'PKMC', href: 'https://pkmcnlk.org/' },
  //   ],
  // },
  {
    label: "Academics",
    children: [
      { label: "IEC's Education", to: "/curriculum" },
      { label: "Achievements", to: "/achievements" },
      { label: "Teachers Development", to: "/teachers-development" },
      { label: "Book List", href: `#` },
      {
        label: "Exam Schedule",
        href: `#`,
      },
      {
        label: "Student Holiday List",
        href: `#`,
      },
      { label: "Academic Calendars", to: "/academic-calendars" },
    ],
  },
  { label: "Admission", to: "/admission" },
  // {
  //   label: "Happenings",
  //   to: "/happenings",
  //   children: [
  //     { label: "Pushpanjali", to: "/pushpanjali" },
  //     { label: "Kathasangam", to: "/kathasangam" },
  //     { label: "Kheltarang", to: "/kheltarang" },
  //     { label: "Literature Festival", to: "/literature-festival" },
  //     { label: "Kanpur Hoga Clean", to: "/kanpur-hoga-clean" },
  //     { label: "Jugaad: Reinventing Junk", to: "/jugaad-reinventing-junk" },
  //     { label: "STEAM", to: "/steam" },
  //     { label: "Inter Branch Competitions", to: "/inter-branch-competitions" },
  //   ],
  // },
  {
    label: "Student Advancement Program",
    to: "/student-advancement-program",
    children: [{ label: "Career Talk", to: "/career-talk" }],
  },
  { label: "Contact Us", to: "/contact-us" },
];
