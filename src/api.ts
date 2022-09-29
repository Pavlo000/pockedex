import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

const wait = new Promise<void>((resolver) => {
  setTimeout(() => {
    resolver();
  }, 500);
});

type Pokemons = <T>(params: string) => Promise<T>;

export const getPokemons: Pokemons = (params) => {
  return wait.then(() => {
    return axios.get(BASE_URL + params).then((pokemons) => pokemons.data);
  });
};
