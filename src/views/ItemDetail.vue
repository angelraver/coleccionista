<script lang="ts">
import { loggedUser } from '@/controllers/utils'
import { type Item } from '@/entities/Item'
import { type ItemType, getItemTypeLabel } from '@/entities/ItemType'
import ModalConfirm from '@/components/ModalConfirm.vue'
import { ItemController } from '@/controllers/Item'
import { COVER_URL_BIG  } from '@/controllers/utils'

export default {
  components: {
    ModalConfirm
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
      coverUrl: COVER_URL_BIG
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
    this.breadcrumb = ['Colecciones', this.item.collectionname + '', this.item.title]
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
      <v-row class="justify-center">
        <v-col cols="auto">
          <v-card
            width="400"
            :title="title"
            :subtitle="`${item.year} | ${typeLabel(item.iditemtype)}`"
            :text="`Colección ${item.collectionname}`"
          >
          <v-img
            v-if="item.cover"
            :width="400"
            aspect-ratio="1/1"
            cover
            :src="coverUrl + item.cover"
          ></v-img>
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
              :title="`Confirma que deseas eliminar ${item.title}`"
              :description="`El item ${item.title} será eliminado de la colección ${item.collectionname}.`"
              @agree="del"
            />
          </span>
          <v-btn v-show="!item.idigdb"
            @click="$router.push({ name: 'ItemEdit', params: { id: id }})"
            class="bg-amber ma-4"
          >
            <v-icon icon="mdi-pencil" size="large" />
              Editar
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
