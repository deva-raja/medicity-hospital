import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: false,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    messageToast: (state, action) => {
      state.message = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { messageToast } = toastSlice.actions;
export default toastSlice.reducer;
