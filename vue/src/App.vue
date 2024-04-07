<template>
  <router-view />
</template>

<script lang="ts">
import { checkAutorized } from '@/controllers/utils'
  
export default {
  beforeMount() {
    checkAutorized(this)
  }  
}
</script>
