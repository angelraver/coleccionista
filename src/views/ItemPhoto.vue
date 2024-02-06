<script lang="ts">
import { loggedUser } from '@/controllers/utils'
import { type Item } from '@/entities/Item'
import { type ItemType, getItemTypeLabel } from '@/entities/ItemType'
import { ItemController } from '@/controllers/Item'
import Photo from '@/components/Photo.vue'

export default {
  components: {
    Photo
  },
  data() {
    return {
      breadcrumb: [] as string[],
      id: parseInt(this.$route.params.id + ''),
      idUser: parseInt(loggedUser()?.id + ''),
      item: {} as Item,
      title: '' as string,
      collection: {} as ItemType,
      loading: false,
      typeLabel: (idItemType: number) => getItemTypeLabel(idItemType),
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
    this.breadcrumb = ['Colecciones', this.item.collectionname + '', this.item.title, 'Foto']
    if (this.item.iditemtype === 3) {
      this.title = this.item.title + ' - ' + this.item.author
    } else {
      this.title = this.item.title
    }
  },
}
</script>

<template>
  <v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
  <v-container>
    <v-responsive class="text-center">
      <v-row justify="center">
        <v-col cols="auto">
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
</template>
