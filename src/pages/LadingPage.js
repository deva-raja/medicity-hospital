import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import LandingBodyComponent from '../components/LandingBodyComponent';
import ToastComponent from '../components/ToastComponent';
import { messageToast } from '../redux/toastSlice';

toast.configure();
function LadingPage() {
  const disptach = useDispatch();

  const handleClick = () => {
    disptach(messageToast());
  };

  return (
    <div className='landingPage_showcase'>
      <HeaderComponent />
      <LandingBodyComponent />
      <FooterComponent />
      <ToastComponent />
      <button onClick={handleClick}>Notify !</button>
    </div>
  );
}

export default LadingPage;
