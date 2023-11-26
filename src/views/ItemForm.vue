<template>
  <v-form v-model="valid">
    <h1 class="text-h4 font-weight-bold">Agregar a [colecction]</h1>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="title"
            :rules="titleRules"
            :counter="10"
            label="Título"
            required
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
            v-model="year"
            :rules="yearRules"
            :counter="10"
            label="Año"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn text="Guardar" @click="save()"></v-btn>
    </v-container>
  </v-form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      loading: false,
      items: [],

      valid: false,
      title: '',
      titleRules: [
        (value: string) => {
          if (value) return true

          return 'Name is required.'
        },
      ],
      year: '',
      yearRules: [
        (value: any) => {
          if (value) return true 
          return 'Name is required.'
        },
      ],
    }
  },
  async created() {
    // this.$watch(
    //   () => this.$route.params,
    //   () => {
        console.log('fetchItems')
        await this.fetchItems()
    //   },
    //   { immediate: true }
    // )
  },
  methods: {
    async fetchItems() {
      this.loading = true
      try {
        const response = await fetch('http://localhost:8001/item');
        this.items = await response.json();
      } catch (error) {
        console.log('FAIL!')
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
    async save() {
      console.log('save!')
    }
  },
}
</script>




export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    },
  },
}


