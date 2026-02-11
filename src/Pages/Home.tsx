import { jogadores } from "../Data/jogadoresData";
import { RankingCard } from "../Components/RankingCard";
import { SwipeContainer } from "../Components/SwipeContainer";
import { TotalGeralCard } from "../Components/TotalGeralCard";
import { calcularValorTotal } from "../Utils/valorPorGolUtil";
import { ultimoJogo } from "../Data/jogosData";
import { PlacarCard } from "../Components/PlacarCard";
import FotosSection from "../Components/FotosSection";



export function Home() {
  const totalGeral = jogadores.reduce((acc, jogador) => {
    const totalJogador = calcularValorTotal(
      jogador.golsNormalTotal,
      jogador.golsDemoTotal
    );

    return acc + totalJogador;
  }, 0);

  return (
    <div className="min-h-screen bg-yellow-400 p-6">
      <h1 className="text-4xl font-bold text-center text-green-900 mb-8">
        ⚽ Gol Solidário ⚽
      </h1>

      <TotalGeralCard total={totalGeral} />
      <PlacarCard jogo={ultimoJogo} />
      <FotosSection />

      <div className="mt-10">
        <SwipeContainer>
          <RankingCard
            titulo="Artilheiros do Mês 📆"
            jogadores={jogadores}
            tipo="mes"
          />

          <RankingCard
            titulo="Artilheiros Geral 🏆"
            jogadores={jogadores}
            tipo="total"
          />
        </SwipeContainer>
      </div>
    </div>
  );
}
