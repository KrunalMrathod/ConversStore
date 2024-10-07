import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Style {
  title: string
  img: string
  bannerImg: string
}

const FirstBanner = () => {
  const [sale, setStyle] = useState<Style[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3001/sale')
      .then((response) => response.json())
      .then((data) => setStyle(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
  
  const handleStyleClick = (item: Style) => {
    navigate(`/style/${item.title}`, { state: { item } })
  }

  return (
    <div className="w-[100%] my-1 mx-auto cursor-pointer">
      {sale.map((item) => (
        <img
          key={item.title}
          src={item.bannerImg}
          alt={item.title}
          onClick={() => handleStyleClick(item)}
          className='mx-auto'
        />
      ))}
    </div>
  )
}

export default FirstBanner
