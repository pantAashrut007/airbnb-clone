import React from 'react';
import './styles/card.css';

export default function Card({src, title, description, price}) {
  return (
    <div className='card'>
      <img scr = {src} alt = {title}/>
      <div className='card_info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  )
}
