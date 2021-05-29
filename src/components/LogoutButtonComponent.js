import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function LogoutButtonComponent() {
  const history = useHistory();

  const handleLogOut = async () => {
    localStorage.clear();
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
