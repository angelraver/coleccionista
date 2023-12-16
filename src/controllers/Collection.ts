import { post, put, del, get } from '@/controllers/requests'

const create = async (idUser: number, name: string, idItemType: number) => {
  const postData = {
    iduser:idUser,
    name: name,
    iditemtype: idItemType
  };
  try {
    const result = await post('/collection', postData);
    return result
  } catch (error) {
    console.error(error);
  }
}

const update = async (id: number, idUser: number, name: string) => {
  const putData = {
    id: id,
    iduser: idUser,
    name: name,
  }
  try {
    await put('/collection', putData);
  } catch (error) {
    console.error(error);
  }
}

const remove = async (id: number, idUser: number) => {
  const delData = {
    id: id,
    iduser: idUser
  }

  try {
    await del('/collection', delData)
  } catch (error) {
    console.error(error);
  }
}

const fetch = async (idUser: number, id: number | null) => {
  try {
    const data = await get('/collection', [idUser + '', id + ''])
    return data || []
  } catch (error) {
    console.error(error)
  }
}

export const CollectionController = { create, update, remove, fetch }