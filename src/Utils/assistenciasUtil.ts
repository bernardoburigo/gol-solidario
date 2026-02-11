import type { Jogador } from "../Data/jogadoresData";

export function getTopAssistenteMes(jogadores: Jogador[]): Jogador | null {
  if (!jogadores.length) return null;

  const ordenado = [...jogadores].sort(
    (a, b) => b.assistenciasMes - a.assistenciasMes
  );

  if (ordenado[0].assistenciasMes === 0) return null;

  return ordenado[0];
}
