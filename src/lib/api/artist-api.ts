import {NoOffsetResponseWrapper, ResponseWrapper} from "@/lib/def/common";
import {Artist, ArtistDetail} from "../def/artist-def";
import {API_BASE_URL, get} from "@/lib/api/api-config";

export const artistApi = {
  getArtist: async (): Promise<NoOffsetResponseWrapper<Artist>> => {
    return await get(`${API_BASE_URL}/api/artists`);
  },
  getArtistDetail: async (artistId: string): Promise<ResponseWrapper<ArtistDetail>> => {
    return await get(`${API_BASE_URL}/api/artists/${artistId}`);
  }
}