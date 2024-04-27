<script lang="ts">
import Bottom from './Bottom.vue'
import DefaultView from './View.vue'
import AppBar from './AppBar.vue'
import { type User } from '@/entities/User'
import { checkAutorized } from '@/controllers/utils'

export default {
  components: { AppBar, Bottom, DefaultView },
  data() {
    return {
      loading: false,
      user: {} as User,
    }
  },
  methods: {
  },
  beforeMount() {
    checkAutorized(this)
  }
}
</script>

<template>
  <v-app>
    <AppBar :user="user" />
    <default-view />
    <Bottom />
  </v-app>
</template>
