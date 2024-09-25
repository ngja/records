import {z} from "zod";

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
  image: z.object({
    width: z.number(),
    height: z.number(),
    url: z.string(),
  }),
})

export const artistDetailSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  debutDate: z.date(),
  status: z.enum(['ready', 'promoting', 'breakup']),
  mainImage: z.object({
    width: z.number(),
    height: z.number(),
    url: z.string(),
  }),
  members: z.array(memberSchema)
})