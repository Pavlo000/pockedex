/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PokemonItemState {
  selectedPokemon: number;
}

export const initialState: PokemonItemState = {
  selectedPokemon: 0,
};

export const PokemonItemSlice = createSlice({
  name: 'pokemonSelected',
  initialState,
  reducers: {
    selectPokemon: (state, action: PayloadAction<number>) => {
      if (state.selectedPokemon === action.payload) {
        state.selectedPokemon = 0;
      } else {
        state.selectedPokemon = action.payload;
      }
    },
  },
});

export const { selectPokemon } = PokemonItemSlice.actions;
export default PokemonItemSlice.reducer;
