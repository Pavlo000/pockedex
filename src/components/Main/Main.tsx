import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { PokemonDetails } from '../PokemonDetails';
import { PokemonItem } from '../PokemonItem';
import { PockemonList } from '../PokemonList';

import './Main.scss';

export const Main: React.FC = () => {
  const pokemons = useAppSelector((state) => state.listOfPokemons.pokemons);
  const selectedPokemonId = useAppSelector(
    (state) => state.selectedPokemon.selectedPokemon,
  );

  const selectedPokemon = pokemons.find((pokemon) => {
    return pokemon.id === selectedPokemonId;
  });

  const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  const useCurrentWidth = () => {
    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
      const resizeListener = () => {
        setWidth(getWidth());
      };

      window.addEventListener('resize', resizeListener);

      return () => {
        window.removeEventListener('resize', resizeListener);
      };
    }, []);

    return width;
  };

  const currentWidth = useCurrentWidth() > 800;

  return (
    <main className="Main">
      <PockemonList />

      {currentWidth && selectedPokemon && (
        <div className="big-size">
          <PokemonItem pokemon={selectedPokemon} selected>
            <PokemonDetails />
          </PokemonItem>
        </div>
      )}
    </main>
  );
};
