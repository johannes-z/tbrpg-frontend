<template>
  <div>
    <h2>{{ character.name }}</h2>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        name="name"
        label="Name"
        v-model="character.name"
        :rules="[ v => !!v || 'Name is required' ]"
        required
      ></v-text-field>
      <v-text-field
        name="avatar"
        label="Avatar"
        v-model="character.avatar"
      ></v-text-field>

      <v-btn @click="submit" :disabled="!valid">submit</v-btn>
      <v-btn>cancel</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  beforeRouteEnter (to, from, next) {
    let character = to.params.character
    axios.get(`http://localhost:8000/characters/${character}`).then(r => {
      next(vm => { vm.character = r.data })
    }).catch(reason => {
    })
  },
  data: () => ({
    valid: true,
    character: {
      avatar: '',
      name: ''
    }
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
