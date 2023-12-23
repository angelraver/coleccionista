<script lang="ts">
import { loggedUser } from '@/controllers/utils'
import { CollectionController } from '@/controllers/Collection'
import { ItemTypes, getItemTypeLabel } from '@/entities/ItemType'
import { type Collection } from '@/entities/Collection'
import ModalConfirm from '@/components/ModalConfirm.vue'
import { VIDEOGAME_PLATFORMS } from '@/entities/VideoGamePlatforms'

export default {
  components: {
    ModalConfirm
  },
  data() {
    return {
      id: parseInt(this.$route.params.id + ''),
      idUser: parseInt(loggedUser()?.id + ''),
      collection: {} as Collection,
      title: 'Crear nueva colección',
      breadcrumb: [] as String[],
      loading: false,
      valid: false,
      name: '',
      selectedIdItemType: null as Number | null,
      itemTypeLabel: '',
      itemTypes: ItemTypes.map(({ id, name }) => { 
        return {  id, title: name }
      }),
      videoGamePlatforms: VIDEOGAME_PLATFORMS.slice().sort((a, b) => a.name.localeCompare(b.name)).map(({ id, name }) => { 
        return {  id, title: name }
      }),
      selectedIdVideoGamePlatform: null as Number | null,
    }
  },
  methods: {
    save() {
      if (this.id) {
        this.update()
      } else {
        this.create()
      }
    },
    async create() {
      this.loading = true
      try {
        const result = await CollectionController.create(
          this.idUser,
          this.name,
          parseInt(this.selectedIdItemType + ''),
          parseInt(this.selectedIdVideoGamePlatform + '')
        )
        this.$router.push({ name: 'CollectionDetail', params: { id: result.id }})
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    async update() {
      this.loading = true
      try {
        await CollectionController.update(
          this.id,
          this.idUser,
          this.name,
          parseInt(this.selectedIdVideoGamePlatform + '')
        )
        this.$router.push({ name: 'CollectionDetail', params: { id: this.id }})
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    async del() {
      this.loading = true
      try {
        await CollectionController.remove(this.id, this.idUser)
        this.$router.push({ name: 'Home' })
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    async fetchCollection() {
      this.loading = true
      try {
        const data = await CollectionController.fetch(this.idUser, this.id,)
        this.collection = data[0]
        this.name = this.collection.name
        this.selectedIdItemType = this.collection.iditemtype
        this.selectedIdVideoGamePlatform = this.collection.idplatform > 0 ? this.collection.idplatform : null
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
    cancel() {
      if (this.id) {
        this.$router.push({ name: 'CollectionDetail', params: { id: this.id }})
      } else {
        this.$router.push({ name: 'Home'})
      }
    },
  },
  computed: {
    idValid(): boolean {
      if (this.id) {
        return this.name.length > 0
      } else {
        return this.name.length > 0 
          && (!!this.selectedIdItemType && parseInt(this.selectedIdItemType + '') > 0)
      }
    },
    isTypeVideoGame(): boolean {
      return !!this.selectedIdItemType && this.selectedIdItemType === 1
    }
  },
  async mounted() {
    if (this.id) {
      this.title = 'Editar colección'
      await this.fetchCollection()
      this.itemTypeLabel = getItemTypeLabel(this.collection.iditemtype)
      this.breadcrumb = ['Colecciones', this.collection.name, 'Editar']
    } else {
      this.breadcrumb = ['Colecciones', 'Nueva']
    }
  }
}
</script>
<template>
  <v-breadcrumbs :items="(breadcrumb as [])"></v-breadcrumbs>
  <v-container>
    <v-row justify="center">
      <v-col cols="18">
        <h1 class="text-h4 font-weight-bold text-center">{{ title }}</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-text-field
          v-model="name"
          :label="id ? 'Nombre actual' :  'Nombre'"
          required
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row v-show="id" class="justify-center">
      <v-col cols="8" class="text-center">
      {{ itemTypeLabel }}
      </v-col>
    </v-row>
    <v-row justify="center" v-show="!id">
      <v-col cols="8">
        <v-select
          v-model="selectedIdItemType"
          :items="itemTypes"
          item-text="name"
          item-value="id"
          label="Tipo de item"
        />
      </v-col>
    </v-row>
    <v-row justify="center" v-show="isTypeVideoGame">
      <v-col cols="8">
        <v-select
          v-model="selectedIdVideoGamePlatform"
          :items="videoGamePlatforms"
          item-text="name"
          item-value="id"
          label="Plataforma"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <span v-show="id">
          <ModalConfirm 
            buttonOpenText="Eliminar" 
            buttonOkText="Eliminar"
            buttonKoText="Cancelar"
            :title="`Confirma que deseas eliminar ${name}`"
            :description="`La colección ${name} será eliminada junto con los ${collection.itemscount} elementos que contiene.`"
            @agree="del"
          />  
        </span>  
        <v-btn text="Cancelar" @click="cancel()" class="ma-4" />
        <v-btn
          text="Guardar"
          @click="save()"
          class="bg-green ma-2"
          :disabled="!idValid"
        />
      </v-col>
    </v-row>
  </v-container>
</template>