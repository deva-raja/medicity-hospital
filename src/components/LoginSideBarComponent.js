import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLogin } from '../redux/loginSlice';

function LoginSideBarComponent() {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <button
        className='personel_sidebar_buttons'
        data-login='0'
        onClick={(e) => {
          dispatch(changeLogin(e.target.dataset.login));
        }}
      >
        Login Doctor
      </button>
      <button
        className='personel_sidebar_buttons'
        data-login='1'
        onClick={(e) => dispatch(changeLogin(e.target.dataset.login))}
      >
        Login Admin
      </button>
    </div>
  );
}

export default LoginSideBarComponent;
