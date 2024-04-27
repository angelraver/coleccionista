<script lang="ts">
import CollectionList from '@/components/CollectionList2.vue'
import ItemList from '@/components/ItemList2.vue'
import ItemDetail from '@/components/ItemDetail2.vue'
import Bottom from '@/layouts/default/Bottom.vue'

import { type User } from '@/entities/User'
import { type Collection } from '@/entities/Collection'
import { type Item } from '@/entities/Item'
import { UserController } from '@/controllers/User'

export default {
  components: { Bottom, CollectionList, ItemDetail, ItemList },
  data() {
    return {
      selectedItem: {} as Item,
      loading: false,
      selectedCollection: {} as Collection,
      showBackToCollections: false,
      showCollections: false,
      showItemDetail: false,
      showItems: false,
      user: {} as User,
      userName: this.$route.params.userName + '',
    }
  },
  methods: {
    async fetchUser() {
      this.loading = true
      try {
        this.user = await UserController.getByName(this.userName);
        if (this.user?.id) {
          this.showCollections = true;
        }
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    collectionSelected(collection: Collection) {
      this.selectedCollection = collection
      this.showCollections = false
      this.showBackToCollections = true
      this.showItems = true
      this.showItemDetail = false
    },
    itemSelected(item: Item) {
      this.selectedItem = item
      this.showCollections = false
      this.showBackToCollections = false
      this.showItems = false
      this.showItemDetail = true
    },
    backToCollections() {
      this.showCollections = true
      this.showBackToCollections = false
      this.showItems = false
      this.showItemDetail = false
    },
    backToCollection() {
      this.showCollections = false
      this.showBackToCollections = true
      this.showItems = true
      this.showItemDetail = false
    }
  },
  async mounted() {
    if (this.userName.length > 0) {
      this.fetchUser()
    }
  },
}
</script>
<style>
a {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: underline;
}
.logo-big {
  width: 50%;
}
.login-button {
  position: absolute;
  top: 1em;
  right: 1em;
}
</style>
<template>
  <v-container>
    <v-responsive class="text-center">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto" class="main-col">
          <img class="logo-big" src="@/assets/logo-s.png" title="Coleccionista" />
          <h1>Colecciones de {{ userName }}</h1>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto" class="main-col">

          <CollectionList
            v-if="showCollections"
            :idUser="user.id"
            @collection-select="collectionSelected"
          />

          <ItemList
            v-if="showItems"
            :collection="selectedCollection"
            :idUser="user.id"
            :idItemType="selectedCollection.iditemtype"
            @item-select="itemSelected"
          />

          <ItemDetail
            v-if="showItemDetail"
            :item="selectedItem"
            :id-item-type="selectedCollection.iditemtype"
            :id-user="user.id"
            @back-collection="backToCollection"
          />

        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            @click="backToCollections()"
            v-if="showBackToCollections"
          >
            <v-icon icon="mdi-arrow-left" size="large" start />
            Volver a collections
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
    <Bottom />
  </v-container>

  <v-btn class="login-button" @click="$router.push({ name: 'Login' })">
    <v-icon icon="mdi-key" size="large" start />
    Login
  </v-btn>
</template>