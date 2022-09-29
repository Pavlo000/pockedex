/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface LoadMoreState {
  more: number;
}

export const initialState: LoadMoreState = {
  more: 1,
};

export const loadMoreSlice = createSlice({
  name: 'pokemonSelected',
  initialState,
  reducers: {
    loadMore: (state) => {
      state.more += 1;
    },
  },
});

export const { loadMore } = loadMoreSlice.actions;
export default loadMoreSlice.reducer;
