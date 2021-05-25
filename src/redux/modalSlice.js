import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  delete: false,
  data: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = action.payload;
    },
    deleteMsg: (state) => {
      state.delete = !state.delete;
    },
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, deleteMsg, getData } = modalSlice.actions;
export default modalSlice.reducer;
