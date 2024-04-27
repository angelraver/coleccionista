<script lang="ts">
import { type Collection } from '@/entities/Collection'
import { CollectionController } from '@/controllers/Collection'
import { getItemTypeLabel } from '@/entities/ItemType'
import Loading from '@/components/Loading.vue'

export default {
  components: { Loading },
  props: {
    idUser: {
      type: Number,
      required: true 
    },
  },
  data() {
    return {
      loading: false,
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
    collectionSelect(collection: Collection) {
      this.$emit('collectionSelect', collection);
    }
  },
  async mounted() {
    this.collections = []
    await this.fetchCollections()
  },
}
</script>

<template>
  <Loading v-if="loading" />
  <div v-if="!loading">
    <v-container fluid fill-height>
      <v-row justify="center" v-if="collections.length > 0">
        <v-col v-for="(collection, i) in collections" :key="i" cols="auto">
          <v-card
            class="mx-auto"
            width="200"
            height="100"
            @click="collectionSelect(collection)"
          >
            <v-card-item>
                <div class="text-h6 pa-1">{{ collection.name }}</div>
                <div class="text-caption">{{ typeLabel(collection.iditemtype) }}</div>
                <div class="text-caption">{{ collection.itemscount }} ítems</div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-show="(collections?.length < 1)" justify="center">
        <v-col cols="auto">
          <p>No hay colecciones.</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>