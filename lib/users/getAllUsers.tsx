

export default async function getAllUsers() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if(!res.ok)
        throw new Error('Ops!! Error Fetching User')

  return res.json()
}
