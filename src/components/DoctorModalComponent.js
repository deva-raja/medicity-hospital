import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { deleteMsg, openModal } from '../redux/modalSlice';
import { destroyAppointments } from '../api/appointmentApi';

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '140px',
    left: '140px',
    right: '140px',
    bottom: '140px',
    border: '1px solid #ccc',
    background: 'rgb(42, 42, 42)',
    color: 'white',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
};

function DoctorModalComponent() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  const data = useSelector((state) => state.modal.data);

  async function handleClick(id) {
    await destroyAppointments(id);
    dispatch(deleteMsg());
    dispatch(openModal(false));
  }

  console.log(data);
  return (
    <>
      <Modal style={style} isOpen={open} onRequestClose={() => dispatch(openModal(false))}>
        <div className='modal-container doctor-modal-card'>
          <h1 className='doctor-modal-heading'>Patient Information Sheet</h1>
          <div>Patient Name - {data.name}</div>
          <div>age - {data.age}</div>
          <div>Sex - {data.sex}</div>
          <div>Appointment date - {data.date}</div>
          <div>Appointment time - {data.time}</div>
          {data.conditions && (
            <div className='card-body'>Medical Conditions - {data.conditions}</div>
          )}
          <button className='modal-btn' onClick={() => handleClick(data._id)}>
            checkup complete
          </button>
        </div>
      </Modal>
    </>
  );
}

export default DoctorModalComponent;
