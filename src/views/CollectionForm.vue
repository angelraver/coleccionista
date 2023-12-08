<script lang="ts">
import { loggedUser, post, get, put, del } from '@/utils'
import { type ItemType } from '@/entities/ItemType'
import ModalConfirm from '@/components/ModalConfirm.vue'

export default {
  components: {
    ModalConfirm
  },
  data() {
    return {
      id: parseInt(this.$route.params.id + ''),
      collection: {} as ItemType,
      idUser: loggedUser()?.id,
      title: 'Crear nueva colección',
      breadcrumb: 'Nueva',
      loading: false,
      valid: false,
      name: '',
      nameRules: [
        (value: string) => {
          if (value) return true

          return 'Campo obligatorio.'
        },
      ],
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
      if (!this.valid) {
        return
      }
      this.loading = true
      const postData = {
        name: this.name,
        iduser: this.idUser
      };
      try {
        const result = await post('/itemtype', postData);
        this.$router.push({ name: 'CollectionDetail', params: { id: result.id }})
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    async update() {
      if (!this.valid) {
        return
      }
      this.loading = true
      const putData = {
        id: this.id,
        name: this.name,
      }

      try {
        await put('/itemtype', putData);
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
      const delData = {
        id: this.id,
        iduser: this.idUser
      }

      try {
        await del('/itemtype', delData)
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
        const data = await get('/itemtype', [this.idUser + '', this.id + ''])
        this.collection = data[0]
        this.name = this.collection.name
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
    }
  },  
  async mounted() {
    if (this.id) {
      this.breadcrumb = 'Editar'
      this.title = 'Editar colección'
      await this.fetchCollection()
    }
  },
}
</script>
<template>
  <v-breadcrumbs :items="['Colecciones', breadcrumb]"></v-breadcrumbs>

  <v-form v-model="valid">
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
          <v-btn text="Guardar" @click="save()" class="bg-green ma-4" />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>