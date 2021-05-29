import { configureStore } from '@reduxjs/toolkit';
import personelPageSliceReducer from '../redux/personelPageSlice';
import modalReducer from '../redux/modalSlice';
import toastReducer from '../redux/toastSlice';
import loginReducer from '../redux/loginSlice';
import appointmentReducer from '../redux/appointmentSlice';
import doctorPageReducer from '../redux/doctorPageSlice';

export default configureStore({
  reducer: {
    personel: personelPageSliceReducer,
    toast: toastReducer,
    modal: modalReducer,
    login: loginReducer,
    appointmentPage: appointmentReducer,
    doctorPage: doctorPageReducer,
  },
});
