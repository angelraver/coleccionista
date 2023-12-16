import { post, put, del, get } from '@/controllers/requests'
import { type Item } from '@/entities/Item'

const create = async (item: Item) => {
  try {
    await post('/item', item);
  } catch (error) {
    console.error(error);
  }
}

const update =  async (id: number, idUser: number, title: string) => {
  const item = {
    id: id,
    iduser: idUser,
    title: title,
  }
  try {
    await put('/item', item);
  } catch (error) {
    console.error(error);
  }
}

const remove = async (id: number, iduser: number) => {
  try {
    await del('/item', { id, iduser })
  } catch (error) {
    console.error(error);
  }
}

const fetch =  async (
  idUser: number, 
  id: number | null, 
  idCollection: number | null
) => {
  try {
    const data = await get('/item', [idUser + '', id + '', idCollection + ''])
    return data || []
  } catch (error) {
    console.error(error)
  }
}

export const ItemController = { create, update, remove, fetch };