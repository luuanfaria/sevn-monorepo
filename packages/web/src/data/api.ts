export const api = async (endpoint: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`)
  return res
}