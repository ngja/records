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

type Img = {
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
}

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
  })
})