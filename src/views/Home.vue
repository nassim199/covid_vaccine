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
                Mode d'action
              </v-card-title>

              <v-card-text>
                La vaccination permet de sauver des millions de vies. Son mode d’action consiste à stimuler et à préparer le système immunitaire à reconnaître et à lutter contre les virus qu’ils ciblent... 
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
                Fiabilité & efficacité
              </v-card-title>

              <v-card-text>
                La fiabilité et l’efficacité des vaccins adoptés en Algérie pour la campagne de vaccination contre le virus de la COVID-19 ont été confirmées à travers des constats positifs ...
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
                Population cible
              </v-card-title>

              <v-card-text>
                La campagne de vaccination contre le virus de la COVID-19 cible les citoyens âgés de plus de 17 ans, selon un schéma vaccinal en deux injections.
                <br/>La priorité sera accordée à...
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
                Dispositif
              </v-card-title>

              <v-card-text>
                La stratégie Nationale de vaccination contre le virus de la COVID-19 a prévu une campagne massive de vaccination qui sera effectuée sur l’ensemble du territoire National...
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
                Effets secondaires
              </v-card-title>

              <v-card-text>
                Pour les vaccins choisis par l’Algérie et comme pour tout vaccin, de rares effets indésirables, bénins à modérés (douleurs au site d‘injection, réaction cutanée, maux de tête, une légère fébricule)...
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
                Disponibilité
              </v-card-title>

              <v-card-text>
                Actuellement, le vaccin est disponible dans les stations de vaccination.
                <br/>Les vaccins disponibles sont ceux du laboratoire « Sputnik V », du laboratoire « Astrazenica »...
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
            question: "Comment fonctionnent les vaccins?",
            reponse: "Les vaccins stimulent les réponses immunitaires protectrices du corps humain de sorte que, si une personne est infectée par un agent pathogène, le système immunitaire peut rapidement empêcher l'infection de se propager dans le corps et de provoquer des maladies. De cette manière, les vaccins imitent une infection naturelle mais sans pour autant provoquer la maladie.\nToutes les personnes infectées par le SRAS-CoV-2 ne développent pas de maladie (Covid-19 est la maladie causée par le virus SARS-CoV-2). Ces personnes ont une infection asymptomatique mais peuvent toujours transmettre le virus à d'autres. La plupart des vaccins n'empêchent pas complètement l'infection, mais empêchent l'infection de se propager dans le corps et de provoquer des maladies. De nombreux vaccins peuvent également empêcher la transmission, conduisant potentiellement à la protection collective grâce à laquelle les personnes non vaccinées sont protégées de l'infection par les personnes vaccinées qui les entourent, car elles ont moins de risque d'être exposées au virus."
          },
          {
            question: "Comment savoir si le vaccin contre le virus de la Covid-19 est sur?",
            reponse: "A l’instar des autres vaccins, les vaccins développés pour lutter contre le virus de la COVID-19 doivent subir des tests approfondis et rigoureux avant leur introduction dans un pays. Une fois utilisés, ils seront surveillés en permanence pour s'assurer qu'ils sont sans danger pour les personnes qui les reçoivent.\nIl existe de nombreux mécanismes de protection solides pour assurer l’innocuité des vaccins contre le virus de la COVID-19. Ces essais, auxquels prennent part des personnes en bonne santé ou ayant une pathologie équilibrée, sont spécialement conçus pour repérer tout effet indésirable courant ou d’autres problèmes d’innocuité.\nSi un essai clinique montre qu’un vaccin contre le virus de la COVID-19 est sûr et efficace, une série d’examens sur l’efficacité et l’innocuité doit être menée, y compris l’examen et l’approbation réglementaire dans le pays où le vaccin est fabriqué"
          },
          {
            question: "Pourquoi le processus de développement et de la production des vaccins contre le virus de la Covid-19 ont été rapides?",
            reponse: "Traditionnellement, il faut de nombreuses années pour mettre au point un vaccin, confirmer son innocuité et son efficacité et le produire en quantités suffisantes pour un usage public. Ce délai a été considérablement raccourci pour les vaccins contre le SRAS-CoV-2. Cela a été rendu possible de plusieurs manières :\n- Certains essais cliniques ont combiné les phases 1 et 2 pour évaluer la sécurité et les réponses immunitaires.\n- En raison du nombre élevé de nouveaux cas de COVID-19, des études multicentriques dans plusieurs pays ont permis de comparer la différence entre ceux qui ont reçu le vaccin et ceux qui ont reçu le placebo.\n- Les gouvernements ont fortement investi dans le renforcement de la recherche-développement ainsi que les capacités de production d’un grand nombre de doses avant que les résultats des essais de phase 3 ne soient disponibles. Aucun de ces facteurs qui contribuent au développement accéléré d'un vaccin contre le SRAS-CoV-2 ne laissent déduire que la sécurité, l'intégrité scientifique ou éthique ont été compromises ou que des raccourcis ont été faits.\n- Les plateformes de production vaccinales existaient déjà avec d’autres vaccins et sont actuellement utilisées pour ces vaccins"
          },
          {
            question: "Qui approuve les vaccins contre la Covid-19 en Algérie?",
            reponse: "Dans les pays où les vaccins contre le virus de la COVID-19 sont fabriqués, des investigateurs nationaux supervisent les différentes étapes de développement du vaccin en s’appuyant sur des normes internationales rigoureuses en matière de pratique clinique et d’éthique.\nEn Algérie, l’autorité sanitaire (Direction des Médicaments et de la Pharmacie), selon la réglementation en vigueur, est chargée d’approuver l’utilisation de tout nouveau médicament ou vaccin."
          },
          {
            question: "La vaccination permettra-t-elle d'empecher de contracter la Covid-19?",
            reponse: "Les vaccins contre le virus de la COVID-19 sont soigneusement évalués dans des essais cliniques et ne seront autorisés ou approuvés que s’ils sont efficaces.\nSur la base des données disponibles, on estime que le fait de se faire vacciner contre le virus de la COVID-19 peut aider à ne pas tomber gravement malade même en cas d’infection par le virus.\nSe faire vacciner peut également protéger les proches en particulier les personnes à risque accru de complication grave due à la COVID-19.\nLes recherches continuent à étudier l'effet de la vaccination contre le virus de COVID-19, sur sa capacité à empêcher les gens de propager le virus ainsi que la durée de la protection. Toutefois, le risque de maladie grave et de décès dus à la COVID-19 l'emporte de loin sur les avantages de l'immunité naturelle."
          },
          {
            question: "Si j'ai déja eu la Covid-19 et que j'ai guéri, dois-je encore me faire vacciner avec un vaccin Covid-19?",
            reponse: "Actuellement, et en pratique, il n'y a pas suffisamment de données pour déterminer comment une infection antérieure par COVID-19 affecte l'efficacité du vaccin. On sait que l'immunité naturelle contre le virus diminue avec le temps, donc actuellement, les personnes qui ont déjà été infectées, sont éligibles à recevoir le vaccin"
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
