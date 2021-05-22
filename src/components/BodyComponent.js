import React from 'react';
import { Link } from 'react-router-dom';

function BodyComponent() {
  return (
    <>
      <div className='content'>
        <div className='content-wrapper'>
          <h2>
            <span className='fade-item-1 animation animate__animated'> Putting </span>
            <span className='fade-item-2 animation animate__animated'> patients </span>
            <span className='fade-item-3 animation animate__animated'> first </span>
          </h2>
          <h3>
            <span className='fade-item-4 animation animate__animated'> we're </span>
            <span className='fade-item-5 animation animate__animated'> here </span>
            <span className='fade-item-6 animation animate__animated'> for </span>
            <span className='fade-item-7 animation animate__animated'> you </span>
          </h3>
          <p>
            A decade ago, we made a commitment to be the best provider of health care services.
            We’ve kept it.
          </p>
          <Link to='/appointment'>schedule your appointment</Link>
        </div>
      </div>
    </>
  );
}

export default BodyComponent;
