import { configureStore } from '@reduxjs/toolkit';
import personelPageSliceReducer from '../redux/personelPageSlice';

export default configureStore({
  reducer: {
    personel: personelPageSliceReducer,
  },
});
