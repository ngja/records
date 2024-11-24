import {SelectFormItem, selectFormItemSchema} from "@/lib/definitions";
import {promises as fs} from "fs";
import path from "path";
import {z} from "zod";


export async function getCountrySelectItems(): Promise<SelectFormItem[]> {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/db/dummy-country-select-items.json"),
  )
  const countrySelectItems = JSON.parse(data.toString())
  return z.array(selectFormItemSchema).parse(countrySelectItems)
}