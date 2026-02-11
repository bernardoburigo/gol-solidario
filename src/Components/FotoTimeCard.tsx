import { fotosData } from "../Data/fotosData";

interface Props {
  isDesktop?: boolean
}

export default function FotoTimeCard({ isDesktop }: Props) {
  return (
    <div
      className={`
        w-full
        ${isDesktop ? "md:flex-1" : "max-w-md mx-auto"}
      `}
    >
      <div
        className="
          relative
          w-full
          aspect-video
          md:aspect-auto
          md:h-80
          overflow-hidden
          rounded-2xl
          shadow-lg
          border-4 border-green-700
        "
      >
        <img
          src={fotosData.fotoJogo.url}
          alt={fotosData.fotoJogo.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <p className="text-center text-xs md:text-sm mt-2 font-semibold text-green-800">
        Jogadores do Gol Solidário reunidos após a partida
      </p>
    </div>
  );
}
