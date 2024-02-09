<script lang="ts">
import { loggedUser, COVER_URL_BIG, MEDIA_URL, type Breadcrumb } from '@/controllers/utils'
import { type Item } from '@/entities/Item'
import { type Image } from '@/entities/Image'
import { type ItemType, getItemTypeLabel } from '@/entities/ItemType'
import ModalConfirm from '@/components/ModalConfirm.vue'
import { ItemController } from '@/controllers/Item'
import Loading from '@/components/Loading.vue'

export default {
  components: { ModalConfirm, Loading },
  data() {
    return {
      breadcrumbs: [] as Breadcrumb[],
      id: parseInt(this.$route.params.id + ''),
      idUser: parseInt(loggedUser()?.id + ''),
      item: {} as Item,
      collection: {} as ItemType,
      images: [] as Image[],
      loading: false,
      typeLabel: (idItemType: number) => getItemTypeLabel(idItemType),
      coverUrl: COVER_URL_BIG,
      mediaUrl: MEDIA_URL,
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
        this.fetchItemImages()
      }
    },
    async fetchItemImages() {
      this.loading = true
      try {
        this.images = await ItemController.fetchImages(this.idUser, this.id)
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
    async del() {
      this.loading = true
      try {
        await ItemController.remove(this.id, this.idUser)
        this.$router.push({ name: 'CollectionDetail', params: { id: this.item.idcollection }})
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
  },
  async mounted() {
    await this.fetchItem()
    this.breadcrumbs= [
      {
        title: 'Colecciones',
        href: '/home',
      },
      {
        title: this.item.collectionname + '',
        href: '/collection/' + this.item.idcollection,
      },
      {
        title: this.item.title
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
        <v-row class="justify-center">
          <v-col cols="auto">
            <v-card class="pl-4 pr-4 pb-4">
              <h1 class="mt-4">{{ item.title }}</h1>
              <h2 v-if="item.author && item.author.length > 0">de {{ item.author }}</h2>
              <p v-if="item.year && item.year > 0">{{ item.year }}</p>
              <p>Colección {{item.collectionname}}</p>
              <p>{{ typeLabel(item.iditemtype) }}</p>
              <v-img
                v-if="item.cover"
                :width="400"
                aspect-ratio="1/1"
                cover
                :src="coverUrl + item.cover"
              />
              <v-card v-for="(image, i) in images" :key="i" class="pa-2 ma-2">
                <v-img
                  :width="400"
                  :src="`${mediaUrl}/${image.name}`"
                />
              </v-card>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto">
            <span v-show="item.idigdb">
              <ModalConfirm 
                buttonOpenText="Eliminar" 
                buttonOkText="Eliminar"
                buttonKoText="Cancelar"
                title="Confirma que deseas eliminar"
                :description="`El item ${item.title} será eliminado de la colección ${item.collectionname}.`"
                @agree="del"
              />
            </span>
            <v-btn v-show="!item.idigdb"
              @click="$router.push({ name: 'ItemEdit', params: { id: id }})"
              class="bg-amber ma-2"
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
