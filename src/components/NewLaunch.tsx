import React from 'react';

const NewLaunch = () => {
  return (
    <div className="flex h-[100vh] w-[95%] m-auto my-10 cursor-pointer">
      <div className="w-[45%]">
        <img
          src="https://www.converse.in/media/wysiwyg/Weapon_Homepage-06.png?auto=webp&format=png&quality=85"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-[55%] flex flex-col">
        <div className="h-[50%] bg-customGray p-4 font-poppins flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-2xl font-bold mb-2">90's Remix</h2>
          <span className="text-white text-base mb-4 block">
            Want some '90s flair? Throw on this Converse Weapon that pays homage
            to our basketball and skate shoes from that era. A durable, leather
            upper in retro colors gives it the look of a pre-Y2K favorite.
          </span>
          <button className="bg-white text-black py-2 px-4 rounded">SHOP NOW</button>
        </div>
        <div className="h-[50%]">
          <img
            src="https://www.converse.in/media/wysiwyg/Weapon_Homepage-02.png?auto=webp&format=png&quality=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default NewLaunch;
