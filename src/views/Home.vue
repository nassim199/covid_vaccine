<template>
  <v-container>
    <v-img
      :src="require('../assets/accueil-8.png')"
      class="my-3"
      contain
    />
    <v-row>
      <v-col>

      <v-container>
        <h3>
          Informations sur le vaccin
        </h3>
        <div class="souligner"/>
        <v-container></v-container>
        <v-container>
          <v-row justify="space-around">
            <v-col cols="3">
              <v-card>
                <v-card-title class="text-h5 blue lighten-2 white--text">
                Privacy Policy
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon @click="goToInfo(1)">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card>
                <v-card-title class="text-h5 blue lighten-2 white--text">
                Privacy Policy
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon @click="goToInfo(2)">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card>
                <v-card-title class="text-h5 blue lighten-2 white--text">
                Privacy Policy
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon @click="goToInfo(3)">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="space-around">
            <v-col cols="3">
              <v-card>
                <v-card-title class="text-h5 blue lighten-2 white--text">
                Privacy Policy
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon @click="goToInfo(4)">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card>
                <v-card-title class="text-h5 blue lighten-2 white--text">
                Privacy Policy
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon @click="goToInfo(5)">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card>
                <v-card-title class="text-h5 blue lighten-2 white--text">
                Privacy Policy
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon @click="goToInfo(6)">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-container>
        <h3>
          Foire aux questions
        </h3>
        <div class="souligner"/>
        <v-container></v-container>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(q,i) in questions"
            :key="i"
          >
            <v-expansion-panel-header>
              {{ q.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ q.reponse }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
        <v-container>
          <v-row justify="center">
            <v-btn @click="goToFaq" rounded>
              voir plus
            </v-btn>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col>

      <v-container>
        <h3>
          Operations de vaccination
        </h3>
        <div class="souligner"/>
        <v-container></v-container>
        <v-card>

        <v-img
          :src="require('../assets/op vac v1-8.png')"
          class="my-3"
          width="100vw"
          height="80vh"
        />
        </v-card>
        <v-container>
          <v-row justify="center">
            <v-btn @click="goToVaccine" rounded>
              voir plus
            </v-btn>
          </v-row>
        </v-container>
      </v-container>
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
    data() {
      return {
        questions: [
          {
            question: "question 1",
            reponse: "reponse 1"
          },
          {
            question: "question 2",
            reponse: "reponse 2"
          },
          {
            question: "question 3",
            reponse: "reponse 3"
          },
        ]
      }
    },
    methods: {
      goToFaq() {
        this.$router.push('/faq')
      },
      goToVaccine() {
        this.$router.push('/vaccine')
      },
      feedback() {
        this.$router.push('/feedback')
      },
      goToInfo(i) {
        this.$router.push('/info?q='+i)
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
  .souligner {
  height: 3px;
  width: 100px;
  border-radius: 2px;
  background-color: #2196F3;
}
</style>
