<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :counter="10"
            label="First name"
            required
            hide-details
          ></v-text-field>
        </v-col>
 
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :counter="10"
            label="Last name"
            hide-details
            required
          ></v-text-field>
        </v-col>
 
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
 
<script lang="ts">
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      email: '',
    }),
  }
</script>