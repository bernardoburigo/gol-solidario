export interface Jogo {
  id: number;
  data: string;
  timeA: string;
  timeB: string;
  golsTimeBranco: number;
  golsTimePreto: number;
}

export const ultimoJogo: Jogo = {
  id: 1,
  data: "19/02/2026",
  timeA: "Time Branco",
  timeB: "Time Preto",
  golsTimeBranco: 9,
  golsTimePreto: 5,
};
