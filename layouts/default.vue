<template>
  <v-app dark>
    <ToolDrawer v-model="drawerOpen"/>
    <v-toolbar
      :clipped-left="true"
      app
    >
      <v-toolbar-side-icon @click="drawerOpen = !drawerOpen" />
      <v-toolbar-title v-text="$t('appName')"/>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <v-layout>
        <v-flex text-xs-center>
          <span class="text-xs-center">
            © 2018 Paul Hendry
          </span>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import ToolDrawer from '~/components/ToolDrawer'

export default {
  components: { ToolDrawer },
  data() {
    return {
      drawerOpen: null,
    }
  },
  head() {
    return {
      title: this.$t('appName'),
    }
  },
}
</script>
