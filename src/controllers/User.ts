import { get, post } from '@/controllers/requests'

const login = async (user: string, password: string) => {
  const postData = { user, password }
  const data = await post('/login', postData)
  return data
}

const getByName =  async (
  userName: string
) => {
  try {
    const data = await get('/user', [userName])
    return data
  } catch (error) {
    console.error(error)
  }
}

export const UserController = { getByName, login }