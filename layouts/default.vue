<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawerOpen"
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawerOpen = !drawerOpen" />
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      app
      inset
    >
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
      items: [
        { icon: 'code', title: this.$t('tools.uriEncoder.title'), to: '/uri-encoder' }
      ],
      title: 'ijj.li Tools'
    }
  },
  head() {
    return {
      title: this.$t('appName'),
    }
  },
}
</script>
