import Ella from "../img/Ella.jpeg";
import Philo from "../img/Philo.jpeg";
import Man from "../img/Man.jpeg";
import HeroImg from "../Assests/hero.png";
import Instagram from "../Assests/instan.png";
import Facebook from "../Assests/facebook.png";
import Link from "../Assests/link.png";
import Ketu from "../img/event.jpeg";

export const navLinks = [
  { path: "/", title: "Home", sub: false },
  { path: "/about-us", title: "About Us", sub: false },
  { path: "/news", title: "News", sub: false },
  { path: "/contact-us", title: "Contact Us", sub: false },
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
    host: "",
    amount: "",
    active: 0,
  },
];
