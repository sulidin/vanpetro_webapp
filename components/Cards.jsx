"use client";
import React, { useState } from 'react';
import CardItem from '@components/CardItem';
import Gallery from '@components/Gallery';

function Cards(props) {
  const [showGallery, setShowGallery] = useState(false);
  const [clickedCardProps, setClickedCardProps] = useState(null);// State to save the clicked card props

  const openGalleryHandler = (cardProps) => {
    setClickedCardProps(cardProps); // Save the clicked card props in state
    setShowGallery(true);
  };

  const closeGalleryHandler = () => {
    setClickedCardProps(null); // Reset the clicked card props when closing gallery
    setShowGallery(false);
  };

  return (
    <div className='cards'>
      <h2>{props.header}</h2>
      <p>{props.text}</p>
      <p>{props.text2}</p>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={props.src1}
              text={props.cardtext1}
              path={props.path1}
              images={props.images1}
              showGallery={showGallery}
              openGalleryHandler={openGalleryHandler}
              closeGalleryHandler={closeGalleryHandler}
            />
            <CardItem
              src={props.src2}
              text={props.cardtext2}
              path={props.path2}
              images={props.images2}
              showGallery={showGallery}
              openGalleryHandler={openGalleryHandler}
              closeGalleryHandler={closeGalleryHandler}
            />
            <CardItem
              src={props.src3}
              text={props.cardtext3}
              path={props.path3}
              images={props.images3}
              showGallery={showGallery}
              openGalleryHandler={openGalleryHandler}
              closeGalleryHandler={closeGalleryHandler}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={props.src4}
              text={props.cardtext4}
              path={props.path4}
              images={props.images4}
              showGallery={showGallery}
              openGalleryHandler={openGalleryHandler}
              closeGalleryHandler={closeGalleryHandler}
            />
            <CardItem
              src={props.src5}
              text={props.cardtext5}
              path={props.path5}
              images={props.images5}
              showGallery={showGallery}
              openGalleryHandler={openGalleryHandler}
              closeGalleryHandler={closeGalleryHandler}
            />
            <CardItem
              src={props.src6}
              text={props.cardtext6}
              path={props.path6}
              images={props.images6}
              showGallery={showGallery}
              openGalleryHandler={openGalleryHandler}
              closeGalleryHandler={closeGalleryHandler}
            />
          </ul>
          {showGallery && <Gallery 
            closeGalleryHandler={closeGalleryHandler}
            clickedCardProps={clickedCardProps}
          />}
        </div>
      </div>
    </div>
  );
}

export default Cards;
