<template>
  <v-app dark>
    <Sidebar :drawer="drawer"></Sidebar>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>TBRPG</v-toolbar-title>
    </v-toolbar>

    <main>
      <v-content>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; Johannes Zwirchmayr 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue'
export default {
  components: { Sidebar },
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  }
}
</script>

<style lang="scss">
</style>
