import { jogadores } from "../Data/jogadoresData";
import { getTopAssistenteMes } from "../Utils/assistenciasUtil";

export default function TopAssistenteCard() {
  const topAssistente = getTopAssistenteMes(jogadores);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-3 mt-6 max-w-md mx-auto">
      <h2 className="text-sm md:text-xl font-bold text-green-800 mb-2 text-center">
        🥇 Top Assistente do Mês 🥇
      </h2>

      <div className="text-center">
        <p className="text-lg md:text-xl font-semibold text-(--color-text-primary)">
          {topAssistente ? topAssistente.nome : "—"}
        </p>

        {topAssistente && (
          <p className="text-sm text-(--color-text-secondary) mt-1 font-semibold">
            🤝 {topAssistente.assistenciasMes} assistências
          </p>
        )}
      </div>
    </div>
  );
}
