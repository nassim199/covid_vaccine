<template>
  <div class="account">
    <v-container>
      <v-container>
        Suivi de l'operation de vaccination
      </v-container>
    <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step step="1">
          Rendez-vous dose 1
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2">
          Prise de 1ere dose
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          Rendez-vous dose 2
        </v-stepper-step>
        
        <v-divider></v-divider>

        <v-stepper-step step="4">
          Prise de dose 2
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    </v-container>
  </div>
</template>
