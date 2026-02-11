export interface Jogador {
  id: number;
  nome: string;
  golsNormalMes: number;
  golsDemoMes: number;
  golsNormalTotal: number;
  golsDemoTotal: number;
}

export const jogadores: Jogador[] = [
  {
    id: 1,
    nome: "Lucas",
    golsNormalMes: 4,
    golsDemoMes: 1,
    golsNormalTotal: 15,
    golsDemoTotal: 5,
  },
  {
    id: 2,
    nome: "Rafael",
    golsNormalMes: 2,
    golsDemoMes: 3,
    golsNormalTotal: 10,
    golsDemoTotal: 7,
  },
  {
    id: 3,
    nome: "Pedro",
    golsNormalMes: 6,
    golsDemoMes: 0,
    golsNormalTotal: 20,
    golsDemoTotal: 2,
  },
];
