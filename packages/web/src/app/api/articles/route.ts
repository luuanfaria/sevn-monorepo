export async function GET(id: number) {
  const response = await fetch(`http://localhost:3333/api/articles/${id}`)
  const data = await response.json()

  return data
}