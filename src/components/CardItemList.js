import React from 'react';
import { Link } from 'react-router-dom';

function CardItemList(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt={props.alt}
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <ul className='cards__item__text'>
              <li>{props.listText1}</li>
              <li>{props.listText2}</li>
              <li>{props.listText3}</li>
              <li>{props.listText4}</li>
              <li>{props.listText5}</li>
            </ul>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemList;
