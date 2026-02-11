const VALOR_GOL_NORMAL = 2.5;
const VALOR_GOL_DEMO = 7.0;

export function calcularValorTotal(
  golsNormal: number,
  golsDemo: number
): number {
  return golsNormal * VALOR_GOL_NORMAL + golsDemo * VALOR_GOL_DEMO;
}
