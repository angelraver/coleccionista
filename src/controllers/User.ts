import { post } from '@/controllers/requests'

const login = async (user: string, password: string) => {
  const postData = { user, password }
  const data = await post('/login', postData)
  return data
}

export const UserController = { login }