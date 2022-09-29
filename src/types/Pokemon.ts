import { Color } from './Color';

export interface Pokemon {
  name: string;
  types: Types[];
  stats: Stats[];
  weight: number;
  id: number;
  moves: [];
}

interface Types {
  type: { name: keyof typeof Color };
}

interface Stats {
  base_stat: number;
}
