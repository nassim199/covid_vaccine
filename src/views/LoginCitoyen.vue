<template>
<v-container>
    <v-row justify="center">
    <v-col cols="4">
    <v-container></v-container>
    <v-card>
    <v-container>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      label="Se souvenir de moi?"
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      S'authentifier
    </v-btn>

    <v-btn
      class="mr-4"
      @click="reset"
    >
      Reset 
    </v-btn>
  </v-form>
  </v-container>
  </v-card>
  </v-col>
    </v-row>
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
      select: null,
      checkbox: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
            this.$store.commit('login')
            this.$router.replace('/account')
        }
        
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>