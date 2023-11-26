<template>
  <v-form v-model="valid">
    <h1 class="text-h4 font-weight-bold">={{ valid }}, {{ user }}=</h1>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="user"
            :rules="userRules"
            label="Usuario"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            password
            type="password"
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn text="Login" @click="login()"></v-btn>
    </v-container>
  </v-form>
</template>

<script lang="ts">
const apiURL = 'http://localhost:8080'
// const apiURL = 'https://coleccionista.rj.r.appspot.com'
export default {
  data() {
    return {
      loading: false,
      valid: false,
      user: '',
      userRules: [
        (value: string) => {
          if (value) return true

          return 'User is required.'
        },
      ],
      password: '',
      passwordRules: [
        (value: string) => {
          if (value.length < 1) {
            return 'Password is required.'
          }
          return true
        },
      ],
    }
  },
  created() {},
  methods: {
    async login() {
      if (!this.valid) return

      this.loading = true
      const postData = {
        user: this.user,
        password: this.password
      };
      try {
        console.log(postData)
        const res = await fetch(`${apiURL}/login`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
        const data = await res.json();
        if (data) {
          document.cookie = `iduser=${data.iduser}`
        }
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
