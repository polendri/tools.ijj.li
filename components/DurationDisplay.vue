<template>
  <div class="duration-display">
    <v-progress-circular
      :value="progress"
      size="128"
    />
    <div class="duration-display-time display-2 fill-height text-xs-center">
      <div :style="{ fontSize: displayValueFontSize }">
        {{ displayValue }}
      </div>
    </div>
  </div>
</template>

<script>
function padNum(n) {
  return n.toString().padStart(2, "0");
}

export default {
  name: 'DurationDisplay',
  props: {
    progress: { type: Number, default: 0 },
    value: { type: Number, required: true },
  },
  computed: {
    displayValue() {
      if (this.value === 0) {
        return "0";
      }

      const hours = Math.floor(this.value / 3600000);
      const minutes = Math.floor((this.value % 3600000) / 60000);
      const seconds = Math.floor((this.value % 60000) / 1000);
      const centiseconds = Math.floor((this.value % 1000) / 10);

      if (hours > 0) {
        return `${hours}:${padNum(minutes)}:${padNum(seconds)}`;
      } else if (minutes > 9) {
        return `${minutes}:${padNum(seconds)}`;
      } else if (minutes > 0) {
        return `${minutes}:${padNum(seconds)}:${padNum(centiseconds)}`;
      } else {
        return `${seconds}:${padNum(centiseconds)}`;
      }
    },
    displayValueFontSize() {
      return Math.min(45, 200 / this.displayValue.length) + "px";
    },
  },
}
</script>

<style lang="stylus" scoped>
.duration-display
  position: relative

.duration-display > .duration-display-time
  position: absolute
  left: 50%
  top: 50%
  height: 48px

.duration-display > .duration-display-time > div
  position: relative
  left: -50%
  top: -50%
</style>
