import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import DoctorAppointmentComponent from '../components/DoctorAppointmentComponent';

function DoctorPage() {
  return (
    <>
      <div className='covidPage_showcase defaultPage_showcase'>
        <HeaderComponent />
        <div className='content'>
          <DoctorAppointmentComponent />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default DoctorPage;
