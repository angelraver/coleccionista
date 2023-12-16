<script lang="ts">
import { loggedUser } from '@/controllers/utils'
import { type Collection } from '@/entities/Collection'
import { type Item } from '@/entities/Item'
import { CollectionController } from '@/controllers/Collection'
import { ItemController } from '@/controllers/Item'
import ItemFormGame from '@/components/ItemFormGame.vue'
import ItemFormAny from '@/components/ItemFormAny.vue'
import { getItemTypeCode } from '@/entities/ItemType'

export default {
  components: {
    ItemFormGame,
    ItemFormAny,
  },
  data() {
    return {
      breadcrumb: [] as string[],
      id: parseInt(this.$route.params.id + ''),
      idCollection: parseInt(this.$route.params.idCollection + ''),
      idUser: parseInt(loggedUser()?.id + ''),
      idItemType: 0,
      nameCollection: '',
      item: {} as Item,
      collection: {} as Collection,
      code: '',
      loading: false,
    }
  },
  methods: {
    async fetchItem() {
      this.loading = true
      try {
        const data = await ItemController.fetch(this.idUser, this.id, null)
        this.item = data[0]
        this.idCollection = this.item.idcollection
        this.idItemType = this.item.iditemtype
        this.nameCollection = this.item.collectionname + ''
        this.code = getItemTypeCode(this.item.iditemtype)
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
    async fetchCollection() {
      this.loading = true
      try {
        const data = await CollectionController.fetch(this.idUser, this.idCollection)
        this.collection = data[0]
        this.idItemType = this.collection.iditemtype
        this.nameCollection = this.collection.name
        this.code = getItemTypeCode(this.collection.iditemtype)
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
  },
  async mounted() {
    if (this.idCollection) {
      await this.fetchCollection()
      this.breadcrumb = ['Colecciones', this.collection.name, 'Item', 'Nuevo']
    }
    if (this.id) {
      await this.fetchItem()
      this.breadcrumb = ['Colecciones', this.nameCollection + '', this.item.title,  'Editar']
    }
  },
}
</script>

<template>
  <v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
  <ItemFormGame
    v-if="code==='videogame'"
    :id-collection="idCollection"
    :id-user="idUser"
    :id-item-type="idItemType"
    :name-collection="nameCollection"
  />
  <ItemFormAny
    v-if="code!=='videogame'"
    :id="item?.id"
    :current-title="item?.title"
    :id-collection="idCollection"
    :id-user="idUser"
    :id-item-type="idItemType"
    :name-collection="nameCollection"
  />
</template>
