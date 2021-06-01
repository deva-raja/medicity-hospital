import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { getMessage } from '../api/messageApi';
import CardComponent from './MessageCardComponent';
import patientImg from '../images/message.png';
import { useSelector } from 'react-redux';
import RoundSkeletonCard from '../skeletons/SkeletonRoundCard';

Modal.setAppElement('#root');
function MessageComponent() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const deleteMsg = useSelector((state) => state.modal.delete);

  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true);
      const data = await getMessage();
      setMessages(data.message);
      setLoading(false);
    };
    fetchMessage();

    return () => {
      setMessages();
    };
  }, [deleteMsg]);
  console.log(messages);

  return (
    <div className='container'>
      <div className='message'>
        <h2 className='title'>
          messages <span className='sub-title'>(from contact us)</span>
        </h2>
      </div>
      <div className='card-container'>
        {loading && [1, 2, 3, 4, 5].map((n) => <RoundSkeletonCard key={n} />)}
        {messages &&
          messages.map((message) => (
            <CardComponent key={message._id} data={message} img={patientImg} />
          ))}
      </div>
    </div>
  );
}

export default MessageComponent;
