import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { jwtAuthCheck } from '../api/jwtApi';
import { changePage } from '../redux/appointmentSlice';
import LogoutButtonComponent from './LogoutButtonComponent';

function HeaderComponent() {
  const dispatch = useDispatch();
  const [page, setPage] = useState('login');
  const location = useLocation();

  useEffect(() => {
    const admin = localStorage.getItem('admin') || null;
    const doctor = localStorage.getItem('doctor') || null;
    const pageLoad = async () => {
      const response = await jwtAuthCheck({ admin, doctor });
      setPage(response);
    };
    if (location.pathname === '/') {
      dispatch(changePage({ doctor: true, time: false }));
    }
    pageLoad();
  }, [location, dispatch]);

  return (
    <header>
      <Link className='logo' to='/'>
        Medicity
      </Link>
      <div className='nav'>
        {(page === 'admin' && <LogoutButtonComponent />) ||
          (page === 'doctor' && <LogoutButtonComponent />)}
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
