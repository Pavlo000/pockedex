import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loadMoreReducer from '../components/LoadMore/LoadMoreSlice';
import selectedPokemonReducer from '../components/PokemonItem/PokemonItemSlice';
import pokemonsReducer from '../components/PokemonList/PokemonListSlice';

export const store = configureStore({
  reducer: {
    loadMore: loadMoreReducer,
    listOfPokemons: pokemonsReducer,
    selectedPokemon: selectedPokemonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
