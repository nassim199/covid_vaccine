<template>
  <v-container>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-card>
          <v-container>
            <v-container>
              Informations personnelles
            </v-container>
            <v-row justify="space-around">
              <v-col cols="5">
                <v-text-field
                  :counter="10"
                  :rules="nameRules"
                  label="Nom"
                  required
                ></v-text-field>

                <v-text-field
                  :rules="nameRules"
                  label="Prenom"
                  required
                ></v-text-field>

                <v-select
                v-model="sexe"
                :items="items"
                :rules="[v => !!v || 'Sexe is required']"
                label="Sexe"
                required
              ></v-select>
              
              </v-col>
              <v-col cols="5">
                <v-select
                v-model="pieceIdd"
                :items="pieceIdItems"
                :rules="[v => !!v || 'Piece d\'identite is required']"
                label="Piece d'identite"
                required
              ></v-select>

              <v-text-field
                  :counter="10"
                  :rules="nameRules"
                  label="Numero piece d'identite"
                  required
                ></v-text-field>
                <v-text-field
                  label="Age"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-container></v-container>
        <v-card>
          <v-container>
            <v-container>
              Contact
            </v-container>
            <v-row justify="space-around">
              <v-col cols="5">
                <v-select
                label="Wilaya"
                ></v-select>
                <v-select
                label="Commune"
                ></v-select>

                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Adresse"
                ></v-textarea>
              </v-col>
              <v-col cols="5">
               
              <v-text-field
                  label="Telephone"
                ></v-text-field>

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
              ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-container></v-container>
        <v-card>
          <v-container>
            <v-row justify="space-around">
              <v-col cols="5">
                <v-combobox
                  :items="Comorbidites"
                  label="Comorbidités"
                  multiple
                  outlined
                  dense
                ></v-combobox>
                <v-checkbox
                  label="Dèja atteint de covid"
                ></v-checkbox>
              </v-col>
              <v-col cols="5">
               <v-textarea
                  outlined
                  name="input-7-4"
                  label="Autres informations"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <v-container>
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                v-bind="attrs"
                v-on="on"
              >
                S'inscrire
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 blue lighten-2 white--text">
                Inscription réussie!
              </v-card-title>

              <v-card-text>
                Vous etes maintenant inscri sur la plateforme Suivac.dz !
                <br/>Votre demande de vaccination a bien été enregistrée.
                Vous receverez un SMS ou un E-mail pour vous notifier sur le lieu ainsi que la date de votre premiere dose du vaccin.
                Vous aurez la possibilité de choisir la marque du vaccin que vous voulez prender.
                         
                </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="redirect"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-btn
            class="mr-4"
            @click="reset"
          >
            Reset
          </v-btn>
        </v-container>
      </v-form>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      sexe: null,
      items: [
        'Masculin',
        'Feminin',
      ],
      pieceId: null,
      pieceIdItems: [
        'Carte d\'identite',
        'Passeport',
        'Permis de conduite'
      ],
      checkbox: false,
      Comorbidites: [
        'Cancer',
        'Diabete',
        'HTA',
        'Immunodepression',
        'Maladie cardio vasculaire',
        'Maladie chronique des poumons',
        'Maladie du foie',
        'Maladie renale',
        'Obesite',
        'Troubles de coagulations',
        'Autres'
      ]
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      redirect() {
        this.$store.commit('login')
        this.$router.replace('/account')
      }
    },
  }
</script>