<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
      
    >
      <div class="d-flex align-center">
        <v-img
          alt="Suivac Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo-8.png')"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Suivac Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          :src="require('./assets/txt-8.png')"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn text color="#212121">
        <router-link tag="span" to="/">Accueil</router-link>
      </v-btn>
      <v-btn text color="#212121">
        <router-link tag="span" to="/info">informations</router-link>
      </v-btn>
      <v-btn text color="#212121">
        <router-link tag="span" to="/faq">Faq</router-link>
      </v-btn>
      <v-btn text color="#212121">
        <router-link tag="span" to="/vaccine">Operations de vaccination</router-link>
      </v-btn>
      <v-btn text color="#212121" v-if="login">
        <router-link tag="span" to="/login">Authentification</router-link>
      </v-btn>
      <v-btn text color="#212121" v-if="checkIn">
        <router-link tag="span" to="/checkIN">Check In</router-link>
      </v-btn>
      <v-btn text color="#212121" v-if="account">
        <router-link tag="span" to="/account">Mon compte</router-link>
      </v-btn>
      <v-btn icon color="#212121" v-if="!login" @click="logout">
        <v-icon> mdi-logout </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

       <v-footer
    color="primary lighten-2"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Suivac</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    links: [
        'Accueil',
        'A propos',
        'Equipe',
        'Services',
        'Blog',
        'Contactez-nous',
      ],
  }),
  computed: {
    account() {
      return this.$store.getters.authentified==1
    },
    login() {
      return this.$store.getters.authentified==0
    },
    checkIn() {
      return this.$store.getters.authentified==2
    }
  },
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.replace('/login')
    }
  }
};
</script>
