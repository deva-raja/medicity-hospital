import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = !state.open;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal } = modalSlice.actions;
export default modalSlice.reducer;
