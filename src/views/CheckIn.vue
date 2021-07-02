<template>
<v-container>
    <v-row justify="center">
    <v-col cols="4">
    <v-container></v-container>

      <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
       <v-text-field
      label="NSS"
    ></v-text-field>
    <v-select
    :items="['spoutnik', 'astrazeneca']"
    label="Marque du vaccin"
    ></v-select>
    <v-select
    :items="['Dose 1', 'Dose 2']"
    label="Numero de la dose"
    ></v-select>
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
        <v-card-title class="text-h5 grey lighten-2">
          prise de dose valide 
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="checkIn"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </v-form>
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
      },
      methods: {
        checkIn() {
          this.dialog = false
          this.$refs.form.reset()
        }
      }
  }
</script>