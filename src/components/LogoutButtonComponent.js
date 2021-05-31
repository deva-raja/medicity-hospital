import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { messageToast, setMessageToastValue } from '../redux/toastSlice';

function LogoutButtonComponent() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    localStorage.clear();
    dispatch(messageToast(true));
    dispatch(setMessageToastValue('Successfully logged out'));
    history.push('/');
  };

  return (
    <>
      <Link to='/' onClick={handleLogOut} className='logout'>
        logout
      </Link>
    </>
  );
}

export default LogoutButtonComponent;
