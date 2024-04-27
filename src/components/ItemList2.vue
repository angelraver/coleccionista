<script lang="ts">
import { type Item } from '@/entities/Item'
import { randomIcon, randomColor } from "@/controllers/utils"
import { ItemController } from '@/controllers/Item'
import { COVER_URL_SMALL, COVER_URL_BIG  } from '@/controllers/utils'
import Loading from '@/components/Loading.vue'

export default {
  components: {
    Loading
  },
  props: {
    collection: {
      type: Object, 
      required: true 
    },
    idUser: {
      type: Number,
      required: true
    },
    idItemType: {
      type: Number, 
      required: true 
    },
  },
  data() {
    return {
      loading: false,
      items: [] as Item[],
      isMobile: false,
      coverUrlSmall: COVER_URL_SMALL,
      coverUrlBig: COVER_URL_BIG
    }
  },
  methods: {
    checkWindowSize() {
      this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
    },
    randomIcon() {
      return randomIcon()
    },
    randomColor() {
      return randomColor().name
    },
    async fetchItems() {
      this.loading = true
      try {
        this.items = await ItemController.fetch(this.idUser, null, this.collection.id);
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    itemSelect(item: Item) {
      this.$emit('itemSelect', item);
    },
  },
  async mounted() {
    this.items = []
    await this.fetchItems()
    this.checkWindowSize();
    window.addEventListener('resize', this.checkWindowSize);
  },
  beforeUnmount() {
    // Remove the resize event listener when the component is about to be destroyed
    window.removeEventListener('resize', this.checkWindowSize);
  }
}
</script>
<template>
  <Loading v-if="loading" />
  <div v-if="!loading">
    <p v-show="items.length < 1">La colección está vacía.</p>
    <h1>{{ collection.name }}</h1>
    <div v-if="idItemType != 1">
      <v-list lines="two" v-show="items.length > 0 && idItemType != 1">
        <v-list-item v-for="item in items" :key="item.id" :title="item.title">
          <template v-slot:prepend>
            <v-avatar :color="randomColor()" :icon="randomIcon()" />
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
    </div>
    <div v-if="idItemType === 1">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.id"
            :cols="isMobile ? 4 : 3"
          >
            <v-card
              @click="itemSelect(item)"
            >
              <v-img
                :src="(isMobile ? coverUrlSmall : coverUrlBig) + item.cover"
                cover
              >
              </v-img>
              <v-card-title v-show="!isMobile">{{ item.title }}</v-card-title>
              <v-tooltip v-show="isMobile" activator="parent" location="top">{{ item.title }}</v-tooltip>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
