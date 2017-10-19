<template>
  <div>
    <h2>Register</h2>
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
      <v-text-field
        name="password-confirm"
        label="Confirm password"
        hint="At least 8 characters"
        v-model="passwordConfirm"
        min="8"
        :append-icon="showPassword2 ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (showPassword2 = !showPassword2)"
        :type="showPassword2 ? 'password' : 'text'"
        :rules="passwordRules.concat(v => v === password || 'Passwords must match')"
        counter
        required
      ></v-text-field>
      <v-checkbox
        label="Do you agree?"
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        required
      ></v-checkbox>

      <v-btn @click="submit" :disabled="!valid">submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    showPassword: true,
    showPassword2: true,
    password: '',
    passwordConfirm: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must have at least 8 characters'
    ],
    checkbox: false
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