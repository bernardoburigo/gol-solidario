export interface FotoInfo {
  url: string
  alt: string
}

export interface FotosData {
  fotoJogo: FotoInfo
  fotoArtilheiro: FotoInfo
}

export const fotosData: FotosData = {
  fotoJogo: {
    url: "/time-10-02.jpg",
    alt: "Jogadores do Gol Solidário reunidos após a partida",
  },
  fotoArtilheiro: {
    url: "/artilheiro-10-02.jpg",
    alt: "Artilheiro da partida",
  },
}
