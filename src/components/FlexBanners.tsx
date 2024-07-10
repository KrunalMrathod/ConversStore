import React from 'react'

interface FlexBannersProps {
  heading: string
  text?: string
  textHead?: string
  textHeading?: string
  images: string[]
  buttonText?: string
  layout: 'layout1' | 'layout2' | 'layout3'
}

const FlexBanners: React.FC<FlexBannersProps> = ({
  heading,
  text,
  textHead,
  textHeading,
  images,
  buttonText,
  layout,
}) => {
  let content

  switch (layout) {
    case 'layout1':
      content = (
        <div className=' my-16'>
          <h2 className="text-2xl font-bold">{heading}</h2>
          <div className="flex w-full h-[80vh]">
            <div className="w-[70%]">
              <img
                src={images[0]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[30%] p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{textHead}</h3>
              <p>{text}</p>
              {buttonText && (
                <button className="bg-black text-white py-2 px-4 rounded">
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
        <div className=' my-16'>
          <h2 className="text-2xl font-bold mb-4 ">{heading}</h2>
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
        <div className=' my-24'>
          <h2 className="text-2xl font-bold mb-4">{heading}</h2>
          <div className="flex w-full h-[80vh]">
            <div className="w-[60%]">
              <img
                src={images[0]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[40%]">
            <h3 className="text-xl font-bold mb-2">{textHeading}</h3>
            <p>{text}</p>
            {buttonText && (
              <button className="bg-black text-white py-2 px-4 rounded">
                {buttonText}
              </button>
            )}
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
