<script lang="ts">
import { get, loggedUser } from '@/utils'
import { type Item } from '@/entities/Item'
import { type ItemType } from '@/entities/ItemType'
import ItemForm from '@/components/ItemForm.vue'
import { randomIcon, randomColor } from "@/utils"

export default {
  components: {
    ItemForm
  },
  data() {
    return {
      showList: true,
      showForm: false,
      loading: false,
      items: [] as Item[],
      collection: {} as ItemType,
      id: this.$route.params.id + '',
      userId: loggedUser()?.id + ''
    }
  },
  methods: {
    randomIcon() {
      return randomIcon()
    },
    randomColor() {
      return randomColor().name
    },
    formOn() {
      this.showForm = true
      this.showList = false
    },
    formOff() {
      this.showForm = false
    },
    listOn() {
      this.showList = true
      this.showForm = false
    },
    listOff() {
      this.showList = false
    },
    async fetchItems() {
      this.loading = true
      try {
        this.items = await get('/item', [this.userId, null, this.id]);
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
        const data = await get('/itemtype', [this.userId, this.id])
        this.collection = data[0]
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    }
  },
  async mounted() {
    this.items = []
    await this.fetchCollection()
    await this.fetchItems() 
  },
}
</script>

<template>
  <v-breadcrumbs :items="['Colecciones', collection.name]"></v-breadcrumbs>

  <v-container>
    <v-responsive class="text-center">
      <v-row class="d-flex align-center justify-center">
        <v-col>
          <h1 class="text-h4 font-weight-bold text-center">{{ collection.name }} ({{ collection.itemscount  }})</h1>

          <v-btn @click="formOn()" v-show="showList" class="bg-amber mt-4">
            <v-icon icon="mdi-plus" size="large" start />
            Nuevo item
          </v-btn>

        </v-col>
      </v-row>
      <v-row justify="center" v-show="showList">
        <v-col>

    <v-list lines="two">
      <v-list-item
        v-for="item in items"
        :key="item.id"
        :title="item.title"
      >
        <template v-slot:prepend>
          <v-avatar :color="randomColor()" :icon="randomIcon()" />
        </template>

        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-information"
            variant="text"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>

        </v-col>
      </v-row>
      <v-row justify="center" v-show="showForm">
        <v-col>
          <ItemForm />
        </v-col>
      </v-row>
      <v-row justify="center" v-show="showList">
        <v-col>
          <v-btn @click="$router.push({ name: 'CollectionEdit', params: { id: collection.id }})" v-show="showList" class="bg-amber mt-4">
            <v-icon icon="mdi-pencil" size="large" />
              Editar
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>