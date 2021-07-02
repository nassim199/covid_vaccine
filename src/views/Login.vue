<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <div>
          This is the Login page
        </div>
        <v-btn @click="login">
          Login
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <div>
          No account?
        </div>
        <v-btn>
          Register
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Login',
    methods: {
      login() {
        this.$store.commit('login')
        this.$router.replace('/account')
      }
    }
  }
</script>
