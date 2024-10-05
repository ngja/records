import {string, z} from "zod";

export type Artist = {
  id: string
  name: string
  debutDate: Date
  status: "ready" | "promoting" | "breakup"
}

export const artistSchema = z.object({
  id: z.string(),
  name: z.string(),
  debutDate: z.date(),
  status: z.enum(['ready', 'promoting', 'breakup']),
})

export type Img = {
  width: number,
  height: number,
  url: string,
}

export const imageSchema = z.object({
  width: z.number(),
  height: z.number(),
  url: z.string(),
})

export type ArtistDetail = {
  id: string
  name: string
  description: string
  debutDate: Date
  status: "ready" | "promoting" | "breakup"
  mainImage: Img
  members: Member[]
}

export type Member = {
  id: string
  name: string
  image: Img
}

export const memberSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: imageSchema,
})

export const artistDetailSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  debutDate: z.date(),
  status: z.enum(['ready', 'promoting', 'breakup']),
  mainImage: imageSchema,
  members: z.array(memberSchema)
})

export type Record = {
  id: string
  artistId: string
  artist: string
  name: string
  releaseDate: Date
  tag: string[]
  image: Img
}

export const recordSchema = z.object({
  id: z.string(),
  artistId: z.string(),
  artist: z.string(),
  name: z.string(),
  releaseDate: z.date(),
  tag: z.array(z.string()),
  image: imageSchema,
})

export type Song = {
  id: string
  artistId: string
  artist: string
  record: string
  title: string
  lyrics: string
  composition: string
  arrangement: string
  releaseDate: Date
}

export const songSchema = z.object({
  id: z.string(),
  artistId: z.string(),
  artist: z.string(),
  record: z.string(),
  title: z.string(),
  lyrics: z.string(),
  composition: z.string(),
  arrangement: z.string(),
  releaseDate: z.date(),
})

export type Mv = {
  id: string
  artist: string
  url: string
}

export const mvSchema = z.object({
  id: z.string(),
  artist: z.string(),
  url: z.string(),
})

export type Performance = {
  id: string
  name: string
  type: 'concert' | 'fanevent'
  startDate: Date
  endDate: Date
  image: Img
}

export const performanceSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  image: imageSchema
})