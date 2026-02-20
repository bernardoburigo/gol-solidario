export interface FotoInfo {
  url: string
  alt: string
}

export interface FotosData {
  fotoTime: FotoInfo
  fotoArtilheiro: FotoInfo
}

export const fotosData: FotosData = {
  fotoTime: {
    url: "",
    alt: "",
  },
  fotoArtilheiro: {
    url: "/artilheiro-19-02.jpg",
    alt: "Artilheiro da partida",
  },
}
