<template>
  <v-layout wrap>
    <v-flex xs12>
      <tool-header
        :title="$t('tools.stopwatch.title')"
        :description-html="$t('tools.stopwatch.descriptionHtml')"
      />
    </v-flex>
    <v-flex xs12>
      <v-layout justify-center>
        <duration-display
          :value="duration"
        />
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-layout justify-center>
        <v-btn style="visibility: hidden"/>
        <v-btn
          dark
          color="primary"
          icon
          @click="onStartButtonClick"
        >
          <v-icon>{{ startButtonIcon }}</v-icon>
        </v-btn>
        <v-btn
          :style="{ visibility: state === 'reset' ? 'hidden' : 'visible' }"
          flat
          @click="onResetButtonClick"
        >
          {{ $t('tools.stopwatch.resetLabel') }}
        </v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import DurationDisplay from '~/components/DurationDisplay';
import ToolHeader from '~/components/ToolHeader';

export default {
  components: { DurationDisplay, ToolHeader },
  data() {
    return {
      state: "reset",
      accumulator: 0,
      startTime: null,
      currentTime: null,
      intervalId: null,
    };
  },
  computed: {
    duration() {
      if (this.state !== "running") {
        return this.accumulator;
      } else {
        return this.currentTime - this.startTime + this.accumulator;
      }
    },
    startButtonIcon() {
      return this.state === "running" ? "pause" : "play_arrow";
    },
  },
  methods: {
    onStartButtonClick() {
      if (this.state === "reset" || this.state === "paused") {
        this.state = "running";
        this.startTime = Date.now();
        this.currentTime = this.startTime;
        this.intervalId = setInterval(() => { this.currentTime = Date.now(); }, 33);
      } else if (this.state === "running") {
        this.state = "paused";
        clearInterval(this.intervalId);
        this.accumulator = this.accumulator + Date.now() - this.startTime;
        this.startTime = null;
        this.currentTime = null;
        this.intervalId = null;
      } else {
        throw new Error();
      }
    },
    onResetButtonClick() {
      this.state = "reset";
      clearInterval(this.intervalId);
      this.accumulator = 0;
      this.startTime = null;
      this.currentTime = null;
      this.intervalId = null;
    },
  },
}
</script>
