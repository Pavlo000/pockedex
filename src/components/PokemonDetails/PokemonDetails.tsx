import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { Color } from '../../types/Color';
import { Pokemon } from '../../types/Pokemon';
import { Stat } from '../../types/Stat';

import './PokemonDetails.scss';

export const PokemonDetails: React.FC = () => {
  const selectedPokemonId = useAppSelector(
    (state) => state.selectedPokemon.selectedPokemon,
  );
  const pokemons = useAppSelector((state) => state.listOfPokemons.pokemons);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const selected = pokemons.find(({ id }) => {
      if (selectedPokemonId === id) {
        return true;
      }

      return false;
    });

    setPokemon(selected || null);
  }, [selectedPokemonId]);

  return (
    <table className="PokemonDetails">
      {selectedPokemonId > 0 && (
        <tbody>
          <tr>
            <th className="PokemonDetails__cell">Type</th>
            <td className="PokemonDetails__cell PokemonDetails__cell--type">
              {pokemon?.types.map(({ type }) => (
                <p
                  key={type.name}
                  className="PokemonDetails__value--type"
                  style={{
                    backgroundColor: Color[type.name],
                  }}
                >
                  {type.name}
                </p>
              ))}
            </td>
          </tr>

          <tr>
            <th className="PokemonDetails__cell">Attack</th>
            <td className="PokemonDetails__cell">
              {pokemon?.stats[Stat.attack].base_stat}
            </td>
          </tr>

          <tr>
            <th className="PokemonDetails__cell">Defense</th>
            <td className="PokemonDetails__cell">
              {pokemon?.stats[Stat.defense].base_stat}
            </td>
          </tr>

          <tr>
            <th className="PokemonDetails__cell">HP</th>
            <td className="PokemonDetails__cell">
              {pokemon?.stats[Stat.hp].base_stat}
            </td>
          </tr>

          <tr>
            <th className="PokemonDetails__cell">SP Attack</th>
            <td className="PokemonDetails__cell">
              {pokemon?.stats[Stat.spattack].base_stat}
            </td>
          </tr>

          <tr>
            <th className="PokemonDetails__cell">SP Defense</th>
            <td className="PokemonDetails__cell">
              {pokemon?.stats[Stat.spdefense].base_stat}
            </td>
          </tr>

          <tr>
            <th className="PokemonDetails__cell">Speed</th>
            <td className="PokemonDetails__cell">
              {pokemon?.stats[Stat.speed].base_stat}
            </td>
          </tr>

          <tr>
            <th className="PokemonDetails__cell">Weight</th>
            <td className="PokemonDetails__cell">{pokemon?.weight}</td>
          </tr>

          <tr>
            <th className="PokemonDetails__cell">Total moves</th>
            <td className="PokemonDetails__cell">{pokemon?.moves.length}</td>
          </tr>
        </tbody>
      )}
    </table>
  );
};
