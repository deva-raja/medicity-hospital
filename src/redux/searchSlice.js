import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   name: '',
   speciality: '',
   search: false,
   typing: false,
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
      changeTyping: (state, action) => {
         state.typing = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { changeName, changeSpeciality, search, changeTyping } = searchSlice.actions;
export default searchSlice.reducer;
