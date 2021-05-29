import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

function DoctorPage() {
  return (
    <>
      <div className='covidPage_showcase defaultPage_showcase'>
        <HeaderComponent />
        <div className='content'>doctors</div>
        <FooterComponent />
      </div>
    </>
  );
}

export default DoctorPage;
