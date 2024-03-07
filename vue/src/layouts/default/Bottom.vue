<template>
  <span id="version">v1.0</span>
  <v-bottom-navigation>
    <v-btn value="home" @click="$router.push({ name: 'Home'})">
      <v-icon>mdi-home</v-icon>
      <span>Inicio</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script lang="ts" setup>

</script>
