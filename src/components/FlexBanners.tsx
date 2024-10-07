import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BannerData } from '../Typse';

interface FlexBannersProps {
  item: BannerData;
}

const FlexBanners: React.FC<FlexBannersProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleImageClick = (heading: string) => {
    navigate(`/style/${heading}`, {
      state: {
        item,
      },
    });
  };

  let content;

  switch (item.layout) {
    case 'layout1':
      content = (
        <div className="my-6">
          <h2 className="text-2xl font-bold">{item.heading}</h2>
          <div className="flex w-full h-[80vh]">
            <div className="w-[70%] cursor-pointer" onClick={() => handleImageClick(item.heading)}>
              <img
                src={item.images[0]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[30%] p-4" style={item.divStyles}>
              <h3 className="text-5xl font-bold mb-7 font-poppins my-32">
                {item.textHead}
              </h3>
              <p className="font-poppins mb-5">{item.text}</p>
              {item.buttonText && (
                <button className="bg-white text-black py-2 px-4 font-poppins font-bold cursor-pointer">
                  {item.buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      );
      break;
    case 'layout2':
      content = (
        <div className="my-24 cursor-pointer">
          <h2 className="text-2xl font-bold mb-4">{item.heading}</h2>
          <div className="flex w-full h-[80vh]">
            {item.images.map((img, index) => (
              <div key={index} className="w-[33%]" onClick={() => handleImageClick(item.heading)}>
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      );
      break;
    case 'layout3':
      content = (
        <div className="my-32">
          <h2 className="text-2xl font-bold">{item.heading}</h2>
          <div className="flex w-full h-[70vh]">
            <div className="w-[40%] p-4" style={item.divStyles}>
              <h3 className="text-5xl font-bold mb-7 font-poppins my-32">
                {item.textHead}
              </h3>
              <p className="font-poppins mb-5">{item.text}</p>
              {item.buttonText && (
                <button className="bg-white text-black py-2 px-4 font-poppins font-bold cursor-pointer">
                  {item.buttonText}
                </button>
              )}
            </div>
            <div className="w-[60%] cursor-pointer" onClick={() => handleImageClick(item.heading)}>
              <img
                src={item.images[0]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      );
      break;
    default:
      content = null;
  }

  return (
    <div className="w-[95%] h-[80vh] m-auto my-10 flex flex-col">{content}</div>
  );
};

export default FlexBanners;
