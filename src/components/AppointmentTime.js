import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { changePage } from '../redux/appointmentSlice';
import { getData } from '../redux/doctorPageSlice';
import { FaPhoneAlt } from 'react-icons/fa';

function AppointmentTime() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    // dispatch(getData(data));
    dispatch(changePage({ doctor: true, time: false }));
    history.push('/appointment');
  };

  return (
    <div>
      time
      <button onClick={() => handleClick()}>change</button>
    </div>
  );
}

export default AppointmentTime;
