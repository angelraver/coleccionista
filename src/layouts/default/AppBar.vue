<script lang="ts">
export default {
  props: {
    user: {
      type: Object,
      required: true 
    },
  },
  data() {
    return {}
  },
  methods: {
  },
}
</script>
<style>
.title-wrapper div {
  display: flex;
  align-items: center;
  font-size: 16px;
}
.title-icon {
  height: 50px;
}
.menu-wrapper {
  margin-left: 1em;
}
.pointer {
  cursor: pointer;
}
</style>
<template>
  <v-app-bar flat>
    <div class="menu-wrapper">
      <v-menu>
        <template v-slot:activator="{ props }">
          <img v-bind="props" src="@/assets/logo-xs.png" title="Coleccionista" class="title-icon pointer" />
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="pointer" @click="$router.push({ name: 'Home' })">Inicio</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-app-bar-title class="title-wrapper">
      Colecciones de {{ $props.user.name }}
    </v-app-bar-title>
  </v-app-bar>
</template>
