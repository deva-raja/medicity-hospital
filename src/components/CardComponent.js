import { useDispatch, useSelector } from 'react-redux';
import { getData, openModal } from '../redux/modalSlice';
import ModalComponent from '../components/ModalComponent';

function CardComponent({ img, data }) {
  const dispatch = useDispatch();
  dispatch(getData(data));

  return (
    <>
      <div className='card' onClick={() => dispatch(openModal(true))}>
        <div className='image-wrapper'>
          <img src={img} alt='' />
        </div>
        <div className='info-wrapper'>
          <div className='card-heading'>
            <span>Name - {data.name}</span>
            <div>Email - {data.email}</div>
          </div>
          <div className='card-body'>Message - {data.message}</div>
        </div>
      </div>
      <ModalComponent data={data} />
    </>
  );
}

export default CardComponent;
