<template>
<div>
  <v-img
      :src="require('../assets/faq sans vide-8.png')"
      class="my-3"
      contain
    /> 
 <v-container>
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
</div>
</template>

<script>

  export default {
    name: 'Faq',
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
    }
  }
</script>