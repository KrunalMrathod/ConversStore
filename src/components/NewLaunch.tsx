import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LaunchData } from '../Typse'

interface NewLaunchProps {
  item: LaunchData
}

const NewLaunch: React.FC<NewLaunchProps> = ({ item }) => {
  const navigate = useNavigate()

  const handleClick = (title: string) => {
    navigate(`/style/${title}`, {
      state: {
        item,
      },
    })
  }

  return (
    <div
      className="flex flex-col h-[100vh] w-[95%] m-auto my-10 cursor-pointer"
      onClick={() => handleClick(item.title)}
    >
      {item.heading && (
        <h2 className="text-black md:text-2xl font-bold p-2 mb-4">
          {item.heading}
        </h2>
      )}
      <div className="flex h-full">
        <div className="w-[45%]">
          <img
            src={item.images[0]}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[55%] flex flex-col">
          <div className="h-[50%] bg-customGray p-4 font-poppins flex flex-col justify-center items-center text-center">
            <h2 className="text-white text-2xl font-bold mb-2">
              {item.textHeading}
            </h2>
            <span className="text-white text-base mb-4 block">{item.text}</span>
            <button className="bg-white text-black py-2 px-4 rounded">
              SHOP NOW
            </button>
          </div>
          <div className="h-[50%]">
            <img
              src={item.images[1]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLaunch
