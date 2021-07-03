<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="5">
        <v-card>
          <v-col class="bloc text-center">
            <v-container>
                <v-img
                  :src="require('../assets/citoyen-8.png')"
                  class="my-3"
                  contain
                  height="160"
                />
            </v-container>

            <v-btn @click="loginCitoyen">
              Authentification pour citoyen
            </v-btn>
            <div>
              Vous n'avez pas de compte? <a @click="registerCitoyen">Creez-en un</a>
            </div>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card>
          <v-col class="bloc text-center">
            <v-container>
                <v-img
                  :src="require('../assets/centre de test-8.png')"
                  class="my-3"
                  contain
                  height="160"
                />
            </v-container>

            <v-btn @click="loginCentre">
              Authentification pour centre de test
            </v-btn>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Login',
    methods: {
      loginCitoyen() {
        this.$router.push('/loginCitoyen')
      },
      registerCitoyen() {
        this.$router.push('/signIn')
      },
      loginCentre() {
        this.$router.push('/loginCentre')
      }
    }
  }
</script>

<style>
.bloc {
  height: 340px;
}
</style>
