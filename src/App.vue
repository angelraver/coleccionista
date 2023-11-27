<template>
  <router-view />
</template>

<script lang="ts">
import { checkAutorized } from '@/utils'
  
export default {
  beforeMount() {
    checkAutorized(this)
  }  
}
</script>
