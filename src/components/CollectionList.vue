<script lang="ts">
import { loggedUser } from '@/controllers/utils'
import { type Collection } from '@/entities/Collection'
import { CollectionController } from '@/controllers/Collection'
import { getItemTypeLabel } from '@/entities/ItemType'

export default {
  data() {
    return {
      loading: false,
      idUser: parseInt(loggedUser()?.id + ''),
      collections: [] as Collection[],
      typeLabel: (idItemType: number) => getItemTypeLabel(idItemType)
    }
  },
  methods: {
    async fetchCollections() {
      this.loading = true
      try {
        const data = await CollectionController.fetch(this.idUser, null);
        this.collections = data
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
  },
  async mounted() {
    this.collections = []
    await this.fetchCollections()
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
    <v-row justify="center" v-if="collections.length > 0">
      <v-col v-for="(collection, i) in collections" :key="i" cols="auto">
        <v-card
          class="mx-auto"
          width="200"
          height="100"
          @click="$router.push({ name: 'CollectionDetail', params: { id: collection.id }})"
        >
          <v-card-item>
              <div class="text-h6 pa-1">{{ collection.name }}</div>
              <div class="text-caption">{{ typeLabel(collection.iditemtype) }}</div>
              <div class="text-caption">{{ collection.itemscount }} ítems</div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>