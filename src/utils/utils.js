import twitter from "./../assets/images/twitter.png";
import facebook from "./../assets/images/facebook.png";
import pinterest from "./../assets/images/pinterest.png";
import instagram from "./../assets/images/instagram.png";
import phone from "./../assets/images/phone.png";
import envelope from "./../assets/images/envelope.png";
import marker from "./../assets/images/marker.png";

export const socialMediaHandles = [
  {
    src: twitter,
    alt: "social media handle twitter",
    link: "https://www.twitter.com/agrios",
  },
  {
    src: facebook,
    alt: "social media handle facebook",
    link: "https://www.facebook.com/agrios",
  },
  {
    src: pinterest,
    alt: "social media handle pinterest",
    link: "https://www.pinterest.com/agrios",
  },
  {
    src: instagram,
    alt: "social media handle instagram",
    link: "https://www.instagram.com/agrios",
  },
];

export const pages = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Our Projects",
    link: "/our-projects",
  },
  {
    name: "Meet the Farmers",
    link: "/meet-the-farmers",
  },
  {
    name: "Latest News",
    link: "/latest-news",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const newsData = [
  {
    news: "Bringing Food Production Back To Cities",
    date: "July 5, 2022",
  },
  {
    news: "The Future of Farming,Smart Irrigation Solutions",
    date: "July 5, 2022",
  },
];

export const contactData = [
  { text: "666 888 0000", src: phone },
  { text: "needhelp@company.com", src: envelope },
  { text: "80 broklyn golden street line New York, USA", src: marker },
];
