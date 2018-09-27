<template>
  <v-navigation-drawer
    app
    clipped
  >
    <v-list dense>
      <v-list-group
        v-for="(toolGroup, i) in toolGroups"
        :key="i"
        :prepend-icon="toolGroup.icon"
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
</template>

<script>
export default {
  data() {
    return {
      toolGroups: [
        {
          icon: 'functions',
          title: this.$t('toolGroups.math'),
          tools: [
            { title: this.$t('tools.calculator.title'), to: '/calculator' },
          ],
        },
        {
          icon: 'code',
          title: this.$t('toolGroups.programming'),
          tools: [
            { title: this.$t('tools.uriEncoder.title'), to: '/uri-encoder' },
          ],
        },
        {
          icon: 'edit',
          title: this.$t('toolGroups.writing'),
          tools: [
            { title: this.$t('tools.wordCount.title'), to: '/word-count' },
          ],
        },
      ],
    }
  },
}
</script>
