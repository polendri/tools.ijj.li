<template>
  <v-layout wrap>
    <v-flex xs12>
      <tool-header :title="$t('tools.wordCount.title')"/>
    </v-flex>
    <v-flex xs12>
      <v-textarea
        :label="$t('tools.wordCount.inputLabel')"
        v-model="text"
        box
      />
    </v-flex>
    <v-flex xs6>
      <v-list-tile>
        <v-list-tile-content>{{ $t('tools.wordCount.characterCountLabel') }}</v-list-tile-content>
        <v-list-tile-action>{{ characterCount }}</v-list-tile-action>
      </v-list-tile>
    </v-flex>
    <v-flex xs6>
      <v-list-tile>
        <v-list-tile-content>{{ $t('tools.wordCount.wordCountLabel') }}</v-list-tile-content>
        <v-list-tile-action>{{ wordCount }}</v-list-tile-action>
      </v-list-tile>
    </v-flex>
  </v-layout>
</template>

<script>
import ToolHeader from '~/components/ToolHeader';

export default {
  components: { ToolHeader },
  data() {
    return {
      text: '',
    };
  },
  computed: {
    characterCount() {
      return this.text.length;
    },
    wordCount() {
      return this.text.split(/\s+/).filter(w => w !== '').length;
    },
  },
}
</script>
