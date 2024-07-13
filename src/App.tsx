import React, { useEffect, useState } from 'react';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopNav from './components/TopNav';
import FirstBanner from './components/FirstBanner';
import NewLaunch from './components/NewLaunch';
import ShopByStyle from './components/ShopByStyle';
import Shoes from './components/shoes';
import FlexBanners from "./components/FlexBanners";
import { LaunchData } from './Typse';
import { BannerData } from './Typse';

const App: React.FC = () => {
  const [launchData, setLaunchData] = useState<LaunchData[]>([]);
  const [bannerData, setBannerData] = useState<BannerData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const launchResponse = await fetch('http://localhost:3001/launchData');
        const launchData: LaunchData[] = await launchResponse.json();
        setLaunchData(launchData);

        const bannerResponse = await fetch('http://localhost:3001/bannerData');
        const bannerData: BannerData[] = await bannerResponse.json();
        setBannerData(bannerData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <TopNav />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <FirstBanner />
            {launchData.map((data) => (
              <NewLaunch key={data.id} data={data} />
            ))}
            <ShopByStyle />
            {bannerData.map((data) => (
              <FlexBanners key={data.id} {...data} />
            ))}
          </>
        } />
        <Route path="/style/:title" element={<Shoes />} />
      </Routes>
    </Router>
  );
};

export default App;
