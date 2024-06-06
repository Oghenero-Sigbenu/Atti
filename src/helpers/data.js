import Ella from "../img/Ella.jpeg";
import Philo from "../img/Philo.jpeg";
import Man from "../img/Man.jpeg";
import HeroImg from "../Assests/hero.png";
import Instagram from "../Assests/instan.png";
import Facebook from "../Assests/facebook.png";
import Link from "../Assests/link.png";
import Ketu from "../img/event.jpeg";
import Partner from "../Assests/neews.jpeg";
import Creek from "../Assests/creek.png";

export const navLinks = [
  { path: "/", title: "Home", sub: false },
  { path: "/about-us", title: "About Us", sub: false },
  { path: "/news", title: "Blog", sub: false },
  { path: "/contact-us", title: "Contact Us", sub: false },
  { path: "/financials", title: "Financials", sub: false },
  { path: "/projects", title: "CHW Projects", sub: false },
];

export const mediaLinks = [
  {
    path: "https://www.linkedin.com/company/atti-naomi-s-foundation/",
    title: "LinkedIn",
    icon: Link,
  },
  {
    path: "https://instagram.com/attinaomisfoundation?igshid=YzAwZjE1ZTI0Zg==",
    title: "Instagram",
    icon: Instagram,
  },
  {
    title: "Facebook",
    path: "https://www.facebook.com/attinaomisfoundation?mibextid=LQQJ4d",
    icon: Facebook,
  },
  // {
  //   title: "Twitter",
  //   icon: Twitter,
  // },
];

export const executives = [
  {
    photo: Ella,
    title: "Dr.",
    names: "Emmanuella Omomoemi ",
    lastName: "Agbegha",
    position: "Chairman",
  },
  {
    photo: Man,
    title: "Mr.",
    names: "Noel ",
    lastName: "Agbegha",
    position: "Board member",
  },
  {
    photo: Philo,
    title: "Miss",
    names: "Philomena",
    lastName: "Erhurhun",
    position: "Secretary",
  },
];

export const heroImage = [
  {
    photo: HeroImg,
    title: "His Grace, Most Revd. Dr.",
  },
  {
    photo: HeroImg,
    title: "Very Rev. Fr. Dr.",
  },
];

export const events = [
  {
    eflier: Creek,
    title:
      "The Creek Health and Wellness (CHW) Project: Bridging Gaps in Riverine Healthcare.",
    description:
      "We are excited to announce that Atti Naomi’s foundation is hosting a free medical outreach. The event will take place on June 26th, 2024.",
    second:
      "For sponsorship, donations or partnership please contact +2349154355502  or +19894912840. Kindly see flier for more information. We hope that you will join us in supporting this worthy cause. Together, we can make a difference in the lives of these children. ",
    time: "8:00pm - 3:00pm",
    date: "June 26th, 2023",
    url: "",
    deadline: "18th July, 2023 ",
    host: "      Ayakoromor, Nigeria.",
    amount: "",
    active: 0,
  },
  {
    eflier: Ketu,
    title: "Bringing Good Tidings.",
    description:
      "We are excited to announce that Atti Naomi’s foundation is hosting a charity event for orphans at Mother Theresa Orphanage Home. The event will take place on December 17th from 12pm to 3pm.",
    second:
      "For sponsorship, donations or partnership please contact +2349154355502  or +19894912840. Kindly see flier for more information. We hope that you will join us in supporting this worthy cause. Together, we can make a difference in the lives of these children. ",
    time: "12:00pm - 3:00pm",
    date: "December 17th, 2023",
    url: "",
    deadline: "18th July, 2023 ",
    host: " 117 Demurin Street, Mile 12, Lagos, Nigeria.",
    amount: "",
    active: 0,
  },
  {
    eflier: Partner,
    title:
      "Memorial Healthcare USA Partners with Atti Naomi's Foundation to Enhance Community Health in Nigeria.",
    description:
      "Ayokoromor Delta State, Nigeria In a groundbreaking collaboration on Wednesday, May 23rd, 2024, Memorial Healthcare Owosso and Atti Naomi's Foundation have joined forces to improve community health and wellness in Nigeria. The partnership aims to empower underserved populations through preventive care, education, and resource sharing.",
    second: "",
    time: "12:00pm - 3:00pm",
    date: "May 23rd, 2024",
    url: "",
    deadline: "18th July, 2023 ",
    host: " Memorial Healthcare USA.",
    amount: "",
    active: 0,
  },
];
