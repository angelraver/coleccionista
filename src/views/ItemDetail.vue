<script lang="ts">
import { loggedUser, get } from '@/utils'
import { type Item } from '@/entities/Item'
import { type ItemType } from '@/entities/ItemType'

export default {
  data() {
    return {
      breadcrumb: [] as string[],
      id: parseInt(this.$route.params.id + ''),
      idCollection: parseInt(this.$route.params.idCollection + ''),
      idUser: loggedUser()?.id + '',
      item: {} as Item,
      collection: {} as ItemType,
      loading: false,
    }
  },
  methods: {
    async fetchItem() {
      this.loading = true
      try {
        const data = await get('/item', [this.idUser + '', this.id + '', this.idCollection + ''])
        this.item = data[0]
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
        const data = await get('/itemtype', [this.idUser + '', this.idCollection + ''])
        this.collection = data[0]
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
  },
  async mounted() {
    await this.fetchCollection()
    await this.fetchItem()
    this.breadcrumb = ['Colecciones', this.collection.name, 'Item', this.item.title]
  },
}
</script>

<template>
  <v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
  <v-container>
    <v-responsive class="text-center">
      <v-row class="justify-center">
        <v-col cols="auto">
          <v-card
            width="400"
            :title="item.title"
            :subtitle="collection.name"
            text="."
          ></v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn
            @click="$router.push({ name: 'ItemEdit', params: { id: id }})"
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
