export const API_BASE_URL = process.env.API_BASE_URL

export async function get(url: string) {
  const res = await fetch(url);
  return res.json();
}

export async function post<T>(url: string, data: T){
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  return res.json();
}