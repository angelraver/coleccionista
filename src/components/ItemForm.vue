<script lang="ts">
import { loggedUser, post } from '@/utils'

export default {
  data() {
    return {
      id: this.$route.params.id + '',
      loading: false,
      valid: false,
      title: '',
      titleRules: [
        (value: string) => {
          if (value) return true

          return 'Campo obligatorio.'
        },
      ],
    }
  },
  methods: {
    async save() {
      if (!this.valid) return
        this.loading = true
        const user = loggedUser()
        const postData = {
          name: this.title,
          iduser: user?.id,
          iditemtype: this.id
        };

        try {
          const data = await post('/item', postData);
          console.log(data)
          this.$router.push({ name: 'CollectionDetail', params: { id: this.id }})
        } catch (error) {
          console.log('FAIL!')
          console.error(error);
        }
        finally {
          this.loading = false
        }
    }
  }
}
</script>

<template>
  <v-form v-model="valid">
    <h2 class="text-h4 font-weight-bold">Agregar un item</h2>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="title"
            :counter="10"
            label="Título"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        text="Cancelar"
        @click="$router.push({ name: 'CollectionDetail', params: { id }})"
      ></v-btn>
      <v-btn
          text="Guardar"
          @click="save()"
        ></v-btn>
    </v-container>
  </v-form>
</template>
 