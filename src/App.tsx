import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopNav from './components/TopNav';
import FirstBanner from './components/FirstBanner';
import NewLaunch from './components/NewLaunch';
import ShopByStyle from './components/ShopByStyle';
import Shoes from './components/shoes';
import { LaunchData } from './Typse';
import FlexBanners from "./components/FlexBanners";

const launchData1: LaunchData = {
  images: [
    "https://www.converse.in/media/wysiwyg/Weapon_Homepage-06.png?auto=webp&format=png&quality=85",
    "https://www.converse.in/media/wysiwyg/Weapon_Homepage-02.png?auto=webp&format=png&quality=85"
  ],
  text: "Want some '90s flair? Throw on this Converse Weapon that pays homage to our basketball and skate shoes from that era. A durable, leather upper in retro colors gives it the look of a pre-Y2K favorite.",
  textHeading : "90'S Remix"
};

const launchData2: LaunchData = {
  images: [
    "https://www.converse.in/media/wysiwyg/jun_24_homepage_updates-03.png?auto=webp&format=png&quality=85",
    "https://www.converse.in/media/wysiwyg/jun_24_homepage_updates-02.png?auto=webp&format=png&quality=85"
  ],
  text:  " ProCONS team rider Alexis Sablone's creative vision comes to life on the AS-1 Pro— a new spin on the classic One Star. Sturdy suede delivers on durability, while increased cushioning helps with impact absorption. ",
  heading: "Skate In Style",
  textHeading : "Gone Pro"
 };

 const bannerData1 = {
  heading: "Ultra Chic",
  textHead : "Level Up",
  text: "Make way for your new favorite platforms. The Chuck 70 De Luxe gets even more audacious with a molded wedge heel. It still has details inspired by '90s fashion, for a throwback meets future vibe",
  images: [
    "https://www.converse.in/media/wysiwyg/jun_24_homepage_updates-08.png?auto=webp&format=png&quality=85",
    "https://www.converse.in/media/wysiwyg/jun_24_homepage_updates-08.png?auto=webp&format=png&quality=85"
  ],
  buttonText : "SHOP NOW",
  layout: 'layout1' as const
};

const bannerData2 = {
  heading: "Wardrobe Essentials",
  images: [
    "https://www.converse.in/media/wysiwyg/jun_24_homepage_updates-25.png?auto=webp&format=png&quality=85",
    "https://www.converse.in/media/wysiwyg/jun_24_homepage_updates-26.png?auto=webp&format=png&quality=85",
    "https://www.converse.in/media/wysiwyg/jun_24_homepage_updates-24.png?auto=webp&format=png&quality=85"
  ],
  layout: 'layout2' as const
};

const bannerData3 = {
  heading: "Be Extravagant",
  textHeading : "Shop Accessories",
  text: "Accessorize to Amplify! Elevate your look with Converse's must-have gears",
  images: [
    "https://www.converse.in/media/wysiwyg/DT.png?auto=webp&format=png&quality=85",
  ],
  buttonText : "SHOP NOW",
  layout: 'layout3' as const
};


const Home = () => (
  <>
    <FirstBanner />
    <NewLaunch data={launchData1} />
    <ShopByStyle />
    <NewLaunch data={launchData2} />
    <FlexBanners {...bannerData1} />
    <FlexBanners {...bannerData2} />
    <FlexBanners {...bannerData3} />
  </>
);

const App = () => {
  return (
    <Router>
      <TopNav />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/style/:title" element={<Shoes />} />
      </Routes>
    </Router>
  );
};

export default App;
