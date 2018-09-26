<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawerOpen"
      app
      clipped
    >
      <v-list dense>
        <v-list-group
          v-for="(toolGroup, i) in toolGroups"
          :key="i"
          :prepend-icon="toolGroup.icon"
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>{{ toolGroup.title }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            v-for="(tool, i) in toolGroup.tools"
            :to="tool.to"
            :key="i"
            router
            exact
          >
            <v-list-tile-action/>
            <v-list-tile-content>
              <v-list-tile-title v-text="tool.title" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="true"
      app
    >
      <v-toolbar-side-icon @click="drawerOpen = !drawerOpen" />
      <v-toolbar-title v-text="$t('appName')"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <v-layout>
        <v-flex text-xs-center>
          <span class="text-xs-center">
            {{ $t('copyright') }}
          </span>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawerOpen: null,
      toolGroups: {
        programming: {
          icon: 'code',
          title: this.$t('toolGroups.programming'),
          tools: [
            { title: this.$t('tools.uriEncoder.title'), to: '/uri-encoder' },
          ],
        },
      },
    }
  },
  head() {
    return {
      title: this.$t('appName'),
    }
  },
}
</script>
