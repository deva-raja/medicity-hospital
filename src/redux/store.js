import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appointmentReducer from '../redux/appointmentSlice';
import currentDoctorReducer from '../redux/currentDoctorSlice';
import doctorPageReducer from '../redux/doctorPageSlice';
import loginReducer from '../redux/loginSlice';
import modalReducer from '../redux/modalSlice';
import personelPageSliceReducer from '../redux/personelPageSlice';
import searchReducer from '../redux/searchSlice';
import toastReducer from '../redux/toastSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['currentDoctor'],
};

const rootReducer = combineReducers({
  personel: personelPageSliceReducer,
  toast: toastReducer,
  modal: modalReducer,
  login: loginReducer,
  appointmentPage: appointmentReducer,
  doctorPage: doctorPageReducer,
  search: searchReducer,
  currentDoctor: currentDoctorReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
