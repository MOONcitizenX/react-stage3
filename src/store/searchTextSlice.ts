import { createSlice } from '@reduxjs/toolkit';

interface SearchTextState {
  searchText: string;
}

const initialState: SearchTextState = {
  searchText: '',
};

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    changeSearchText(state, action) {
      state.searchText = action.payload;
    },
  },
});

export const { changeSearchText } = searchTextSlice.actions;

export default searchTextSlice.reducer;
