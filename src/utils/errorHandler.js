export default async error => {
  if (error.response) return error.response.json()
  if (error.message) return error.message

  return error
}
