export type ItemType = {
  id: number
  name: string
  code: string
}

export const ItemTypes: ItemType[] = [
  {
    id: 1,
    name: 'Videojuegos',
    code: 'videogame',
  },
  {
    id: 2,
    name: 'Consolas de videojuegos',
    code: 'videogame_console'
  },
  {
    id: 3,
    name: 'Libros',
    code: 'book'
  },
  {
    id: 4,
    name: 'Comics',
    code: 'comic'
  }
]

export const getItemTypeLabel = (idItemType: number) => {
  return ItemTypes.find(({ id }) => id === idItemType)?.name + ''
}

export const getItemTypeCode = (idItemType: number) => {
  return ItemTypes.find(({ id }) => id === idItemType)?.code + ''
}