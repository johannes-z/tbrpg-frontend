<template>
  <div>
    {{ data }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  beforeRouteEnter (to, from, next) {
    axios.get('http://localhost:8000/about').then(response => {
      next(vm => { vm.data = response.data })
      console.log(response)
    })
  },
  data: () => ({
    data: ''
  })
}
</script>
