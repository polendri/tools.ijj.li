<template>
  <v-app :dark="settings.darkTheme">
    <ToolDrawer v-model="drawerOpen"/>
    <v-toolbar
      :clipped-left="true"
      app
      color="secondary"
      dark
    >
      <v-toolbar-side-icon @click="drawerOpen = !drawerOpen" />
      <img
        src="/logo.svg"
        width="32"
        height="32"
        alt="Logo"
      >
      <v-toolbar-title v-text="$t('appName')"/>
      <v-spacer/>
      <v-menu
        :close-on-content-click="false"
        offset-y
      >
        <v-btn
          slot="activator"
          flat
          icon
        >
          <v-icon>settings</v-icon>
        </v-btn>
        <settings-menu
          v-model="settings"
          @input="onChange"
        />
      </v-menu>
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
import SettingsMenu from '~/components/SettingsMenu'
import ToolDrawer from '~/components/ToolDrawer'
import { loadSettings, saveSettings } from '~/settings'

export default {
  components: { SettingsMenu, ToolDrawer },
  data() {
    return {
      drawerOpen: null,
      settings: loadSettings(),
    };
  },
  methods: {
    onChange(settings) {
      saveSettings(settings);
    },
  },
  head() {
    return {
      title: this.$t('appName'),
    };
  },
}
</script>
