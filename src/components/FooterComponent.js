import React from 'react';
import { Link } from 'react-router-dom';

function FooterComponent() {
  return (
    <footer>
      <div className='social'>
        <i className='fab fa-facebook-f'></i>
        <i className='fab fa-instagram'></i>
        <i className='fab fa-twitter'></i>
      </div>
      <Link className='contact' to='#'>
        contact us
      </Link>
    </footer>
  );
}

export default FooterComponent;
