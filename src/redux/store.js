import { configureStore } from '@reduxjs/toolkit';
import personelPageSliceReducer from '../redux/personelPageSlice';
import modalReducer from '../redux/modalSlice';
import toastReducer from '../redux/toastSlice';

export default configureStore({
  reducer: {
    personel: personelPageSliceReducer,
    toast: toastReducer,
    modal: modalReducer,
  },
});
