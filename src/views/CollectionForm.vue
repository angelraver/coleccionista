<template>
  <v-form v-model="valid">
    <h1 class="text-h4 font-weight-bold">Crear nueva colección</h1>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="name"
            :counter="10"
            label="Qué vas a coleccionar?"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
          text="Guardar"
          @click="save()"
        ></v-btn>
    </v-container>
  </v-form>
</template>
 
<script lang="ts">
  export default {
    data: () => ({
      valid: false,
      name: '',
      save: () => {
        console.log(name)
      }
    }), 
  }

  async function fetchItems() {
    try {
      const response = await fetch('http://localhost:8001/item');
      const items = await response.json();
      console.log(items)
    } catch (error) {
      console.log('FAIL!')
      console.error(error);
    }
  }
</script>