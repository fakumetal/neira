import { useState, useEffect } from 'react';
import './banner.scss';
import banner1 from '/assets/banner/1.jpg';
import banner2 from '/assets/banner/2.jpg';
import banner3 from '/assets/banner/3.jpg';

const Banner = () => {
  const images = [
    banner1,
    banner2,
    banner3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      {images.map((image, index) => (
        <div
          key={index}
          className={`banner__image ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default Banner;
