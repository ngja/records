import {API_BASE_URL, get} from "@/lib/api/api-config";
import {NoOffsetResponseWrapper} from "@/lib/def/common";
import {Person} from "@/lib/def/person-def";

export const personApi = {
  getPersons: async (): Promise<NoOffsetResponseWrapper<Person>> => {
    return await get(`${API_BASE_URL}/api/persons`)
  },
}