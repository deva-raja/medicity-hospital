import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { destroyMessage } from '../api/app';

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

function ModalComponent(data) {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);

  function handleClick(id) {
    const data = destroyMessage(id);
    setModalIsOpen(false);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Modal style={style} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className='modal-container'>
          <h1 className='modal-heading'>Message</h1>
          <div>From - {data.name}</div>
          <div className='email'>Email id - {data.email}</div>
          <div>Respected Hospital Administrator,</div>
          <div class='card-body'>Message : {data.message}</div>
          <button className='modal-btn' onClick={() => handleClick(data._id)}>
            delete message
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ModalComponent;
