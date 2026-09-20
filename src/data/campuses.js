// Campus list used on Home, Contact and campus detail pages.
// `route` -> internal page on this site, `external` -> the campus has its own website.

export const CAMPUSES = [
  {
    id: "IECvm",
    year: "1987",
    name: "IEC Vidya Mandir",
    place: "Vishnupuri",
    grades: "Grade 6 to 12",
    address:
      "4/290, Company Bagh Chauraha, Vishnupuri, Kanpur, Uttar Pradesh - 208002",
    map: "https://maps.app.goo.gl/tTZCZ69KYiLShPdn6",
    facebook: "https://www.facebook.com/IECvmic.vishnupuri",
    instagram: "https://www.instagram.com/IECvmicvishnupuri/",
    external: "https://IECvmintercollege.com/",
    phone: "0512-3253544",
    email: "IECintercollegevishnupuri@gmail.com",
  },
  {
    id: "wendy-high",
    year: "1998",
    name: "Wendy High School",
    place: "GT Road, Kanpur",
    grades: "Preschool to Grade 12",
    address: "6, Naramau, GT Road, Kanpur, Uttar Pradesh - 208016",
    map: "https://maps.app.goo.gl/64PFfzw7McAQTU5Z8",
    facebook: "https://www.facebook.com/profile.php?id=100069185554404",
    instagram: "https://www.instagram.com/wendy_high_school_",
    external: "https://www.wendyhighschool.com/",
    phone: "07311133336",
    email: "wendyhighschoolnaramau@gmail.com",
  },
  {
    id: "IEC-public",
    year: "2006",
    name: "IEC Public School",
    place: "Azad Nagar",
    grades: "Preschool to Grade 5",
    address: "3/239(2), Vishnupuri, Nawabganj, Kanpur, Uttar Pradesh - 208002",
    map: "https://maps.app.goo.gl/KPfFLTMmPCbFy9Qm6",
    facebook: "https://www.facebook.com/IECpublicschool/",
    instagram: "https://www.instagram.com/IECpublicschool___/",
    route: "/IEC-public-school",
    phone: "9336721221, 7706000134",
    email: "IECpublicschoolazadnagar@gmail.com",
  },
  {
    id: "little-steps",
    year: "2008",
    name: "IEC’s Little Steps",
    place: "Jawahar Nagar",
    grades: "Preschool to Grade 8",
    address:
      "110/62, Jawahar Nagar, R.K. Nagar, Kanpur, Uttar Pradesh - 208012",
    map: "https://maps.app.goo.gl/CZgXaqnAymMG2n7Q9",
    facebook: "https://www.facebook.com/IECLittleSteps",
    instagram: "https://www.instagram.com/IEC_little_steps/",
    route: "/IECs-little-steps",
    phone: "9335024407",
    email: "IECslittlesteps@gmail.com",
  },
];

// Branch dropdown used in the enquiry form (same list as the live site).
export const BRANCH_OPTIONS = [
  "IEC Public School",
  "IEC Inter College",
  "IEC’s Wendy School",
  "Wendy High School",
  "IECVM Inter College",
  "IEC’s Little Steps",
  "IEC’s Disha",
  "PKMC",
];
