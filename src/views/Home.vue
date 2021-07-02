<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-card>
          <div class="bloc">
            Acceuil
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-card>
          <div class="bloc">
            foire aux questions
          </div>
        </v-card>
        <v-btn @click="goToFaq">
          voir plus
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-card>
          <div class="bloc">
            operations de vaccination
          </div>
        </v-card>
        <v-btn @click="goToVaccine">
          voir plus
        </v-btn>
      </v-col>
    </v-row>
    <v-btn
      elevation="2"
      fab
      class="feedback"
      @click="feedback"
    > <v-icon color="teal darken-2" >mdi-email</v-icon> </v-btn>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
    methods: {
      goToFaq() {
        this.$router.push('/faq')
      },
      goToVaccine() {
        this.$router.push('/vaccine')
      },
      feedback() {
        this.$router.push('/feedback')
      }
    }
  }
</script>

<style scoped>
  .bloc {
    height: 200px;
  }
  .feedback {
    position: fixed;
    bottom: 4vh;
    right: 4vw;
  }
</style>
