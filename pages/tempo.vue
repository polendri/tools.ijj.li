<template>
  <v-layout wrap>
    <v-flex xs12>
      <tool-header
        :title="$t('tools.tempo.title')"
        :description-html="$t('tools.tempo.descriptionHtml')"
      />
    </v-flex>
    <v-flex xs12>
      <v-flex
        xs12
        class="display-3"
      >
        {{ bpm }}
      </v-flex>
      <v-flex xs12>
        <v-btn
          color="primary"
          large
          @click="onTap"
        >
          {{ $t('tools.tempo.tapLabel') }}
        </v-btn>
        <v-btn
          color="secondary"
          large
          @click="onReset"
        >
          {{ $t('tools.tempo.resetLabel') }}
        </v-btn>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import ToolHeader from '~/components/ToolHeader';

export default {
  components: { ToolHeader },
  data() {
    return {
      average: 0,
      lastTapTime: null,
      numTaps: 0,
    };
  },
  computed: {
    bpm() {
      const value = Math.round(this.average === 0 ? 0 : (60000 / this.average)).toLocaleString()
      return value + ' ' +this.$t('tools.tempo.bpmText');
    },
  },
  methods: {
    onTap() {
      if (this.lastTapTime === null) {
        this.average = 0;
        this.lastTapTime = Date.now();
      } else {
        const tapTime = Date.now();
        this.average = ((tapTime - this.lastTapTime) + (this.numTaps * this.average)) / (this.numTaps + 1);
        this.lastTapTime = tapTime;
        this.numTaps += 1;
      }
    },
    onReset() {
      this.average = 0;
      this.lastTapTime = null;
      this.numTaps = 0;
    },
  },
}
</script>
