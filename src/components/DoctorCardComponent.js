import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { changePage } from '../redux/appointmentSlice';
import { getData } from '../redux/doctorPageSlice';
import { FaPhoneAlt } from 'react-icons/fa';
import { changeName, changeSpeciality } from '../redux/searchSlice';

function DoctorCardComponent({ img, data }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(getData(data));
    dispatch(changePage({ doctor: false, time: true }));
    dispatch(changeName(''));
    dispatch(changeSpeciality(''));
    history.push('/appointment');
  };

  return (
    <>
      <div className='card' onClick={() => handleClick()}>
        <div className='image-wrapper '>
          <img src={img} alt='' className='doctor-img' />
        </div>
        <div className='info-wrapper'>
          <div className='card-heading'>
            <span className='capitalise name'> {data.name} </span>
            <span className='uppercase md'> md </span>
            <div className='capitalise speciality'> {data.speciality}</div>
          </div>
          {data.phoneNumber && (
            <div className='card-phone'>
              <FaPhoneAlt className='phone-icon' />
              <span className='number'>{data.phoneNumber}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DoctorCardComponent;
