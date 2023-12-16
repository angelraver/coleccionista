<script lang="ts">
import { type Item } from '@/entities/Item'
import { randomIcon, randomColor } from "@/controllers/utils"
import { ItemController } from '@/controllers/Item'
import { COVER_URL  } from '@/controllers/utils'

export default {
  props: {
    idCollection: {
      type: Number, 
      required: true 
    },
    idUser: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      loading: false,
      items: [] as Item[],
      coverUrl: COVER_URL
    }
  },
  methods: {
    randomIcon() {
      return randomIcon()
    },
    randomColor() {
      return randomColor().name
    },
    async fetchItems() {
      this.loading = true
      try {
        this.items = await ItemController.fetch(this.idUser, null, this.idCollection);
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
  },
  async mounted() {
    this.items = []
    await this.fetchItems()
  },
}
</script>

<template>
  <p v-show="items.length < 1">La colección está vacía.</p>
  <v-list lines="two" v-show="items.length > 0">
    <v-list-item v-for="item in items" :key="item.id" :title="item.title">
      <template v-slot:prepend>
        <v-avatar v-if="item.cover" :image="coverUrl + item.cover" size="75"></v-avatar>
        <v-avatar v-if="!item.idigdb" :color="randomColor()" :icon="randomIcon()" />
      </template>
      <template v-slot:append>
        <v-btn
          color="grey-lighten-1"
          icon="mdi-information"
          variant="text"
          @click="$router.push({ name: 'Item', params: { id: item.id } })"
        ></v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>
