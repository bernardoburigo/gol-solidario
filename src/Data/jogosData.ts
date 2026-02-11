export interface Jogo {
  id: number;
  data: string;
  timeA: string;
  timeB: string;
  golsTimeA: number;
  golsTimeB: number;
}

export const ultimoJogo: Jogo = {
  id: 1,
  data: "10/02/2026",
  timeA: "Time A",
  timeB: "Time B",
  golsTimeA: 5,
  golsTimeB: 3,
};
