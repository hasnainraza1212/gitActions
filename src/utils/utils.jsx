import twitter from "./../assets/images/twitter.png";
import facebook from "./../assets/images/facebook.png";
import pinterest from "./../assets/images/pinterest.png";
import instagram from "./../assets/images/instagram.png";
import darktwitter from "./../assets/images/darktwitter.png";
import darkfacebook from "./../assets/images/darkfacebook.png";
import darkpinterest from "./../assets/images/darkpinterest.png";
import darkinstagram from "./../assets/images/darkinstagram.png";
import phone from "./../assets/images/phone.png";
import envelope from "./../assets/images/envelope.png";
import marker from "./../assets/images/marker.png";
import cart from "./../assets/images/cart.png";
import search from "./../assets/images/search.png";
import greenPhone from "./../assets/images/greenPhone.png";
import mail from "./../assets/images/mail.png";
import greenMarker from "./../assets/images/greenMarker.png";
import goldenVeggies from "./../assets/images/goldenVeggies.png";
import goldenApparatus from "./../assets/images/goldenApparatus.png";
import goldenCheck from "./../assets/images/goldenCheck.png";
import onion from "./../assets/images/onion.png";
import carrot from "./../assets/images/carrot.png";
import tomato from "./../assets/images/tomato.png";
import redGrapes from "./../assets/images/redGrapes.png";
import garlic from "./../assets/images/garlic.png";
import lettuce from "./../assets/images/lettuce.png";
import orangeVeggiesCard from "./../assets/images/orangeVeggiesCard.png";
import greenVeggiesCard from "./../assets/images/greenVeggiesCard.png";
import wheat from "./../assets/images/wheat.png";
import freshVeggies from "./../assets/images/freshVeggies.png";
import honey from "./../assets/images/honey.png";
import honeyIcon from "./../assets/images/honeyIcon.png";
import wheatIcon from "./../assets/images/wheatIcon.png";
import veggiesIcon from "./../assets/images/veggiesIcon.png";
import apples from "./../assets/images/apples.png"
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

