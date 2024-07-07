
// import "./Navbar.css"
import NavLog from "../assest/Navlogo.png";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="border-red-900 flex">
      <div className="NavLeft">
        <div className="NavLogo">
          <img src= {NavLog} alt="" />
        </div>
        <div className="NavLeftTabs">
          <div className="TabLeft"> <span>News & Featured</span> </div>
          <div className="TabLeft"> <span>Women</span> </div>
          <div className="TabLeft"> <span>Men</span> </div>
          <div className="TabLeft"> <span>Kids</span> </div>
          <div className="TabLeft"> <span>Sale</span> </div>
        </div>
      </div>
      <div className="NavRight">
        <div className="TabRight"> <span>SignIn</span> <FaRegUser/> </div>
        <div className="TabRight"> <FaRegHeart/> </div>
        <div className="TabRight"> <FiShoppingCart/> </div>
        <div className="NavSearch">
          <input type="serch" placeholder='Search' />
          <IoSearch/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
