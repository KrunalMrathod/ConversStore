import React, { useEffect, useState } from 'react'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
import FirstBanner from './components/FirstBanner'
import NewLaunch from './components/NewLaunch'
import ShopByStyle from './components/ShopByStyle'
import Shoes from './components/shoes'
import FlexBanners from './components/FlexBanners'
import { LaunchData } from './Typse'
import { BannerData } from './Typse'
import SignUpEmail from './components/SignUpEmail'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

const App: React.FC = () => {
  const [launchData, setLaunchData] = useState<LaunchData[]>([])
  const [bannerData, setBannerData] = useState<BannerData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const launchResponse = await fetch('http://localhost:3001/launchData')
        const launchData: LaunchData[] = await launchResponse.json()
        setLaunchData(launchData)

        const bannerResponse = await fetch('http://localhost:3001/bannerData')
        const bannerData: BannerData[] = await bannerResponse.json()
        setBannerData(bannerData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Router>
      <TopNav />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FirstBanner />
              {launchData.map((item) => (
                <NewLaunch key={item.id} item={item} />
              ))}
              <ShopByStyle />
              {bannerData.map((item) => (
                <FlexBanners key={item.id} item={item} />
              ))}

              <SignUpEmail />
              <Footer />
            </>
          }
        />
        <Route path="/style/:title" element={<Shoes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
