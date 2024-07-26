import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Detail {
  title: string;
  img: string;
  price: string;
}

interface Style {
  title: string;
  img: string;
  details: Detail[];
}

const Shoes: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const [style, setStyle] = useState<Style | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3001/shopByStyle?title=${title}`)
      .then(response => response.json())
      .then(data => setStyle(data[0]))
      .catch(error => console.error('Error fetching data:', error));
  }, [title]);

  if (!style) {
    return <div>Loading... this is shoes</div>;
  }

  return (
    <div className="w-[95%] m-auto">
      <h1 className="font-poppins font-extrabold text-xl">{style.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-auto">
        {style.details.map((detail, index) => (
          <div key={index} className="p-2">
            <img src={detail.img} alt={detail.title} className="w-full h-48 object-cover" />
            <h3 className="text-center mt-5 font-poppins text-xl font-bold">{detail.title}</h3>
            <p className="text-center mt-1">{detail.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
