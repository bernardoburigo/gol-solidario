import type { Jogador } from "../Data/jogadoresData";
import { calcularValorTotal } from "../Utils/valorPorGolUtil";

interface Props {
  titulo: string;
  jogadores: Jogador[];
  tipo: "mes" | "total";
}

export function RankingCard({ titulo, jogadores, tipo }: Props) {
  const ranking = [...jogadores]
    .sort((a, b) => {
      const totalA =
        tipo === "mes"
          ? calcularValorTotal(a.golsNormalMes, a.golsDemoMes)
          : calcularValorTotal(a.golsNormalTotal, a.golsDemoTotal);

      const totalB =
        tipo === "mes"
          ? calcularValorTotal(b.golsNormalMes, b.golsDemoMes)
          : calcularValorTotal(b.golsNormalTotal, b.golsDemoTotal);

      return totalB - totalA;
    })
    .slice(0, 5);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 min-w-full md:min-w-0">
      <h2 className="text-xl font-bold text-green-900 mb-4"> {titulo}</h2>

      <div className="space-y-3">
        {ranking.map((jogador, index) => {
          const golsNormal =
            tipo === "mes" ? jogador.golsNormalMes : jogador.golsNormalTotal;

          const golsDemo =
            tipo === "mes" ? jogador.golsDemoMes : jogador.golsDemoTotal;

          const total = calcularValorTotal(golsNormal, golsDemo);

          return (
            <div
              key={jogador.id}
              className="flex justify-between items-center bg-(--color-bg-main) rounded-xl p-3"
            >
              <div>
                <p className="font-semibold text-(--color-text-primary)">
                  {jogador.nome}
                  {index === 0 && "🥇 "}
                  {index === 1 && "🥈 "}
                  {index === 2 && "🥉 "}
                </p>

                <p className="text-sm text-(--color-text-secondary)">
                  ⚽ {golsNormal} | 🎯 {golsDemo}
                </p>
              </div>

              <span className="font-bold text-yellow-600">
                R$ {total.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
