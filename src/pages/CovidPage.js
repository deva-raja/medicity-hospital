import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import AppointmentDoctorComponent from '../components/AppointmentDoctorComponent';
import { changeSpeciality, changeName, search } from '../redux/searchSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function CovidPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeName(''));
    dispatch(changeSpeciality('vaccination'));
    dispatch(search());
    return () => {
      dispatch(changeSpeciality(''));
    };
  }, [dispatch]);

  return (
    <>
      <div className='covidPage_showcase appointmentPage_showcase defaultPage_showcase'>
        <HeaderComponent />
        <div className='content'>
          <AppointmentDoctorComponent text='Covid Vaccination' />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
export default CovidPage;
