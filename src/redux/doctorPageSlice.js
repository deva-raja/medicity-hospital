import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const doctorPageSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getData } = doctorPageSlice.actions;
export default doctorPageSlice.reducer;
