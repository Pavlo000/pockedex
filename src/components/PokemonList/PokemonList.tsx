import { useEffect, useState } from 'react';
import { getPokemons } from '../../api';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Pokemon } from '../../types/Pokemon';
import { Loading } from '../Loading';
import { LoadMore } from '../LoadMore';
import { PokemonItem } from '../PokemonItem';

import './PokemonList.scss';
import { setPokemons } from './PokemonListSlice';

export const PockemonList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const more = useAppSelector((state) => state.loadMore.more);
  const pokemons = useAppSelector((state) => state.listOfPokemons.pokemons);

  useEffect(() => {
    setLoading(true);
    const startPokemon = 20 * more - 19;
    const endPokemon = 20 * more;

    for (let i = startPokemon; i <= endPokemon; i += 1) {
      getPokemons<Pokemon>(`pokemon/${i}`)
        .then((pokemonFromServer) => {
          const newPokemon = {
            name: pokemonFromServer.name,
            types: pokemonFromServer.types,
            id: pokemonFromServer.id,
            stats: pokemonFromServer.stats,
            weight: pokemonFromServer.weight,
            moves: pokemonFromServer.moves,
          };

          dispatch(setPokemons(newPokemon));
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [setPokemons, more]);

  return (
    <div className="PokemonList">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ul className="PokemonList__list">
            {pokemons.map((pokemon) => (
              <PokemonItem pokemon={pokemon} key={pokemon.id} />
            ))}
          </ul>

          <div className="PokemonList__button">
            <LoadMore />
          </div>
        </>
      )}
    </div>
  );
};
