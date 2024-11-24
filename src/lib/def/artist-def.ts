import {Img} from "@/lib/def/common";

export type Artist = {
  id: string
  name: string
  debutDate: string
  status: string
}

export type ArtistDetail = {
  id: string,
  name: string,
  description: string,
  debutDate: string,
  status: string,
  mainImage: Img,
  members: ArtistDetailMember[],
  albums: ArtistDetailAlbum[],
  songs: ArtistDetailSong[],
  mvs: ArtistDetailMv[],
  concerts: ArtistDetailConcert[],
}

export type ArtistDetailMember = {
  id: string,
  name: string,
  image: Img,
}

export type ArtistDetailAlbum = {
  id: string,
  name: string,
  releaseDate: string,
  tags: string[],
  image: Img,
}

export type ArtistDetailSong = {
  id: string,
  album: string,
  title: string,
  lyrics: string,
  composition: string,
  arrangement: string,
  releaseDate: string,
}

export type ArtistDetailMv = {
  id: string,
  url: string,
}

export type ArtistDetailConcert = {
  id: string,
  name: string,
  type: string,
  startDate: string,
  endDate: string,
  image: Img,
}