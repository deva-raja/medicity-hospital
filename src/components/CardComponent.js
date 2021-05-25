import React from 'react';

function CardComponent({ img, data }) {
  return (
    <div className='card'>
      <div className='image-wrapper'>
        <img src={img} alt='' />
      </div>
      <div className='info-wrapper'>
        <div class='card-heading'>
          <span>Name - {data.name}</span>
          <div>Email - {data.email}</div>
        </div>
        <div class='card-body'>Message - {data.message}</div>
      </div>
    </div>
  );
}

export default CardComponent;
