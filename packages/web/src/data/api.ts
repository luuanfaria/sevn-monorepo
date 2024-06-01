export const api = async (endpoint: string) => {
  console.log('endpoint: ', endpoint)
  console.log('env: ', process.env.NEXT_PUBLIC_API_URL)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`)

  console.log('res: ', res)
  return res
}