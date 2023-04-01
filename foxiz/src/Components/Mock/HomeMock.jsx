import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

// mock data for Editor's news info

export const HomeMock = [
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t13-330x220.jpg",
    tag: "Technology",
    shortinfo: "Self-Driving Cars: Everything You Need to Know",
    time: "Aug 7, 2021",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/c14-330x220.jpg",
    tag: "SCIENCE",

    shortinfo: " Girls in Ocean Science Conference a First at Maritime Museum",
    time: "Aug 6, 2021",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t5-330x220.jpg",
    tag: "Technology",

    shortinfo: " Google Must Allow Developers to Use Other Payment Systems",
    time: "Aug 6, 2021",
  },
];

// Follow mock
export const Follow = [
  {
    id: Math.floor(Math.random() * 100),
    p: "Follow Us",
    logo: <FaFacebookF style={{ fontSize: "25px", color: "blue" }} />,
    follow_info: "248.1k Followers",
    like: "Like",
  },
  {
    id: Math.floor(Math.random() * 100),
    p: "Follow Us",
    logo: <FaTwitter style={{ fontSize: "25px", color: "#6ec1e4" }} />,
    follow_info: "248.1k Followers",
    like: "Like",
  },
  {
    id: Math.floor(Math.random() * 100),
    p: "Follow Us",
    logo: <FaPinterest style={{ fontSize: "25px", color: "#ff6900" }} />,
    follow_info: "248.1k Followers",
    like: "Like",
  },
  {
    id: Math.floor(Math.random() * 100),
    p: "Follow Us",
    logo: <FaInstagram style={{ fontSize: "25px", color: "#9b51e0" }} />,
    follow_info: "248.1k Followers",
    like: "Like",
  },
];

// Most read

export const Mostread = [
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/p6-615x410.jpg",
    tag: "POLITICS",
    shortinfo: "Bad Credit Shouldn’t Affect Health Insurance, Experts Say",
    time: "Sep 19, 2021",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/b9-615x410.jpg",
    tag: "SCIENCE",

    shortinfo:
      " Personal loan Interest Rates Rise, Still Much Lower than Same Time Last Year",
    time: "Aug 11, 2021",
  },
];

export const HomeMockshort = [
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/v24-200x135.jpg",

    shortinfo: "9 Awesome Destinations for Solo Female Travelers",
    time: "Sep 18, 2021",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/m12-200x135.jpg",

    shortinfo: "What Are Some Ways to Prevent the Spread of COVID-19?",
    time: "Aug 11, 2021",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t28-200x135.jpg",

    shortinfo: "A gene-Based Therapy Partially Restored a Blind Man’s Vision",
    time: "Aug 13, 2021",
  },
];

// categories
export const Discover_Categories = [
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/b26-330x220.jpg",

    kind: "Business",
    info: "12 Articles",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/e15-330x220.jpg",

    kind: "Entertainment",
    info: "13 Articles",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/t39-330x220.jpg",

    kind: "Technology",
    info: "17 Articles",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/v18-330x220.jpg",

    kind: "Travel",
    info: "14 Articles",
  },
];

//Latest news
export const Latest_news_home = [
  {
    id: Math.floor(Math.random() * 100),
    imgSrc1:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg",

    info: "Corsair HS80 RGB Wireless Gaming Headset Review",
    infospan:
      "As for quality, the HS80's provided clear-cut sound with adequate bass and…",
    name: "Jacob",
    time: "Sep 19, 2021",
    type: "Technology",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/t102-615x410.jpg",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc1:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg",

    info: "18 Top Fall Fashion Trends from New York Fashion",
    infospan:
      "All of the Best Looks From New York Fashion Week Fall/Winter 2021.…",
    name: "Jacob",
    time: " Sep 9, 2021",
    type: "Technology",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/f108-330x220.jpg",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc1:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg",

    info: "Apple iMac M1 Review: the All-In-One for Almost Everyone",
    infospan: "The iMac weighs under 10 pounds, so it's a cinch to move…",
    name: "Jacob",
    time: "Sep 19, 2021",
    type: "Technology",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/r119-330x220.jpg",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc1:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg",

    info: "Potential HIV Vaccine Falls Short in Mid-stage Study",
    infospan: "We are just an advanced breed of monkeys on a minor planet…",
    name: "Jacob",
    time: "Sep 19, 2021",
    type: "Health",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/m16-330x220.jpg",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc1:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg",

    info: "Google’s Self-Designed Tensor Chips will Power Its Next",
    infospan:
      "Modern technology has become a total phenomenon for civilization, the defining force…",
    name: "Jacob",
    time: "Sep 8, 2021",
    type: "Technology",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t34-330x220.jpg",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc1:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg",

    info: "Sony WF-10XM4: Headphones Are Our Absolute Favorite",
    infospan:
      "Modern technology has become a total phenomenon for civilization, the defining force…",
    name: "Jacob",
    time: "Sep 19, 2021",
    type: "Technology",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t37-330x220.jpg",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc1:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg",

    info: "Medicaid Expansion Improves Hypertension and Diabetes Control",
    infospan: "We are just an advanced breed of monkeys on a minor planet…",
    name: "Jacob",
    time: "Sep 5, 2021",
    type: "Health",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/m5-330x220.jpg",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc1:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg",

    info: "Hands-On With the iPhone 13, Pro, Max, and Mini",
    infospan:
      "Modern technology has become a total phenomenon for civilization, the defining force…",
    name: "Jacob",
    time: "Sep 4, 2021",
    type: "Technology",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/g24-330x220.jpg",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc1:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg",

    info: "European Stocks Hold Firm Near Record Highs",
    infospan:
      "The real test is not whether you avoid this failure, because you…",
    name: "Jacob",
    time: "Sep 4, 2021",
    type: "Technology",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/b32-330x220.jpg",
  },
];

// short sponsor info

export const Sponsort_info = [
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t37-200x135.jpg",

    info: "Sony WF-10XM4: Headphones Are Our Absolute Favorite",
    sponsor: "Sponsored by",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/sponsor-1.png",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/v1-200x135.jpg",

    info: "The Top Secret Sights You Must See in Europe",
    sponsor: "Sponsored by",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/sponsor-4.png",
  },
  {
    id: Math.floor(Math.random() * 100),
    imgSrc:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/e29-200x135.jpg",

    info: "10+ Pics That Prove Jennifer Is a Timeless Beauty",
    sponsor: "Sponsored by",
    imgSrc2:
      "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/sponsor-2.png",
  },
];
