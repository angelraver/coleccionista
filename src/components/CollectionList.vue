<script lang="ts">
import { get, loggedUser } from '@/utils'
import { type ItemType } from '@/entities/ItemType'

export default {
  data() {
    return {
      loading: false,
      collections: [] as ItemType[],
    }
  },
  methods: {
    async fetchCollections() {
      this.loading = true
      try {
        const userId = loggedUser()?.id + ''
        const data = await get('/itemtype', [userId]);
        this.collections = data
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    open() {

    }
  },
  mounted() {
    this.collections = []
    this.fetchCollections() 
  },
}
</script>

<template>
  <v-container fluid fill-height>
    <v-row v-show="(collections?.length < 1)" justify="center">
      <v-col cols="auto">
        <p>No hay colecciones.</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-for="(collection, i) in collections" :key="i" cols="auto">
        <v-card
          class="mx-auto"
          width="200"
          height="100"
          @click="$router.push({ name: 'CollectionDetail', params: { id: collection.id }})"
        >
          <v-card-item>
              <div class="text-h6 pa-1">
                {{ collection.name }} ({{ collection.itemscount }})
              </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>