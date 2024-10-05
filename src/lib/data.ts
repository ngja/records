import {
  Artist,
  ArtistDetail,
  artistDetailSchema,
  artistSchema, Mv, mvSchema, Performance, performanceSchema,
  Record,
  recordSchema,
  Song,
  songSchema
} from "@/lib/definitions";
import {promises as fs} from "fs";
import path from "path";
import {z} from "zod";

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

export async function getArtist(id: string): Promise<ArtistDetail> {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/db/dummy-artist.json"),
  )
  const artists = JSON.parse(data.toString(), (key, value) => {
    if (key === 'debutDate') {
      return new Date(value);
    }
    return value;
  });
  const artist = z.array(artistDetailSchema).parse(artists).find((artist) => artist.id === id);
  if (artist === null || artist === undefined) {
    throw new Error()
  }
  return artist
}

export async function getRecordByArtist(artistId: string): Promise<Record[]> {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/db/dummy-records.json"),
  )
  const records = JSON.parse(data.toString(), (key, value) => {
    if (key === 'releaseDate') {
      return new Date(value);
    }
    return value;
  })
  return z.array(recordSchema).parse(records)
}

export const dummyCalendarData = [
  {
    "value": 205,
    "day": "2024-06-24"
  },
  {
    "value": 390,
    "day": "2024-05-23"
  },
  {
    "value": 305,
    "day": "2024-04-23"
  },
  {
    "value": 91,
    "day": "2024-07-25"
  },
  {
    "value": 18,
    "day": "2024-06-05"
  },
  {
    "value": 202,
    "day": "2024-05-03"
  },
  {
    "value": 392,
    "day": "2024-08-10"
  }
]

export async function getSongByArtist(artistId: string): Promise<Song[]> {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/db/dummy-songs.json"),
  )
  const records = JSON.parse(data.toString(), (key, value) => {
    if (key === 'releaseDate') {
      return new Date(value);
    }
    return value;
  })
  return z.array(songSchema).parse(records)
}

export async function getMvs(): Promise<Mv[]> {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/db/dummy-mvs.json"),
  )
  const mvs = JSON.parse(data.toString())
  return z.array(mvSchema).parse(mvs)
}

export async function getPerformances(): Promise<Performance[]> {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/db/dummy-performances.json"),
  )
  const performances = JSON.parse(data.toString(), (key, value) => {
    if (key === 'startDate' || key === 'endDate') {
      return new Date(value);
    }
    return value;
  })
  return z.array(performanceSchema).parse(performances)
}