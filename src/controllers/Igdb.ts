import { get } from '@/controllers/requests'

const fetch = async (title: string) => {
  try {
    const data = await get('/games', [title])
    return await data.map((g: {id: number, name: string}) => {
      return { id: g.id, title: g.name,  }
    })
  } catch (error) {
    console.error(error)
  }
}

export const IgdbController = { fetch }
