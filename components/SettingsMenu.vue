<template>
  <v-list style="width: 16em">
    <v-list-tile>
      <v-list-tile-content>
        {{ $t('darkThemeLabel') }}
      </v-list-tile-content>
      <v-list-tile-action>
        <v-switch
          v-model="value.darkTheme"
          @change="onChange"
        />
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'SettingsMenu',
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          darkTheme: false,
        };
      },
    },
  },
  methods: {
    onChange() {
      this.$emit('input', this.value);
    },
  },
}
</script>
