import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import AppointmentDoctorComponent from '../components/AppointmentDoctorComponent';

function AppointmentPage() {
  return (
    <>
      <div className='appointmentPage_showcase defaultPage_showcase'>
        <HeaderComponent />
        <div className='content'>
          <AppointmentDoctorComponent />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default AppointmentPage;
