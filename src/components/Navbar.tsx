import { useState } from 'react'
import NavLog from '../assest/Navlogo.png'
import { FaRegUser, FaRegHeart, FaBars } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center shadow-custom-navbar h-16 bg-white px-4 md:px-8">
      <div className="flex items-center md:hidden">
        <FaBars className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
      </div>
      <div
        className="flex items-center w-1/3 md:w-2/5 h-full"
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
      >
        <div className="w-[35%] cursor-pointer h-[100%]">
          <img src={NavLog} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="hidden md:flex justify-evenly w-[70%] h-full items-center space-x-4">
          <span className="cursor-pointer hover:opacity-70 text-slate-900 text-[14px] font-bold font-poppins">
            News & Featured
          </span>
          <span className="cursor-pointer hover:opacity-70 text-slate-900 text-[14px] font-bold font-poppins">
            Women
          </span>
          <span className="cursor-pointer hover:opacity-70 text-slate-900 text-[14px] font-bold font-poppins">
            Men
          </span>
          <span className="cursor-pointer hover:opacity-70 text-slate-900 text-[14px] font-bold font-poppins">
            Kids
          </span>
          <span className="cursor-pointer hover:opacity-70 text-green-900 text-[14px] font-bold font-poppins">
            Sale
          </span>
        </div>
      </div>
      <div className="flex items-center md:hidden space-x-2">
        <FaRegUser className="w-5 h-5 cursor-pointer" />
        <FaRegHeart className="w-5 h-5 cursor-pointer" />
        <FiShoppingCart className="w-5 h-5 cursor-pointer" />
      </div>
      <div className="hidden md:flex justify-evenly w-1/3 h-full">
        <div className="flex items-center cursor-pointer">
          <span className="text-slate-900 text-[12px] font-bold">Sign In</span>
          <FaRegUser className="w-8 h-4 ml-1" />
        </div>
        <div className="flex items-center cursor-pointer">
          <FaRegHeart className="w-8 h-4" />
        </div>
        <div className="flex items-center cursor-pointer">
          <FiShoppingCart className="w-8 h-4" />
        </div>
        <div className="flex items-center space-x-2 border-2 bg-black p-1 rounded w-[70px] md:w-auto h-full">
          <input
            type="search"
            placeholder="Search"
            className="bg-transparent border-none outline-none placeholder-white text-white w-0 md:w-auto md:placeholder:hidden"
          />
          <IoSearch className="fill-slate-50 cursor-pointer w-[50%] m-auto h-full" />
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col items-start p-4 space-y-4">
            <span className="cursor-pointer hover:opacity-70 text-slate-900 text-[14px] font-bold font-poppins">
              News & Featured
            </span>
            <span className="cursor-pointer hover:opacity-70 text-slate-900 text-[14px] font-bold font-poppins">
              Women
            </span>
            <span className="cursor-pointer hover:opacity-70 text-slate-900 text-[14px] font-bold font-poppins">
              Men
            </span>
            <span className="cursor-pointer hover:opacity-70 text-slate-900 text-[14px] font-bold font-poppins">
              Kids
            </span>
            <span className="cursor-pointer hover:opacity-70 text-green-900 text-[14px] font-bold font-poppins">
              Sale
            </span>
            <div className="flex items-center space-x-2 border-2 bg-black p-1 rounded w-full">
              <input
                type="search"
                placeholder="Search"
                className="bg-transparent border-none outline-none placeholder-white text-white w-10 md:w-auto md:placeholder-hidden"
              />
              <IoSearch className="fill-slate-50 cursor-pointer w-full h-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
