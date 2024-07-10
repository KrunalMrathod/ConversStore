import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LaunchData } from '../Typse';

interface NewLaunchProps {
  data: LaunchData;
}

const NewLaunch: React.FC<NewLaunchProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/style/90s-remix', {
      state: {
        images: data.images,
        text: data.text,
        heading: data.heading ,
        textHeading : data.textHeading
      }
    });
  };

  return (
    <div className="flex flex-col h-[100vh] w-[95%] m-auto my-10 cursor-pointer" onClick={handleClick}>
      {data.heading && (
        <h2 className="text-black text-2xl font-bold p-2 mb-4">
          {data.heading}
        </h2>
      )}
      <div className="flex h-full">
        <div className="w-[45%]">
          <img
            src={data.images[0]}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[55%] flex flex-col">
          <div className="h-[50%] bg-customGray p-4 font-poppins flex flex-col justify-center items-center text-center">
            <h2 className="text-white text-2xl font-bold mb-2"> {data.textHeading} </h2>
            <span className="text-white text-base mb-4 block">
              {data.text}
            </span>
            <button className="bg-white text-black py-2 px-4 rounded">SHOP NOW</button>
          </div>
          <div className="h-[50%]">
            <img
              src={data.images[1]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLaunch;
