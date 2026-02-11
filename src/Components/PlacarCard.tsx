import type { Jogo } from "../Data/jogosData";

interface Props {
  jogo: Jogo;
}

export function PlacarCard({ jogo }: Props) {
  return (
    <div
      className="
      bg-green-800 text-yellow-200
      rounded-2xl shadow-xl
      px-4 py-6
      max-w-md md:max-w-lg
      mx-auto mt-6
    "
    >
      <h2
        className="
        text-xs md:text-sm
        font-semibold tracking-wide
        opacity-90 text-center
      "
      >
        PARTIDA DIA {jogo.data}
      </h2>

      <div
            className="
                mt-4
                flex items-center justify-center
                gap-2 md:gap-6
                font-bold
                text-base md:text-2xl
                text-center
            "
            >
            <span className="flex-1 text-right">{jogo.timeA}</span>

            <span className="text-yellow-400 px-2 md:px-4 whitespace-nowrap">
            {jogo.golsTimeA}x{jogo.golsTimeB}
            </span>

            <span className="flex-1 text-left">{jogo.timeB}</span>
      </div>
    </div>
  );
}
