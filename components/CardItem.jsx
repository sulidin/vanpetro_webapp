import React from 'react';


function CardItem(props) {

  const handleClick = () => {
    if (props.path === 'gallery') {
      props.openGalleryHandler(props);
    }
  };
  return (
    <>
      <li className='cards__item'>
        <div
          className='cards__item__link'
          onClick={handleClick}
        >
          <figure className='cards__item__pic-wrap'>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
            <img
              className='cards__item__img'
              alt='Service Image'
              src={props.src}
            />
          </figure>
        </div>
      </li>
    </>
  );
}

export default CardItem;

