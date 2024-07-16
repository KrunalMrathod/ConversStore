import { RiMailSendLine } from 'react-icons/ri'
import { TbTruckReturn } from 'react-icons/tb'

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { FaTwitter } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

const Footer = () => {
  return (
    <div>
      <div className="border-b-2 flex justify-evenly align-middle p-10">
        <div className="border-2 border-gray-100 w-[25%] h-[200px] flex flex-col items-center p-5">
          {' '}
          <RiMailSendLine className=" text-9xl" />{' '}
          <span className='text-xl font-bold'>Fast, Free Shipping</span>
          <span className="text-center font-poppins my-5 text-sm">
            Sign up for Converse.in account and get free shipping on every order
          </span>{' '}
          <p className="font-bold cursor-pointer">Learn More</p>{' '}
        </div>
        <div className="border-2 border-gray-100  w-[25%] h-[200px] flex flex-col items-center p-5">
          {' '}
          <TbTruckReturn className=" text-9xl" />{' '}
          <span className='text-xl font-bold'>Worry-Free Returns</span>
          <span className="text-center font-poppins my-5 text-sm">
          Not happy? Return your purchase for free within 7 days.
          </span>{' '}
          <p className="font-bold cursor-pointer">Learn More</p>{' '}
        </div>
        <div className="border-2 border-gray-100 w-[25%] h-[200px] flex flex-col items-center p-5">
          {' '}
          <div className='flex' >
          <FaFacebook className='m-2 text-2xl'/>
          <FaInstagram className='m-2 text-2xl'/>
          <FaTwitter className='m-2 text-2xl'/>
          </div>
          {' '}
          <span className='text-xl font-bold'>Follow Us</span>
          <span className="text-center font-poppins my-5 text-sm">
          Keep up with the latest Converse news on our social channels.
          </span>{' '}
          <p className="font-bold cursor-pointer">Learn More</p>{' '}
        </div>
      </div>
      <div className=" h-80 my-10 flex shadow-inner">
        <div className=" w-[30%] flex flex-col items-center  ">
          <div className="flex flex-col  my-14 px-5 ">
            <div>
              {' '}
              <span className="font-poppins text-xl font-bold">
                Never Miss a Beat
              </span>{' '}
            </div>
            <div>
              {' '}
              <span className="font-poppins text-sm">
                Be the first to hear about product launches, collaborations, and
                more when you sign up for our emails.
              </span>{' '}
            </div>
          </div>
          <div className="border-b-2 w-[80%] border-gray-400">
            <input
              type="search"
              placeholder="Enter Your Email Address"
              className="w-[80%] outline-none"
            />
            <button className="w-[20%] bg-black text-white cursor-pointer p-3">
              {' '}
              <FiArrowRight className="m-auto text-lg" />{' '}
            </button>
          </div>
        </div>
        <div className=" w-[70%] flex justify-center space-x-28">
          <div className="w-[25%] flex flex-col items-center">
            <div className="mt-10 m-5">
              <span className="font-poppins font-bold">Follow Us:</span>
            </div>
            <div className=" flex w-full justify-between">
              <div className="p-3">
                {' '}
                <FaFacebook className='text-2xl cursor-pointer' />{' '}
              </div>
              <div className=" p-3">
                {' '}
                <FaInstagram className='text-2xl cursor-pointer'/>{' '}
              </div>
              <div className=" p-3">
                {' '}
                <FaTwitter className='text-2xl cursor-pointer' />{' '}
              </div>
              <div className=" p-3">
                {' '}
                <FaYoutube className='text-2xl cursor-pointer'  />{' '}
              </div>
            </div>
          </div>
          <div className="flex relative">
            <div className='flex flex-col mx-10' >
              <span className='text-2xl font-bold mt-10 m-2'>Get Help</span>
              <div className='flex flex-col'>
                <span className='m-2 cursor-pointer font-poppins font-bold'>FAQs</span>
                <span className='m-2 cursor-pointer font-poppins font-bold'>Shipping & Delivery</span>
                <span className='m-2 cursor-pointer font-poppins font-bold'>Payments</span>
                <span className='m-2 cursor-pointer font-poppins font-bold'>Size Guide</span>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className='text-2xl font-bold mt-10 m-5'>Order Status</span>
              <span className='m-2 cursor-pointer font-poppins font-bold'>Returns & Refunds</span>
              <span className='m-2 cursor-pointer font-poppins font-bold'>Contact Us</span>
              <span className='m-2 cursor-pointer font-poppins font-bold'>Student Discount</span>
            </div>
            <div className='absolute right-8 bottom-10  w-[80%] m-auto '> 
              <img src="https://www.converse.in/media/wysiwyg/payment.png?auto=webp&format=png&quality=85" alt="visa"  className='m-auto cursor-pointer'/>
               </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
