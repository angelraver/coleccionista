<script lang="ts">
import { type Image } from '@/entities/Image'
import ModalConfirm from '@/components/ModalConfirm.vue'
import { ItemController } from '@/controllers/Item'
import { MEDIA_URL } from '@/controllers/utils'

export default {
  props: {
    idUser: {
      type: Number,
      required: true,
    },
    idItem: {
      type: Number,
      required: true,
    },
  },
  components: {
    ModalConfirm
  },
  data() {
    return {
      images: [] as Image[],
      loading: false,
      mediaUrl: MEDIA_URL,
    }
  },
  methods: {
    async fetchItemImages() {
      this.loading = true
      try {
        this.images = await ItemController.fetchImages(this.idUser, this.idItem)
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
    async del(image: Image) {
      this.loading = true
      try {
        await ItemController.removeImage(image.name, image.id, this.idUser)
      } catch (error) {
        console.error(error);
      }
      finally {
        await this.fetchItemImages()
        this.loading = false
      }
    },
  },
  async mounted() {
    await this.fetchItemImages()
  }
}
</script>

<template>
  <v-container>
    <v-responsive class="text-center">
      <v-row class="justify-center">
        <v-col cols="auto">
          <v-card v-for="(image, i) in images" :key="i" class="pa-2 ma-2">
            <v-img
              :width="400"
              :src="`${mediaUrl}/${image.name}`"
            />
            <ModalConfirm 
              buttonOpenText="" 
              buttonOkText="Eliminar"
              buttonKoText="Cancelar"
              title="Confirma que deseas eliminar"
              description="La imagen será eliminada definitivamente."
              button-bg="bg-red"
              icon="mdi-delete"
              @agree="del(image)"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
