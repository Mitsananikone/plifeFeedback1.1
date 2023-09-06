import { useState, useEffect } from 'react';
import Slick from '@/components/slick/slick';

export default function LandingPage() {
  const images = [
    '/images/home1.png',
    '/images/about-sand.png',
    '/images/home3.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 10000);  // 10 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="backgroundChange">
      {/* Stack both images on top of each other */}
      {images.map((img, index) => (
        <div
          key={img}
          style={{ backgroundImage: `url(${img})` }}
          className={`backgroundChange-image ${index === currentImageIndex ? 'visible' : ''}`}
        ></div>
      ))}

<div style={{marginTop: '25%', transform: 'scale(1.8)', opacity: '(0.8)'}}  // <-- Added the scale transformation here
      >
        <Slick />
      </div>
    </div>
  );
}