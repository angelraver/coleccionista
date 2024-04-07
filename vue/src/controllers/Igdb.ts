import { get } from '@/controllers/requests'

type IgdbGame = {
  id: number,
  name: string,
  first_release_date: number
}

function getYearFromUnixTimestamp(value: number) {
  const timestampInMilliseconds = value * 1000;
  const date = new Date(timestampInMilliseconds);
  const year = date.getFullYear();
  return year;
}

const fetch = async (title: string, idPlatform: number) => {
  try {
    const data = await get('/games', [title, idPlatform + ''])
    return await data.map((g: IgdbGame) => {
      return { 
        id: g.id,
        title: g.name,
        year: getYearFromUnixTimestamp(g.first_release_date)
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export const IgdbController = { fetch }
