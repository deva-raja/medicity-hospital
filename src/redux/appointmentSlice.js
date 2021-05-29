import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctor: true,
  time: false,
};

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.doctor = action.payload.doctor;
      state.time = action.payload.time;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePage } = appointmentSlice.actions;
export default appointmentSlice.reducer;
