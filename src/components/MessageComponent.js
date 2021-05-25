import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { getMessage } from '../api/app';
import CardComponent from './CardComponent';

Modal.setAppElement('#root');
function MessageComponent() {
  const [messages, setMessages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchMessage = async () => {
      const data = await getMessage();
      setMessages(data);
    };
    fetchMessage();

    return () => {
      setMessages();
    };
  }, []);

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
  console.log(messages);

  return (
    <div class='container'>
      <div class='message'>
        <h2 class='title'>
          messages <span className='sub-title'>(from contact us)</span>
        </h2>
      </div>
      <div className='card-container'>
        {messages &&
          messages.map((message) => (
            <CardComponent key={message._id} emailDisplay={true} data={message} />
          ))}
      </div>
      {/* <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal style={style} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div>I am a modal</div>
        <button onClick={() => setModalIsOpen(false)}>close</button>
      </Modal> */}
    </div>
  );
}

export default MessageComponent;
