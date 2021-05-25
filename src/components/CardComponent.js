import React from 'react';

function CardComponent({ img, data, emailDisplay }) {
  return (
    <div className='card'>
      <div className='image-wrapper'>
        <img src={img} alt='' />
      </div>
      <div className='info-wrapper'>
        <div class='card-heading'>
          <span>{data.name}</span>
          <span>{emailDisplay && data.email}</span>
          <span>{data.specilisation}</span>
        </div>
        <div class='card-body'>{data.message}</div>
        <div class='card-contact'>{data.phone}</div>
      </div>
    </div>
  );
}

export default CardComponent;
