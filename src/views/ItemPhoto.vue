<script lang="ts">
import { loggedUser, type Breadcrumb } from '@/controllers/utils'
import { type Item } from '@/entities/Item'
import { ItemController } from '@/controllers/Item'
import Photo from '@/components/Photo.vue'
import Loading from '@/components/Loading.vue'

export default {
  components: { Photo, Loading },
  data() {
    return {
      breadcrumbs: [] as Breadcrumb[],
      id: parseInt(this.$route.params.id + ''),
      idUser: parseInt(loggedUser()?.id + ''),
      item: {} as Item,
      title: '' as string,
      loading: false,
    }
  },
  methods: {
    async fetchItem() {
      this.loading = true
      try {
        const data = await ItemController.fetch(this.idUser, this.id, null)
        this.item = data[0]
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
  },
  async mounted() {
    await this.fetchItem()
    this.title = this.item.title
    this.breadcrumbs= [
      {
        title: 'Colecciones',
        href: '/coleccionista/home',
      },
      {
        title: this.item.collectionname + '',
        href: '/coleccionista/collection/' + this.item.idcollection
      },
      {
        title: this.item.title,
        href: '/coleccionista/item/' + this.item.id,
      },
      {
        title: 'Editar',
        href: '/coleccionista/item/edit/' + this.item.id,
      },
      {
        title: 'Foto'
      }
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
        <v-row justify="center">
          <v-col cols="auto">
            <h1>Tomar foto para {{ title }}</h1>
            <Photo :id-user="idUser" :id-item="id" />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto">
            <v-btn
              @click="$router.push({ name: 'Item', params: { id } })"
              class="bg-gray mt-2"
            >
              <v-icon icon="mdi-cancel" size="large" start />
              Cancelar
            </v-btn>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </div>
</template>
