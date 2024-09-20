import {Artist, artistSchema} from "@/lib/definitions";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

export async function getArtists(): Promise<Artist[]> {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/db/dummy-artists.json"),
  )
  const artists = JSON.parse(data.toString(), (key, value) => {
    if (key === 'debutDate') {
      return new Date(value);
    }
    return value;
  });
  return z.array(artistSchema).parse(artists)
}