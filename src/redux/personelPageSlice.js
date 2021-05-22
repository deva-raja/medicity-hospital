import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: '0',
};

export const personelPageSlice = createSlice({
  name: 'personel-page',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePage } = personelPageSlice.actions;
export default personelPageSlice.reducer;
