export const API_URL = import.meta.env.VITE_API_URL

export async function get(path: string, params: (string | null)[]) {
  let route = `${API_URL}${path}`
  params.forEach(function (qparam){
    route = `${route}/${qparam}`
  })
  const res = await fetch(route, { method: "get" })
  const data = await res.json();
  return data
}

export async function post(path: string, body: object) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  const data = await res.json();
  return data
}

export async function put(path: string, body: object) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  const data = await res.json();
  return data
}

export async function del(path: string, body: object) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  const data = await res.json();
  return data
}