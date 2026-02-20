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
    url: "/sem-foto-time.jpg",
    alt: "Sem foto de time essa semana!",
  },
  fotoArtilheiro: {
    url: "/artilheiro-19-02.jpg",
    alt: "Artilheiro da partida",
  },
}
