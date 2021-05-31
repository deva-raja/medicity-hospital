import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: false,
  messageValue: '',
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    messageToast: (state, action) => {
      state.message = action.payload;
    },
    setMessageToastValue: (state, action) => {
      state.messageValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { messageToast, setMessageToastValue } = toastSlice.actions;
export default toastSlice.reducer;
