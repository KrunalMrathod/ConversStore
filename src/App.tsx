
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
import FirstBanner from './components/FirstBanner'
import NewLaunch from './components/NewLaunch'
import ShopByStyle from './components/ShopByStyle'
import Shoes from './components/shoes'

const Home = () => (
  <>
    <FirstBanner />
    <NewLaunch />
    <ShopByStyle />
  </>
)

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
  )
}

export default App
