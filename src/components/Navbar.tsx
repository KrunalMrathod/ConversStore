
import NavLog from '../assest/Navlogo.png';
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center shadow-custom-navbar h-16 bg-white">
      <div className="flex items-center w-2/5 h-full">
        <div className="w-[25%] cursor-pointer h-full">
          <img src={NavLog} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-evenly w-[70%] h-full items-center space-x-4">
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
      <div className="flex justify-evenly w-1/3 h-full">
        <div className="flex items-center cursor-pointer">
          <span className="text-slate-900 text-[12px] font-bold">Sign In</span>
          <FaRegUser className="w-8 h-4" />
        </div>
        <div className="flex items-center cursor-pointer">
          <FaRegHeart className="w-8 h-4" />
        </div>
        <div className="flex items-center cursor-pointer">
          <FiShoppingCart className="w-8 h-4" />
        </div>
        <div className="flex items-center space-x-2 border-2 bg-black">
          <input
            type="search"
            placeholder="Search"
            className="border p-1 rounded bg-transparent border-none outline-none placeholder-white text-white"
          />
          <IoSearch className="fill-slate-50 cursor-pointer h-full w-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
