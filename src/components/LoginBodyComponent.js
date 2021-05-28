import { useSelector } from 'react-redux';
import AdminLoginComponent from './AdminLoginComponent';
import DoctorLoginComponent from './DoctorLoginComponent';

function LoginBodyComponent() {
  const login = useSelector((state) => state.login.loginPage);
  return (
    <>
      {login === '0' && <DoctorLoginComponent />}
      {login === '1' && <AdminLoginComponent />}
    </>
  );
}

export default LoginBodyComponent;