export const darkSocialMediaHandles = [
  {
    src: darktwitter,
    alt: "social media handle twitter",
    link: "https://www.twitter.com/agrios",
  },
  {
    src: darkfacebook,
    alt: "social media handle facebook",
    link: "https://www.facebook.com/agrios",
  },
  {
    src: darkpinterest,
    alt: "social media handle pinterest",
    link: "https://www.pinterest.com/agrios",
  },
  {
    src: darkinstagram,
    alt: "social media handle instagram",
    link: "https://www.instagram.com/agrios",
  },
];
export const AboutLinks = [
  {
    name: "Agriculture Products",
    link: "/shop",
  },
  {
    name: "Projects Completed",
    link: "/projects",
  },
  {
    name: "Satisfied Clients",
    link: "/services",
  },
  {
    name: "Experts Farmers",
    link: "/farmers",
  }];

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
    link: "/projects",
  },
  {
    name: "Meet the Farmers",
    link: "/farmers",
  },
  {
    name: "Latest News",
    link: "/news",
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
export const tabsArray = [
  { tabName: "Home", link: "/" },
  { tabName: "About", link: "/about" },
  { tabName: "Services", link: "/services" },
  { tabName: "Projects", link: "/projects" },
  { tabName: "News", link: "/news" },
  { tabName: "Shop", link: "/shop" },
  { tabName: "Contact", link: "/contact" },
];

export const headerIcons = [
  {
    icon: <img src={search}></img>,
  },
  {
    icon: <img src={cart}></img>,
  },
];

export const contactHeaderData = [
  {
    src: greenPhone,
    alt:"Call anytime",
    title:"+ 98 (000) - 9630",
    subTitle:"Call anytime",
  },
  {
    src: mail,
    alt:"Send email",
    title:"ambed@agrios.com",
    subTitle:"Send email",
  },
  {
    src: greenMarker,
    alt:"Melbourne, Australia",
    title:"Melbourne, Australia",
    subTitle:"380 St Kilda Road",
  },
];

export const featureCardData = [
  {
    title:"Agriculture",
    heading:"Products",
    src:wheat,
    iconSrc:wheatIcon
  },
  {
    title:"Fresh",
    heading:"Vegetable",
    src:freshVeggies,
    iconSrc:veggiesIcon
  },
  {
    title:"Organic",
    heading:"Products",
    src:honey,
    iconSrc:honeyIcon
  }
]
export const featuresIconHadings = [
  {
    heading:"Growing fruits vegetables",
    src:goldenVeggies
  },
  {
    heading:"Tips for ripening your fruits",
    src:goldenApparatus
  }
]

export const featureCheckList = [
  {
    text:"Watering System Functional: Ready for Crop Irrigation.",
    src:goldenCheck
  },
  {
    text:"Watering System Checked: Operational for Plant Hydration.",
    src:goldenCheck
  }
]
export const products = [
  {src:onion,
    name:"Onion",
    price:"$ 20.00",  
    rating:3

  },
  {src:carrot,
    name:"Carrot",
    price:"$ 50.00",  
    rating:5

  },
  {src:tomato,
    name:"Tomato",
    price:"$ 50.00",  
    rating:3

  },
  {src:redGrapes,
    name:"Red Grapes",
    price:"$ 100.00",  
    rating:5

  },
  {src:garlic,
    name:"Garlic",
    price:"$ 20.00",  
    rating:4

  },
  {src:lettuce,
    name:"Lettuce",
    price:"$ 30.00",
    rating:3
  }
]


export const healthyCards = [
  {
    src:orangeVeggiesCard,
    title:"100% ORGANIC",
    heading:"Quality Organic Food Store"
  },
  {
    src:greenVeggiesCard,
    title:"100% ORGANIC",
    heading:"Healthy Products Everyday"
  }
]
export const servicesProductCategoriesArray =  [
  {
    link:"/",
    tab:"Agriculture Products"
  },
  {
    link:"/",
    tab:"Organic Products"
  },
  {
    link:"/",
    tab:"Fresh Vegetables"
  },
  {
    link:"/",
    tab:"Dairy Products"
  },
  {
    link:"/",
    tab:"Harvest"
  }
]

export const servicesAgriculturalProductText =[
  { text: "Agricultural products, the fruits of labor from farms worldwide, are diverse and essential. From staple crops like wheat, rice, and corn to an array of fruits, vegetables, and livestock, they sustain global food systems. These products not only provide sustenance but also serve as raw materials for various industries. Reflecting diverse climates and farming practices, agricultural products play a crucial role in nourishing populations and driving economies across the globe." },
  { text: "Additionally, agricultural products contribute to cultural identities and traditions, with each region boasting its specialties and culinary delights. These goods, from artisanal cheeses to exotic spices, offer a glimpse into the rich tapestry of global agriculture. As consumers become increasingly conscious of sustainability and food origins, the importance of diverse, locally sourced agricultural products continues to grow, shaping the future of farming and culinary experiences worldwide." }
];

export const serviceCarousel=[
  {
    title:"Honey Production",
    desc:"Honeybees gather nectar from flowers and convert it into honey, a natural sweetener rich in antioxidants and antibacterial properties.",
    src:honey
  },
  {
    title:"Farm-Fresh Veggies",
    desc:"Our fresh veggies are sourced directly from local farms, ensuring maximum freshness and nutritional value for our customers.",
    src:freshVeggies
  },
  {
    title:"Quality Wheat Products",
    desc:"We use high-quality wheat grains harvested from trusted farms to provide wholesome and nutritious products to our customers.",
    src:wheat
  },
  {
    title:"Premium Apple Selection",
    desc:"Our apples are carefully selected from orchards known for their premium quality and taste, offering a crisp and delightful snacking experience.",
    src:apples
  },
]


export const serviceAccordian=[
  {
    title:"World’s hottest destinations for vegans",
    desc:"Honeybees gather nectar from flowers and convert it into honey, a natural sweetener rich in antioxidants and antibacterial properties.",
  },
  {
    title:"Let’s grow naturaly and live naturaly",
    desc:"Our fresh veggies are sourced directly from local farms, ensuring maximum freshness and nutritional value for our customers.",
  },
  {
    title:"Best vegetables for your healthy hair",
    desc:"We use high-quality wheat grains harvested from trusted farms to provide wholesome and nutritious products to our customers.",
  }
]

export const projectCard=[
  {
    title:"Services:",
    desc:"Healthy Food",
  },
  {
    title:"Farmer:",
    desc:"Mike Hardson",
  },
  {
    title:"Duration:",
    desc:"4.5 Months",
  },
  {
    title:"Location:",
    desc:"Broklyn, New Your",
  }
]
// good functions



export const pxToRem = (px) => {
  const baseFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return `${(px / baseFontSize).toFixed(2)}rem`;
};
