export function api(path: string) {
  const url = `http://localhost:3333/api${path}`
  return fetch(url)
}