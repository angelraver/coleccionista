<script lang="ts">
import { ItemController } from '@/controllers/Item'
import { getItemTypeLabel } from '@/entities/ItemType'
import ModalConfirm from '@/components/ModalConfirm.vue'

export default {
  props: {
    id: {
      type: Number,
      required: false 
    },
    currentTitle: {
      type: String,
      required: false 
    },
    nameCollection: {
      type: String,
      required: true 
    },
    idCollection: {
      type: Number,
      required: true
    },
    idItemType: {
      type: Number,
      required: true
    },
    idUser: {
      type: Number,
      required: true
    }
  },
  components: {
    ModalConfirm
  },
  data() {
    return {
      loading: false,
      valid: false,
      pageTitle: '',
      title: this.currentTitle || '',
      typeLabel: (value: number) => getItemTypeLabel(value),
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
        const item = {
          idcollection: this.idCollection,
          iditemtype: this.idItemType,
          iduser: this.idUser,
          title: this.title,
        }
        await ItemController.create(item)
        this.$router.push({ name: 'CollectionDetail', params: { id: this.idCollection }})
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
        await ItemController.update(this.id || 0, this.idUser, this.title, '', 0)
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
      try {
        await ItemController.remove(this.id || 0, this.idUser)
        this.$router.push({ name: 'CollectionDetail', params: { id: this.idCollection }})
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    cancel() {
      this.$router.push({ name: 'CollectionDetail', params: { id: this.idCollection }})
    },
  },
  computed: {
    idValid(): boolean {
      return !!this.title && this.title.length > 0
    }
  },
  watch: {
    currentTitle: {
      immediate: true,
      handler(newTitle) {
        this.title = newTitle;
      },
    },
  },
}
</script>
<template>
  <v-container>
    <v-responsive class="text-center">
      <v-row justify="center">
        <v-col cols="18">
          <h1 class="text-h4 font-weight-bold text-center">{{ id ? `Editar` : `Agregar nuevo item a ` + nameCollection }}</h1>
        </v-col>
      </v-row>
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
      <v-row class="justify-center">
        <v-col cols="8">
          <p>{{ typeLabel(idItemType) }}</p>
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
              :description="`El item ${title} será eliminado de la colección ${nameCollection}.`"
              @agree="del"
            />  
          </span>  
          <v-btn
            text="Cancelar"
            @click="cancel()"
            class="ma-2"
          />
          <v-btn
            text="Guardar"
            @click="save()"
            class="bg-green ma-2"
            :disabled="!idValid"
          />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>