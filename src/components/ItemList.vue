<script lang="ts">
import { get } from '@/utils'
import { type Item } from '@/entities/Item'
import { randomIcon, randomColor } from "@/utils"

export default {
  props: {
    idCollection: { type: String, required: true },
    idUser: { type: String, required: true },
  },
  components: {},
  data() {
    return {
      loading: false,
      items: [] as Item[],
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
        this.items = await get('/item', [this.idUser, null, this.idCollection]);
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
          @click="$router.push({ name: 'Item', params: { id: item.id }})"
        ></v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>