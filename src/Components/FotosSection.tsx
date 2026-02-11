import { SwipeContainer } from "../Components/SwipeContainer"
import FotoTimeCard from "./FotoTimeCard"
import FotoArtilheiroCard from "./FotoArtilheiroCard"

export default function FotosSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8">
      <SwipeContainer>
        <FotoTimeCard />
        <FotoArtilheiroCard />
      </SwipeContainer>
    </div>
  )
}
