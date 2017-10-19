<template>
  <div>
    <h2>Login</h2>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        name="email"
        label="E-mail"
        hint="Not shown to other users"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        name="password"
        label="Password"
        hint="At least 8 characters"
        v-model="password"
        min="8"
        :append-icon="showPassword ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (showPassword = !showPassword)"
        :type="showPassword ? 'password' : 'text'"
        :rules="passwordRules"
        counter
        required
      ></v-text-field>

      <v-btn @click="submit" :disabled="!valid">submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    showPassword: true,
    password: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must have at least 8 characters'
    ]
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        // axios.post('/api/submit', {
        //   name: this.name,
        //   email: this.email,
        //   select: this.select,
        //   checkbox: this.checkbox
        // })
      }
    }
  }
}
</script>