import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';

interface Style {
  title: string;
  img: string;
}

const ShopByStyle: React.FC = () => {
  const [styles, setStyles] = useState<Style[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/shopByStyle')
      .then(response => response.json())
      .then(data => setStyles(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleStyleClick = (title: string) => {
    navigate(`/style/${title}`);
  };

  return (
    <div className="w-[95%] m-auto">
      <h1 className="font-poppins font-extrabold text-xl">Shop By Style</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-auto">
        {styles.map((style, index) => (
          <div key={index} className="p-2 cursor-pointer" onClick={() => handleStyleClick(style.title)}>
            <img src={style.img} alt={style.title} className="w-full h-48 object-cover" />
            <h3 className="text-center mt-5 font-poppins text-xl font-bold">{style.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByStyle;
