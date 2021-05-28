import React from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import LoginBodyComponent from '../components/LoginBodyComponent';
import LoginSideBarComponent from '../components/LoginSideBarComponent';

function LoginPage() {
  return (
    <>
      <div className='personelPage_showcase defaultPage_showcase'>
        <HeaderComponent />
        <div className='content'>
          <LoginSideBarComponent />
          <LoginBodyComponent />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default LoginPage;
