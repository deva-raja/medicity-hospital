import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import AppointmentDoctorComponent from '../components/AppointmentDoctorComponent';
import AppointmentTime from '../components/AppointmentTime';
import { useSelector } from 'react-redux';

function AppointmentPage() {
  const appointmentPage = useSelector((state) => state.appointmentPage);
  const { doctor, time } = appointmentPage;
  console.log(appointmentPage);

  return (
    <>
      <div className='appointmentPage_showcase defaultPage_showcase'>
        <HeaderComponent />
        <div className='content'>
          {doctor === true && <AppointmentDoctorComponent text='Find a Doctor' />}
          {time === true && <AppointmentTime />}
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default AppointmentPage;
