import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import LandingBodyComponent from '../components/LandingBodyComponent';
import { messageToast } from '../redux/toastSlice';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function LadingPage() {
  const messageSent = useSelector((state) => state.toast.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const openToast = () => {
      toast('Message sent successfully', { autoClose: 2500, hideProgressBar: true });
    };
    messageSent && openToast();
    dispatch(messageToast(false));
  }, [messageSent, dispatch]);

  return (
    <div className='landingPage_showcase'>
      <HeaderComponent />
      <LandingBodyComponent />
      <FooterComponent />
      <ToastContainer />
    </div>
  );
}

export default LadingPage;
