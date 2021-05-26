import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { messageToast } from '../redux/toastSlice';


function ToastComponent() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.toast.message);

  const notify = () => {
    toast('Message Sent Successfully!', {
      autoClose: 3000,
      hideProgressBar: true,
      position: 'top-right',
    });
    return dispatch(messageToast());
  };

  return <>{message && notify()}</>;
}

export default ToastComponent;
