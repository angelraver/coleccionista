<script lang="ts">
import { loggedUser, post, put, del, get } from '@/utils'
import { type Item } from '@/entities/Item'
import { type ItemType } from '@/entities/ItemType'
import ModalConfirm from '@/components/ModalConfirm.vue'

export default {
  components: {
    ModalConfirm
  },
  data() {
    return {
      pageTitle: 'Agregar un item',
      breadcrumb: [] as string[],
      id: parseInt(this.$route.params.id + ''),
      idCollection: parseInt(this.$route.params.idCollection + ''),
      idUser: parseInt(loggedUser()?.id + ''),
      item: {} as Item,
      collection: {} as ItemType,
      loading: false,
      valid: false,
      title: '',
      titleRules: [
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
      const user = loggedUser()
      const postData = {
        title: this.title,
        iduser: user.id,
        iditemtype: this.idCollection
      };

      try {
        await post('/item', postData);
        this.$router.push({ name: 'CollectionDetail', params: { id: this.idCollection }})
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
        title: this.title,
        id: this.id,
      };

      try {
        await put('/item', putData);
        this.$router.push({ name: 'CollectionDetail', params: { id: this.idCollection }})
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
        await del('/item', delData)
        this.$router.push({ name: 'CollectionDetail', params: { id: this.idCollection }})
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    async fetchItem() {
      this.loading = true
      try {
        const data = await get('/item', [this.idUser + '', this.id + '', this.idCollection + ''])
        this.item = data[0]
        this.title = this.item.title
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
    if (this.id) {
      await this.fetchItem()
      this.idCollection = this.item.iditemtype
      await this.fetchCollection()
      this.breadcrumb = ['Colecciones', this.collection.name, 'Item', 'Editar', this.item.title]
      this.pageTitle = 'Editar'
    } else {
      this.breadcrumb = ['Colecciones', this.collection.name, 'Item', 'Nuevo']
    }
  },
}
</script>

<template>
  <v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
  <v-container>
    <v-responsive class="text-center">
      <v-row class="d-flex align-center justify-center">
        <v-col>
          <v-form v-model="valid">
            <h2 class="text-h4 font-weight-bold">{{ pageTitle }}</h2>
            <v-container>
              <v-row justify="center">
                <v-col cols="8">
                  <v-text-field
                    v-model="title"
                    label="Título"
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
                      :title="`Confirma que deseas eliminar ${title}`"
                      :description="`El item ${title} será eliminado de la colección ${collection.name}.`"
                      @agree="del"
                    />
                  </span>
                  <v-btn
                    class="ma-4"
                    text="Cancelar"
                    @click="$router.push({ name: 'Item', params: { id }})"
                  ></v-btn>
                  <v-btn
                      class="bg-green ma-4"
                      text="Guardar"
                      @click="save()"
                  ></v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
