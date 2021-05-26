import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { getMessage } from '../api/app';
import CardComponent from './CardComponent';
import patientImg from '../images/patient_filler.jpg';
import { useSelector } from 'react-redux';

Modal.setAppElement('#root');
function MessageComponent() {
  const [messages, setMessages] = useState([]);
  const deleteMsg = useSelector((state) => state.modal.delete);

  useEffect(() => {
    const fetchMessage = async () => {
      const data = await getMessage();
      setMessages(data);
    };
    fetchMessage();

    return () => {
      setMessages();
    };
  }, [deleteMsg]);

  return (
    <div className='container'>
      <div className='message'>
        <h2 className='title'>
          messages <span className='sub-title'>(from contact us)</span>
        </h2>
      </div>
      <div className='card-container'>
        {messages &&
          messages.map((message) => (
            <CardComponent key={message._id} data={message} img={patientImg} />
          ))}
      </div>
    </div>
  );
}

export default MessageComponent;
