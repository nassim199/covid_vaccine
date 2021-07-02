<template>
  <v-container>
    <v-card id="1">
      <v-card-title class="text-h5 grey lighten-2">
      Privacy Policy
    </v-card-title>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </v-card-text>
    </v-card>
    <v-container></v-container>
     <v-card id="2">
      <v-card-title class="text-h5 grey lighten-2">
      Privacy Policy
    </v-card-title>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </v-card-text>
    </v-card>
    <v-container></v-container>
     <v-card id="3">
      <v-card-title class="text-h5 grey lighten-2">
      Privacy Policy
    </v-card-title>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </v-card-text>
    </v-card>
    <v-container></v-container>
     <v-card id="4">
      <v-card-title class="text-h5 grey lighten-2">
      Privacy Policy
    </v-card-title>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </v-card-text>
    </v-card>
    <v-container></v-container>
     <v-card id="5">
      <v-card-title class="text-h5 grey lighten-2">
      Privacy Policy
    </v-card-title>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </v-card-text>
    </v-card>
    <v-container></v-container>
     <v-card id="6">
      <v-card-title class="text-h5 grey lighten-2">
      Privacy Policy
    </v-card-title>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
    created() {
      if (this.$route.query.q) {
        alert(document.getElementById(this.$route.query.q.toString()))
        //.scrollIntoView()
      }
    }
  }
</script>
