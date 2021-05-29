import { useDispatch } from 'react-redux';
import ModalComponent from './ModalComponent';
import { getData, openModal } from '../redux/modalSlice';

function DoctorCardComponent({ img, data }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(true));
    dispatch(getData(data));
  };
  return (
    <>
      <div className='card' onClick={() => handleClick()}>
        <div className='image-wrapper '>
          <img src={img} alt='' className='doctor-img' />
        </div>
        <div className='info-wrapper'>
          <div className='card-heading'>
            <span>Name - {data.name}</span>
            <div>Email - {data.email}</div>
          </div>
          <div className='card-body'>Message - {data.message}</div>
        </div>
      </div>
      <ModalComponent />
    </>
  );
}

export default DoctorCardComponent;
