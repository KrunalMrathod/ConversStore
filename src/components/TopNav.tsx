import { useState, useEffect } from 'react'

const adds = [
  'EASY RETURNS | Simply return it within 7 days | See Details',
  'The Largest Assortment Of Converse Sneakers in India | SHOP NOW',
  'FREE SHIPPING | Free shipping for all orders | SEE Details',
]

const TopNav = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adds.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black text-white md:text-sm text-xs  align-middle text-center md:p-3 p-1 font-poppins">
      <span>{adds[currentIndex]}</span>
    </div>
  )
}

export default TopNav
