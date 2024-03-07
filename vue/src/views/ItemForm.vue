<script lang="ts">
import { loggedUser, type Breadcrumb } from '@/controllers/utils'
import { type Collection } from '@/entities/Collection'
import { type Item } from '@/entities/Item'
import { CollectionController } from '@/controllers/Collection'
import { ItemController } from '@/controllers/Item'
import ItemFormGame from '@/components/ItemFormGame.vue'
import ItemFormAny from '@/components/ItemFormAny.vue'
import ItemFormBook from '@/components/ItemFormBook.vue'
import { getItemTypeCode } from '@/entities/ItemType'
import Loading from '@/components/Loading.vue'

export default {
  components: {
    ItemFormGame,
    ItemFormAny,
    ItemFormBook,
    Loading
  },
  data() {
    return {
      breadcrumbs: [] as Breadcrumb[],
      id: parseInt(this.$route.params.id + ''),
      idCollection: parseInt(this.$route.params.idCollection + ''),
      idUser: parseInt(loggedUser()?.id + ''),
      idItemType: 0,
      idPlatform: 0,
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
        this.idPlatform = this.collection.idplatform
        this.code = getItemTypeCode(this.collection.iditemtype)
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
    async refresh(id: number) {
      this.id = id
      this.fetchItem()
    }
  },
  async mounted() {
    this.breadcrumbs= [
      {
        title: 'Colecciones',
        href: '/home',
      },
    ]

    if (this.idCollection) {
      await this.fetchCollection()
      this.breadcrumbs = [
        ...this.breadcrumbs,
        {
          title: this.collection.name,
          href: '/collection/' + this.collection.id
        },
        {
          title: 'Nuevo'
        }
      ]
    }
    if (this.id) {
      await this.fetchItem()
      this.breadcrumbs = [
        ...this.breadcrumbs,
        {
          title: this.nameCollection,
          href: '/collection/' + this.item.idcollection
        },
        {
          title: this.item.title,
          href: '/item/' + this.item.id,
        },
        {
          title: 'Editar'
        }
      ]
    }
  },
}
</script>

<template>
  <Loading v-if="loading" />
  <div v-if="!loading">
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    <ItemFormGame
      v-if="code==='videogame'"
      :id-collection="idCollection"
      :id-user="idUser"
      :id-item-type="idItemType"
      :id-platform="idPlatform"
      :name-collection="nameCollection"
    />
    <ItemFormBook
      v-if="code==='book'"
      :id="item?.id"
      :current-title="item?.title"
      :current-author="item?.author"
      :current-year="item?.year"
      :id-collection="idCollection"
      :id-user="idUser"
      :id-item-type="idItemType"
      :name-collection="nameCollection"
    />
    <ItemFormAny
      v-if="code!=='videogame' && code!=='book'"
      :id="item?.id"
      :current-title="item?.title"
      :id-collection="idCollection"
      :id-user="idUser"
      :id-item-type="idItemType"
      :name-collection="nameCollection"
      @refreshTrigger="refresh"
    />
  </div>
</template>
