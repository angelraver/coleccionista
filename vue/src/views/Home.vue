<script lang="ts" setup>
  import CollectionList from '@/components/CollectionList.vue'
</script>
<template>
  <v-container>
    <v-responsive class="text-center">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <img src="@/assets/logo-xs.png" title="Coleccionista" />

          <h1>Tus colecciones</h1>

          <v-btn @click="$router.push({ name: 'CollectionNew'})" class="bg-amber mt-4">
            <v-icon icon="mdi-plus" size="large" start />
            Nueva Colección
          </v-btn>

          <CollectionList />

        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

