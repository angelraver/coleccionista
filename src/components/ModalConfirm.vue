<script lang="ts">
export default {
  props: {
    buttonOpenText: String,
    buttonOkText: String,
    buttonKoText: String,
    title: String,
    description: String,
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    agree() {
      console.log('GOOO!!')
      this.$emit('agree');
    }
  },  
}
</script>
<template>
  <v-dialog v-model="dialog" persistent width="auto">
    <template v-slot:activator="{ props }">
      <v-btn class="bg-red" v-bind="props">
        {{ buttonOpenText }}
      </v-btn>
    </template>
    <v-card class="pa-4">
      <v-card-title class="text-h5">
        {{ title }}
      </v-card-title>
      <v-card-text>{{ description }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          variant="text"
          @click="dialog = false"
        >
          {{ buttonKoText }}
        </v-btn>
        <v-btn class="bg-red" variant="text" @click="agree">
          {{ buttonOkText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>