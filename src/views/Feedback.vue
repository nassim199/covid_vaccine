<template>
<v-container>
    <v-row justify="center">
    <v-col cols="4">
    <v-container></v-container>
     <v-text-field
      label="E-mail"
    ></v-text-field>

    <v-text-field
      label="Objet du feedback"
    ></v-text-field>
    <v-textarea
        outlined
        name="input-7-4"
        label="Vos remarques"
    ></v-textarea>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Envoyer
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 blue lighten-2 white--text">
          Nous vous remercions pour votre feedback.
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </v-col>
    </v-row>
    </v-container>
</template>

<script>
  export default {
      data() {
          return {
              dialog: false
          }
      }
  }
</script>