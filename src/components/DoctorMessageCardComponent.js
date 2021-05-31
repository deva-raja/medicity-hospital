import { useDispatch } from 'react-redux';
import ModalComponent from './DoctorModalComponent';
import { getData, openModal } from '../redux/modalSlice';

function CardComponent({ img, data }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(true));
    dispatch(getData(data));
  };
  
  return (
    <>
      <div className='card' onClick={() => handleClick()}>
        <div className='image-wrapper'>
          <img src={img} alt='' />
        </div>
        <div className='info-wrapper'>
          <div className='card-heading'>
            <span>Name - {data.name}</span>
            <div>Age - {data.age}</div>
            <div>Sex - {data.sex}</div>
          </div>
        </div>
      </div>
      <ModalComponent />
    </>
  );
}

export default CardComponent;
