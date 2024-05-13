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
    idCollection: {
      type: Number, 
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
    this.checkWindowSize();
    window.addEventListener('resize', this.checkWindowSize);
  },
  beforeUnmount() {
    // Remove the resize event listener when the component is about to be destroyed
    window.removeEventListener('resize', this.checkWindowSize);
  }
}
</script>
<style>
.items-list {
  margin: 0 auto;
  padding: 0;
  width: 75%;
  @media (max-width: 600px) {
    width: 100%;
  }
}
.items-list li {
  list-style: none;
  line-height: 3em;
  cursor: pointer;
}
.items-list li a {
  display: flex;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  color: white;
}
.items-list li a:hover {
  color: black;
  background: #ffc107 !important;
}
</style>
<template>
  <Loading v-if="loading" />
  <div v-if="!loading">
    <p v-show="items.length < 1">La colección está vacía.</p>
    <div v-if="idItemType != 1">
      <ul class="items-list" v-show="items.length > 0 && idItemType != 1">
        <li v-for="item in items" :key="item.id">
            <a @click="$router.push({ name: 'Item', params: { id: item.id } })">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div v-if="idItemType === 1">
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="item in items"
            :key="item.id"
            :cols="isMobile ? 4 : 3"
          >
            <v-card
              @click="$router.push({ name: 'Item', params: { id: item.id } })"
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
