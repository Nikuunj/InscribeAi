import React, { useEffect, useRef } from 'react';
import img from '../assets/hero1.png';

function Images() {
  const images = [img];
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);

  const handleTouchStart = () => {
    clearInterval(autoScrollInterval.current);
  };

  const handleTouchEnd = () => {
    autoScrollInterval.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300,
          behavior: 'smooth',
        });

        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        }
      }
    }, 2000);
  };

  const renderImages = images.map((img, index) => (
    <div className="snap-center flex-shrink-0 w-80 h-80 lg:w-full lg:h-full bg-transparent rounded-xl " key={index}>
      <img src={img} alt={`image-${index}`} className="lg:h-full lg:w-full lg:ms-0  ms-12 shadow-xl rounded-lg lg:mt-0 mt-10 p-0 object-cover" />
    </div>
  ));

  return (
    <div
      ref={scrollRef}
      className="snap-x flex lg:space-x-8 space-x-1 bg-transparent w-full overflow-x-hidden m-0"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {renderImages}
    </div>
  );
}

export default Images;
