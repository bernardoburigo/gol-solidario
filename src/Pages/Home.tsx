import { jogadores } from "../Data/jogadoresData";
import { RankingCard } from "../Components/RankingCard";
import { SwipeContainer } from "../Components/SwipeContainer";

export function Home() {
  return (
    <div className="min-h-screen bg-(--color-bg-main) p-6">
      <h1 className="text-3xl font-bold text-center text-(--color-primary-green) mb-8">
        ⚽ Gol Solidário
      </h1>

      <SwipeContainer>
        <RankingCard
          titulo="Artilheiros do Mês"
          jogadores={jogadores}
          tipo="mes"
        />

        <RankingCard
          titulo="Artilheiros Geral"
          jogadores={jogadores}
          tipo="total"
        />
      </SwipeContainer>
    </div>
  );
}
