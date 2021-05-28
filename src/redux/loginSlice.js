import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginPage: '0',
};

export const loginSlice = createSlice({
  name: 'personel-page',
  initialState,
  reducers: {
    changeLogin: (state, action) => {
      state.loginPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLogin } = loginSlice.actions;
export default loginSlice.reducer;
