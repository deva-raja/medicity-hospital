import { configureStore } from '@reduxjs/toolkit';
import personelPageSliceReducer from '../redux/personelPageSlice';
import modalReducer from '../redux/modalSlice';

export default configureStore({
  reducer: {
    personel: personelPageSliceReducer,
    modal: modalReducer,
  },
});
