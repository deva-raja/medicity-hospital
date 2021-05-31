import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import DoctorAppointmentComponent from '../components/DoctorAppointmentComponent';
// needed for toast 
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { messageToast } from '../redux/toastSlice';
import 'react-toastify/dist/ReactToastify.css';

function DoctorPage() {
  const messageSent = useSelector((state) => state.toast.message);
  const messageValue = useSelector((state) => state.toast.messageValue);
  const dispatch = useDispatch();
  useEffect(() => {
    const openToast = () => {
      toast(messageValue, { autoClose: 2500, hideProgressBar: true });
    };
    messageSent && openToast();
    dispatch(messageToast(false));
  }, [messageSent, dispatch, messageValue]);
  return (
    <>
      <div className='doctorPage_showcase defaultPage_showcase'>
        <HeaderComponent />
        <div className='content'>
          <DoctorAppointmentComponent />
        </div>
        <FooterComponent />
        <ToastContainer />
      </div>
    </>
  );
}

export default DoctorPage;
