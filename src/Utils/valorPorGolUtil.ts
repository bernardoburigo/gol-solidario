import { VALOR_GOL_DEMO, VALOR_GOL_NORMAL } from "../Data/valorPorGolData";

export function calcularValorTotal(
  golsNormal: number,
  golsDemo: number
): number {
  return golsNormal * VALOR_GOL_NORMAL + golsDemo * VALOR_GOL_DEMO;
}
