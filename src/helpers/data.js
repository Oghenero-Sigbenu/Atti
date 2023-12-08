import Ella from "../img/Ella.jpeg";
import Philo from "../img/Philo.jpeg";
import Man from "../img/Man.jpeg";
import Mtn from "../Assests/mtn.png";
import CardB from "../Assests/cadbury.jpg";
import Client3 from "../Assests/gsk.png";
import HeroImg from "../Assests/hero.png";
import AYV from "../Assests/hero.png";
import AYC from "../Assests/campk.jpeg";
import Hero from "../Assests/camp.jpeg";
import AYD from "../Assests/AYD.jpeg";
import Instagram from "../Assests/instan.png";
import Facebook from "../Assests/facebook.png";
import Link from "../Assests/link.png";
// import Twit from "../Assests/twitter.svg";
import Ayv from "../Assests/AYV.jpeg";

export const navLinks = [
  { path: "/", title: "Home", sub: false },
  { path: "/about-us", title: "About Us", sub: false },
  { path: "#news", title: "News", sub: false },
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

export const sliderData = [
  {
    img: Hero,
    // title: "Archdicesan Youth Camp",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique sed. Voluptate consequuntur laudantium perspiciatis,amet magnam unde quis, sed quibusdam.",
    // link: "jjj",
  },
  {
    img: AYV,
    // title: "Archdicesan Youth Vigil",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique sed. Voluptate consequuntur laudantium perspiciatis,amet magnam unde quis, sed quibusdam.",
    // link: "jjj",
  },
  {
    img: AYC,
    // title: "Archdicesan Youth Camp",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique sed. Voluptate consequuntur laudantium perspiciatis,amet magnam unde quis, sed quibusdam.",
    // link: "jjj",
  },
];

export const clientLogos = [
  { name: "MTN", source: Mtn },
  { name: "Cadbury", source: CardB },
  { name: "MTN", source: Mtn },
  { name: "GSK", source: Client3 },
  { name: "MTN", source: Mtn },
  { name: "MTN", source: Mtn },
];

export const events = [
  {
    eflier: Ayv,
    title: "Archdiocesan Youth Vigil",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit..",
    time: "6:00pm",
    date: "June 2nd, 2023",
    url: "",
    deadline: "18th July, 2023 ",
    host: "Maryland Deandery",
    amount: "#5,000",
    active: 0,
  },
  {
    eflier: AYC,
    title: "Archdiocesan Youth Camp",
    description:
      "The CYON Lagos Archdiocesan 18th Biennial Archdiocesan Youth Convention 2023..",
    date: " Aug 31st - 3rd Sept, 2023 ",
    amount: "#5,000",
    deadline: "18th July, 2023 ",
    vennue: " St Finbarr's Collège, Akoka, Yaba",
    url: "https://forms.gle/wAMKcpMDN6dseUdc9",
    active: 1,
    slogan: "HERE I AM...... SEND ME",
  },
  {
    eflier: AYD,
    title: "Archdiocesan Youth Day(AYD)",
    description: "The 37th Archdiocesan Youth Day 2023",
    // time: "",
    date: "August 13th, 2023 ",
    venue: "St. Gregory College S. W Ikoyi ",
    url: "https://rb.gy/6ogrk6",
    active: 1,
    host: "Island Deanery",
    slogan: "",
    deadline: "30th Of June 2023",
  },
];

export const deaneries = [
  { title: "Agege", value: "agege" },
  { title: "Ajah", value: "ajah" },
  { title: "Apapa", value: "apapa" },
  { title: "Badagry", value: "badagry" },
  { title: "Epe", value: "epe" },
  { title: "Festac", value: "festac" },
  { title: "Iba", value: "iba" },
  { title: "Ijanikin", value: "ijanikin" },
  { title: "Ijede", value: "ijede" },
  { title: "Ikeja", value: "ikeja" },
  { title: "Ipaja", value: "ipaja" },
  { title: "Island", value: "island" },
  { title: "Isolo", value: "isolo" },
  { title: "Lekki", value: "lekki" },
  { title: "Maryland", value: "maryland" },
  { title: "Satellite", value: "satellite" },
  { title: "Surulere", value: "surelere" },
  { title: "Yaba", value: "yaba" },
];

export const deaneryEvents = [
  {
    eflier: "",
    title: "CULTURAL FIESTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit..",
    time: "6:00pm",
    date: "June 2nd, 2023",
    url: "",
    host: "CCOR, Magodo,Lagos",
    active: 0,
  },
  {
    eflier: "",
    title: "YOUTH CAMP",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit..",
    // time: "",
    date: " Aug 31st - 1st Sept, 2023 ",
    url: "",
    active: 1,
  },
];
