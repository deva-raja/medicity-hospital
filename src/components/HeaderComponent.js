import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jwtAuthCheck } from '../api/jwtApi';
import LogoutButtonComponent from './LogoutButtonComponent';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../redux/appointmentSlice';

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
    console.log({ 'location': location.pathname });
    if (location.pathname === '/') {
      dispatch(changePage({ doctor: true, time: false }));
    }
    pageLoad();
  }, [location, dispatch]);

  return (
    <header>
      {/* <Link className='logo animate__animated animated-logo' to='/'> */}
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
