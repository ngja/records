import {API_BASE_URL, get} from "@/lib/api/api-config";
import {NoOffsetResponse} from "@/lib/def/common";
import {Person} from "@/lib/def/person-def";

export const personApi = {
  getPersons: async (): Promise<NoOffsetResponse<Person>> => {
    return await get(`${API_BASE_URL}/api/persons`)
  },
}