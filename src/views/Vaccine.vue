<template>
  <div>

  <v-img
      :src="require('../assets/op vac top-8.png')"
      class="my-3"
      contain
    />
  <v-container>
    
    <v-container></v-container>
    <v-card>
      <v-card-title class="text-h5 blue lighten-2 white--text">
      ASPECT PRATIQUE DE LA VACCINATION ANTI-COVID : CIRCUIT DU FUTUR VACCINE
    </v-card-title>
    <v-container>

     <v-timeline
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item>
        <span slot="opposite">1ére étape</span>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Insciption à la plateforme SuiVac
          </v-card-title>
          <v-card-text>
            Chaque personne qui veut se vacciner doit s'inscrire sur la plateforme Suivac pour faire une demande de vaccination.
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item>
        <span slot="opposite">2éme étape</span>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Plannification de la 1ére dose
          </v-card-title>
          <v-card-text>
            Après avoir renseigner ses informations, le système planifie le rendez-vous de la 1ére dose.
            La personne recevra donc une notification par telephone ou par E-mail, lui indiquant le lieux ainsi que la date de son rendez-vous.
            <br/>Une fois arrivé au lieu de la vaccination indiquée sur son invitation, le sujet à vacciner sera reçu par des agents d’accueil qui vont lui rappeler le respect des mesures barrières et lui attribuer un numéro d’attente. Quand son tour arrivera, le sujet à vacciner présentera sa carte d’identité nationale pour son enregistrement sur le registre de vaccination
             </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item>
        <span slot="opposite">3éme étape</span>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Vaccination de la 1ére dose
          </v-card-title>
          <v-card-text>
            Le sujet inscrit sera vacciné par la première dose, il recevra par la suite un rendez-vous pour la 2ème dose du vaccin qui sera confirmé ultérieurement par un SMS ou un E-mail.</v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item>
        <span slot="opposite">4éme étape
        </span>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Vaccination de la 2éme dose
          </v-card-title>
          <v-card-text>
            Le jour de son RDV, le sujet à vacciner se présente au lieu de la vaccination. Après un interrogatoire sur son état de santé et les éventuels effets indésirables ressentis après la 1ère dose, la 2ème dose lui sera administrée. La personne est considérée à ce moment-là, complètement vaccinée.
            </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item>
        <span slot="opposite">5éme étape</span>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Obtention du pass vaccinal
          </v-card-title>
          <v-card-text>
            Après chaque dose de vaccin administré, le sujet vacciné sera informé par un professionnel de la santé, qui lui explique :
              <br/>- La nécessité de se conformer aux mesures barrières et la distanciation physique dans l’attente du délai d’efficacité du vaccin ;
              <br/>- L’éventualité d’apparition des effets indésirables bénins du vaccin et comment les gérer ;
              <br/>La nécessité de déclarer tout évènement indésirable soit à distance via ou à défaut au niveau du site de vaccination.
              <br/>Le vacciné peut bénéficier d’un pass vaccinal téléchargeable et imprimable à partir du portail web.
              </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    </v-container>
 
    </v-card>
  </v-container>
  </div>
</template>
