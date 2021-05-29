import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  speciality: '',
  search: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeSpeciality: (state, action) => {
      state.speciality = action.payload;
    },
    search: (state) => {
      state.search = !state.search;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeName, changeSpeciality, search } = searchSlice.actions;
export default searchSlice.reducer;
