<template>
  <v-navigation-drawer
    persistent
    v-model="drawer"
    enable-resize-watcher
    app
  >
    <v-list dense>
      <v-list-tile v-for="route in routes" 
                   :key="route.path"  
                   :to="route.path"
                   v-if="route.sidebar"
                   exact
      >
        <v-list-tile-action>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ route.title || route.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import routes from '@/router/routes.js'

export default {
  props: {
    drawer: {
      type: Boolean
    }
  },
  data: () => ({
    routes
  })
}
</script>