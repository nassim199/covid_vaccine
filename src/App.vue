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
      dark
      padless
    >
      <v-card
        flat
        tile
        class="blue lighten-2 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-container grid-list-xl>
        <v-row>
          <v-col>
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
            </v-col>
             <v-spacer></v-spacer> 
          <v-col>
        <v-card-text class="white--text pt-0">
         Informations sur le vaccin
         </v-card-text>
         </v-col>
          <v-spacer></v-spacer> 
         <v-col>
<v-card-text class="white--text pt-0">
         Foire aux question 
         </v-card-text>
         </v-col>
          <v-spacer></v-spacer> 
         <v-col>
         <v-card-text class="white--text pt-0">
          Opérations de vaccination
         </v-card-text>
         </v-col>
          <v-spacer></v-spacer> 
         </v-row>
         </v-container>
        <v-divider></v-divider>

        <v-card-text class="white--text">
          © {{ new Date().getFullYear() }} Tous les droits sont réservés.
        </v-card-text>
     </v-card> 
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
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
