<template>
  <div class="account">
    <v-container>
      <v-container>
        <h3>
        Suivi de l'operation de vaccination
        </h3>
        <div class="souligner"/>
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
        
        <v-divider></v-divider>
        
        <v-stepper-step step="5">
          <v-btn disabled>
            imprimer badge de vaccination
          </v-btn>
        </v-stepper-step>

      </v-stepper-header>
    </v-stepper>
     <v-container>
       <h3>
        Je localise mon centre de test
       </h3>
       <div class="souligner"/>
      </v-container>
      <v-container>
      <v-col cols="5">
            <v-img
              :src="require('../assets/map.png')"
              contain
              height="300"
            />
      </v-col>
      </v-container>
       
    </v-container>
  </div>
</template>

<style scoped>
.souligner {
  height: 3px;
  width: 100px;
  border-radius: 2px;
  background-color: #2196F3;
}
</style>
