<template>
  <div class="character-wrapper">
    <card
      v-for="character in characters" :key="character.id"
      :character="character">
    </card>
  </div>
</template>

<script>
import Card from './partial/card.vue'
import axios from 'axios'

export default {
  components: { Card },
  beforeRouteEnter (to, from, next) {
    axios.get('http://localhost:8000/characters').then(response => {
      next(vm => { vm.characters = response.data })
    })
  },
  data: () => ({
    characters: []
  })
}
</script>

<style lang="scss" scoped>
.character-wrapper {
  text-align: center;
}
</style>
