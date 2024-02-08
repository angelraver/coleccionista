<script lang="ts">
import { loggedUser, type Breadcrumb } from '@/controllers/utils'
import { type Item } from '@/entities/Item'
import { type Collection } from '@/entities/Collection'
import ItemList from '@/components/ItemList.vue'
import { CollectionController } from '@/controllers/Collection'
import { ItemTypes, getItemTypeLabel } from '@/entities/ItemType'
import Loading from '@/components/Loading.vue'

export default {
  components: { ItemList, Loading },
  data() {
    return {
      id: parseInt(this.$route.params.id + ''),
      idUser: parseInt(loggedUser()?.id + ''),
      breadcrumbs: [] as Breadcrumb[],
      loading: true,
      items: [] as Item[],
      collection: {} as Collection,
      itemTypes: ItemTypes,
      itemTypeLabel: '',
      picture: '',
    }
  },
  methods: {
    async fetchCollection() {
      this.loading = true
      try {
        const data = await CollectionController.fetch(this.idUser, this.id)
        this.collection = data[0]
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    }
  },
  async mounted() {
    await this.fetchCollection()
    this.itemTypeLabel = getItemTypeLabel(this.collection.iditemtype)
    this.breadcrumbs= [
      {
        title: 'Colecciones',
        href: '/coleccionista/home',
      },
      {
        title: this.collection.name
      },
    ]
  },
}
</script>

<template>
  <Loading v-if="loading" />
  <div v-if="!loading">
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    <v-container>
      <v-responsive class="text-center">
        <v-row class="d-flex align-center justify-center">
          <v-col>
            <h1 class="text-h4 font-weight-bold text-center">{{ collection.name }}</h1>
            <p class="ma-2">{{ collection.itemscount  }} ítems</p>
            <p class="ma-2">{{ itemTypeLabel }}</p>
            <v-btn
              @click="$router.push({ name: 'ItemNew', params: { idCollection: collection.id }})"
              class="bg-amber mt-2"
            >
              <v-icon icon="mdi-plus" size="large" start />
              Nuevo item
            </v-btn>

          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <ItemList :id-item-type="collection.iditemtype" :id-collection="id" :id-user="idUser" />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <v-btn
              @click="$router.push({ name: 'CollectionEdit', params: { id: collection.id }})"
              class="bg-amber mt-4"
            >
              <v-icon icon="mdi-pencil" size="large" />
                Editar
            </v-btn>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </div>
</template>