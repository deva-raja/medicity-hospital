import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  message: false,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    messageToast: (state, action) => {
      toast('hello', { autoClose: 2000, hideProgressBar: true });
    },
  },
});

// Action creators are generated for each case reducer function
export const { messageToast } = toastSlice.actions;
export default toastSlice.reducer;
