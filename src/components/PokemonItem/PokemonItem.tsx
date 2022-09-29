import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Color } from '../../types/Color';
import { Pokemon } from '../../types/Pokemon';

import './PokemonItem.scss';
import { selectPokemon } from './PokemonItemSlice';

type Props = {
  pokemon: Pokemon;
  selected?: boolean;
  children?: React.ReactNode;
};

export const PokemonItem: React.FC<Props> = ({
  selected,
  pokemon,
  children,
}) => {
  const dispath = useAppDispatch();

  const selectedPokemonId = useAppSelector(
    (state) => state.selectedPokemon.selectedPokemon,
  );
  const normalizeName
    = pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1);

  return (
    <label htmlFor={!selected ? pokemon.name : ''}>
      <div className="PokemonItem">
        <div className="PokemonItem__photo-box">
          <div
            className="
            PokemonItem__photo-diagonal
            PokemonItem__photo-diagonal--1
          "
          />
          <div
            className="
            PokemonItem__photo-diagonal
            PokemonItem__photo-diagonal--2
          "
          />
        </div>

        <h4 className="PokemonItem__name">
          {normalizeName}
          {children && ` #${`${pokemon.id}`.padStart(3, '0')}`}
        </h4>

        {selectedPokemonId !== pokemon.id && (
          <ul className="PokemonItem__types">
            {pokemon.types.map(({ type }) => (
              <li
                style={{
                  backgroundColor: Color[type.name],
                }}
                key={type.name}
                className="PokemonItem__type"
              >
                {type.name}
              </li>
            ))}
          </ul>
        )}

        {selectedPokemonId === pokemon.id && (
          <p className="PokemonItem__selected">Selected</p>
        )}

        <input
          className="PokemonItem__input"
          type="checkbox"
          id={pokemon.name}
          checked={selectedPokemonId === pokemon.id}
          onChange={() => dispath(selectPokemon(pokemon.id))}
          hidden
        />

        {children}
      </div>
    </label>
  );
};
