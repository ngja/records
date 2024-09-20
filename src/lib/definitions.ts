import { z } from "zod";

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