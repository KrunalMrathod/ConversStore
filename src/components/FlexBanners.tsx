import React from 'react'

interface FlexBannersProps {
  heading: string
  text?: string
  textHead?: string
  textHeading?: string
  images: string[]
  buttonText?: string
  layout: 'layout1' | 'layout2' | 'layout3'
  divStyles?: React.CSSProperties
}

const FlexBanners: React.FC<FlexBannersProps> = ({
  heading,
  text,
  textHead,
  textHeading,
  images,
  buttonText,
  layout,
  divStyles,
}) => {
  let content

  switch (layout) {
    case 'layout1':
      content = (
        <div className="my-6">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <div className="flex w-full h-[80vh]">
            <div className="w-[70%] cursor-pointer">
              <img
                src={images[0]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[30%] p-4 " style={divStyles}>
              <h3 className="text-5xl font-bold mb-7 font-poppins my-32 ">
                {textHead}
              </h3>
              <p className="font-poppins mb-5">{text}</p>
              {buttonText && (
                <button className="bg-white text-black py-2 px-4 font-poppins font-bold cursor-pointer">
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      )
      break
    case 'layout2':
      content = (
        <div className="my-24 cursor-pointer">
          <h2 className="text-2xl font-bold mb-4">{heading}</h2>
          <div className="flex w-full h-[80vh]">
            <div className="w-[33%]">
              <img
                src={images[0]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[33%]">
              <img
                src={images[2]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[33%]">
              <img
                src={images[1]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )
      break
    case 'layout3':
      content = (
        <div className="my-32">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <div className="flex w-full h-[70vh]">
            <div className="w-[40%] p-4 " style={divStyles}>
              <h3 className="text-5xl font-bold mb-7 font-poppins my-32 ">
                {textHead}
              </h3>
              <p className="font-poppins mb-5">{text}</p>
              {buttonText && (
                <button className="bg-white text-black py-2 px-4 font-poppins font-bold cursor-pointer">
                  {buttonText}
                </button>
              )}
            </div>
            <div className="w-[60%] cursor-pointer">
              <img
                src={images[0]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )
      break
    default:
      content = null
  }

  return (
    <div className="w-[95%] h-[80vh] m-auto my-10 flex flex-col">{content}</div>
  )
}

export default FlexBanners
