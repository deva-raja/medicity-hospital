import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { destroyMessage } from '../api/app';
import { deleteMsg, openModal } from '../redux/modalSlice';

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
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
};

function ModalComponent() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  const data = useSelector((state) => state.modal.data);

  async function handleClick(id) {
    const deletedMsg = await destroyMessage(id).then(() => {
      dispatch(deleteMsg());
      dispatch(openModal(false));
    });
    console.log(deletedMsg);
  }

  return (
    <>
      <Modal style={style} isOpen={open} onRequestClose={() => dispatch(openModal(false))}>
        <div className='modal-container'>
          <h1 className='modal-heading'>Message</h1>
          <div>From - {data.name}</div>
          <div className='email'>Email id - {data.email}</div>
          <div>Respected Hospital Administrator,</div>
          <div className='card-body'>Message : {data.message}</div>
          <button className='modal-btn' onClick={() => handleClick(data._id)}>
            delete message
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ModalComponent;
