import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

interface Product {
  title: string
  img: string
  price: string
}

interface Style {
  title: string
  img: string
  bannerImg: string
  products?: Product[]
  details?: Product[]
}

const Shoes: React.FC = () => {
  const { title } = useParams<{ title: string }>()
  const location = useLocation()
  const [style, setStyle] = useState<Style | null>(null)

  useEffect(() => {
    const state = location.state as { item?: Style }
    

    if (state && state.item) {
      setStyle(state.item)
    } else {
      fetch(`http://localhost:3001/shopByStyle?title=${title}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error fetching data:', error))
    }
  }, [title, location.state])


  if (!style || (!style.details && !style.products)) {
    return <div>Loading... this is shoes</div>
  }

  const items = style.details || style.products || []

  console.log("shoes")

  return (
    <div className="w-[95%] m-auto">
      <h1 className="font-poppins font-extrabold text-xl">{style.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-auto">
        {items.map((item, index) => (
          <div key={index} className="p-2">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-center mt-5 font-poppins text-xl font-bold">
              {item.title}
            </h3>
            <p className="text-center mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shoes
