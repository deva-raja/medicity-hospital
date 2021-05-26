import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import LandingBodyComponent from '../components/LandingBodyComponent';
import { messageToast } from '../redux/toastSlice';

toast.configure();
function LadingPage() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(messageToast());
  };

  return (
    <div className='landingPage_showcase'>
      <HeaderComponent />
      <LandingBodyComponent />
      <FooterComponent />
      <ToastContainer />
      <button onClick={handleClick}>Notify !</button>
    </div>
  );
}

export default LadingPage;
