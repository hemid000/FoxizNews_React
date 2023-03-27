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
