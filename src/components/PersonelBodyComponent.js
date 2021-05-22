import { useSelector } from 'react-redux';
import AddDoctorComponent from './AddDoctorComponent';
import MessageComponent from './MessageComponent';
import RemoveDoctorComponent from './RemoveDoctorComponent';

function PersonelBodyComponent() {
  const page = useSelector((state) => state.personel.page);

  return (
    <>
      {page === '0' && <AddDoctorComponent />}
      {page === '1' && <RemoveDoctorComponent />}
      {page === '2' && <MessageComponent />}
    </>
  );
}

export default PersonelBodyComponent;
