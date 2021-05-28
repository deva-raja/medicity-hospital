import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jwtAuthCheck } from '../api/jwtApi';

function HeaderComponent() {
  const [page, setPage] = useState('login');

  useEffect(() => {
    const pageLoad = async () => {
      const response = await jwtAuthCheck();
      setPage(response);
      console.log(response);
    };

    pageLoad();
  }, []);

  return (
    <header>
      {/* <Link className='logo animate__animated animated-logo' to='/'> */}
      <Link className='logo' to='/'>
        Medicity
      </Link>
      <div className='nav'>
        <Link to='/covid'>covid-19</Link>
        {page === 'login' && <Link to='/login'>personel</Link>}
        {page === 'admin' && <Link to='/personel'>personel</Link>}
        {page === 'doctor' && <Link to='/doctor'>personel</Link>}
        <Link to='/locations'>locations</Link>
      </div>
    </header>
  );
}

export default HeaderComponent;
