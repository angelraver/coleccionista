
<script lang="ts">
import { UserController } from '@/controllers/User'

export default {
  data() {
    return {
      loginFail: false,
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
  methods: {
    async login() {
      if (!this.valid) return
      this.loginFail = false
      this.loading = true
      try {
        const data = await UserController.login(this.user, this.password)
        if (data.iduser) {
          document.cookie = `iduser=${data.iduser}`
          this.$router.push({ name: 'Home' })
        } else {
          this.loginFail = true
        }
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false
      }
    },
  },
}
</script>
<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <v-col cols="12" sm="4" md="8">
        <v-img height="300" src="@/assets/logo-s.png" />
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col>
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
              <v-col>
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
            <v-row>
              <v-alert text="Usuario o password equivocados." type="error" v-show="loginFail"></v-alert>
            </v-row>
            <v-row justify="center">
              <v-btn text="Login" :disabled="loading" @click="login()" color="amber"/>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
