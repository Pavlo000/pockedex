/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../types/Pokemon';

export interface PokemonListState {
  pokemons: Pokemon[];
}

export const initialState: PokemonListState = {
  pokemons: [],
};

export const PokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Pokemon>) => {
      const idOfPokemons = state.pokemons.map(({ id }) => id);
      const hasDublicate = idOfPokemons.includes(action.payload.id);

      if (!hasDublicate) {
        state.pokemons.push(action.payload);
      }
    },
  },
});

export const { setPokemons } = PokemonListSlice.actions;
export default PokemonListSlice.reducer;
