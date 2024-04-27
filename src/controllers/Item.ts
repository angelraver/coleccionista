import { post, put, del, get, postFile } from '@/controllers/requests'
import { type Item } from '@/entities/Item'

const backup =  async () => {
  try {
    return await get('/itembkp', [])
  } catch (error) {
    console.error(error)
  }
}

const create = async (item: Item) => {
  try {
    return await post('/item', item);
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

const fetchImages =  async (idUser: number, idItem: number) => {
  try {
    const data = await get('/itemimage', [idUser + '', idItem + ''])
    return data || []
  } catch (error) {
    console.error(error)
  }
}

const remove = async (id: number, iduser: number) => {
  try {
    await del('/item', { id, iduser })
  } catch (error) {
    console.error(error);
  }
}

const removeImage = async (name: string, id: number, iduser: number) => {
  try {
    await del('/image', { name, id, iduser })
  } catch (error) {
    console.error(error);
  }
}

const update =  async (
  id: number,
  idUser: number,
  title: string,
  author: string,
  year: number
  ) => {
  const item = {
    id: id,
    iduser: idUser,
    title: title,
    author: author,
    year: year
  }
  try {
    await put('/item', item);
  } catch (error) {
    console.error(error);
  }
}

const uploadImage = async (body: any) => {
  try {
    return await postFile('/upload', body);
  } catch (error) {
    console.error(error);
  }
}


export const ItemController = { backup, create, fetch, fetchImages, remove, removeImage, update, uploadImage };