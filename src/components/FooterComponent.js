import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function FooterComponent() {
  return (
    <footer>
      <div className='social'>
        <FaFacebookF className='fab fa-facebook-f' />
        <FaInstagram className='fab fa-instagram' />
        <FaTwitter className='fab fa-twitter' />
      </div>
      <Link className='contact' to='/contact'>
        contact us
      </Link>
    </footer>
  );
}

export default FooterComponent;
