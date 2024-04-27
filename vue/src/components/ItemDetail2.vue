<script lang="ts">
import { COVER_URL_BIG, MEDIA_URL, type Breadcrumb } from '@/controllers/utils'
import { type Item } from '@/entities/Item'
import { type Image } from '@/entities/Image'
import { type ItemType, getItemTypeLabel } from '@/entities/ItemType'
import { ItemController } from '@/controllers/Item'
import Loading from '@/components/Loading.vue'

export default {
  components: { Loading },
  props: {
    item: {
      type: Object, 
      required: true 
    },
    idUser: {
      type: Number,
      required: true
    },
    idItemType: {
      type: Number, 
      required: true 
    },
  },
  data() {
    return {
      images: [] as Image[],
      loading: false,
      typeLabel: (idItemType: number) => getItemTypeLabel(idItemType),
      coverUrl: COVER_URL_BIG,
      mediaUrl: MEDIA_URL,
    }
  },
  methods: {
    async fetchItemImages() {
      this.loading = true
      try {
        this.images = await ItemController.fetchImages(this.idUser, this.item.id)
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
    goToCollecion() {
      this.$emit('backCollection');
    }
  },
  async mounted() {
    if (this.item) {
      await this.fetchItemImages()
    }
  },
}
</script>

<template>
  <Loading v-if="loading" />
  <div v-if="!loading">
    <v-container>
      <v-responsive class="text-center">
        <v-row class="justify-center">
          <v-col cols="auto">
              <h1>{{ item.title }}</h1>
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
              <h3 v-if="item.author && item.author.length > 0">de {{ item.author }}</h3>
              <p v-if="item.year && item.year > 0">{{ item.year }}</p>
              <p>Colección {{item.collectionname}}</p>
              <p>{{ typeLabel(item.iditemtype) }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="mt-4" @click="goToCollecion()">
              <v-icon icon="mdi-arrow-left" size="large" start />
              Volver a {{item.collectionname}}
            </v-btn>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </div>
</template>
