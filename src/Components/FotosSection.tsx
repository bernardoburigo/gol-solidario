import { fotosData } from "../Data/fotosData"
import FotoArtilheiroCard from "./FotoArtilheiroCard";
import FotoTimeCard from "./FotoTimeCard";
import { SwipeContainer } from "./SwipeContainer";

export default function FotosSection() {
  const temFotoTime = !!fotosData.fotoTime?.url;
  const temFotoArtilheiro = !!fotosData.fotoArtilheiro?.url;

  if (!temFotoTime && !temFotoArtilheiro) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8">
      <SwipeContainer>
        {temFotoArtilheiro && <FotoArtilheiroCard />}
        {temFotoTime && <FotoTimeCard />}
      </SwipeContainer>
    </div>
  )
}