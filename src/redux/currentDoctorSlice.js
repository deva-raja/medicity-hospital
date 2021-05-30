import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
};

export const currentDoctorSlice = createSlice({
  name: 'current-doctor',
  initialState,
  reducers: {
    setDoctorId: (state, action) => {
      state.id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDoctorId } = currentDoctorSlice.actions;
export default currentDoctorSlice.reducer;
