<script lang="ts">
import { get, loggedUser } from '@/utils'
import { type Item } from '@/entities/Item'
import { type ItemType } from '@/entities/ItemType'
import ItemList from '@/components/ItemList.vue'

export default {
  components: {
    ItemList
  },
  data() {
    return {
      showList: true,
      showForm: false,
      loading: false,
      items: [] as Item[],
      collection: {} as ItemType,
      id: this.$route.params.id + '',
      idUser: loggedUser()?.id + ''
    }
  },
  methods: {
    async fetchCollection() {
      this.loading = true
      try {
        const data = await get('/itemtype', [this.idUser, this.id])
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
  },
}
</script>

<template>
  <v-breadcrumbs :items="['Colecciones', collection.name]"></v-breadcrumbs>

  <v-container>
    <v-responsive class="text-center">
      <v-row class="d-flex align-center justify-center">
        <v-col>
          <h1 class="text-h4 font-weight-bold text-center">{{ collection.name }} ({{ collection.itemscount  }})</h1>

          <v-btn
            @click="$router.push({ name: 'ItemNew', params: { idCollection: collection.id }})"
            class="bg-green mt-4"
          >
            <v-icon icon="mdi-plus" size="large" start />
            Nuevo item
          </v-btn>

        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <ItemList :id-collection="id" :id-user="idUser" />
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
</template>