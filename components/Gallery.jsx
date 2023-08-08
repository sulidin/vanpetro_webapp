import React from 'react';
import Carousel from '@components/Carousel';

const Gallery = ({ clickedCardProps, closeGalleryHandler }) => {
  // console.log(clickedCardProps);
  const closeGallery = () => {
    closeGalleryHandler();
  };

  return (
    <div>
      {clickedCardProps && (
        <div className="p-8 rounded-lg shadow-lg fixed top-0 left-0 w-full h-full bg-black flex bg-opacity-75 items-center justify-center">
          <Carousel
            closeG={closeGallery}
            serviceDetails={clickedCardProps.text}
            img1={clickedCardProps.src}
            serviceImages={clickedCardProps.images}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
