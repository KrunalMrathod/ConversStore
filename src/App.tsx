import './index.css'
import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
import FirstBanner from './components/FirstBanner'
import NewLaunch from './components/NewLaunch'

export const App = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <FirstBanner />
      <NewLaunch/>
    </>
  )
}
