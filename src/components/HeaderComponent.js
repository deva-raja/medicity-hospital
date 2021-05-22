import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <header>
      <Link className='logo animate__animated animated-logo' to='/'>
        Medicity
      </Link>
      <div class='nav'>
        <Link to='/covid'>covid-19</Link>
        <Link to='/personel'>personel</Link>
        <Link to='/locations'>locations</Link>
      </div>
    </header>
  );
}

export default HeaderComponent;
