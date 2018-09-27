<template>
  <div>
    <h1 class="pb-4">{{ title }}</h1>
    <div v-html="descriptionHtml"/>
  </div>
</template>

<script>
export default {
  name: 'ToolHeader',
  props: {
    title: { type: String, required: true },
    descriptionHtml: { type: String, default: '' },
  },
  head() {
    return {
      title: `${this.title} - ${this.$t('appName')}`,
    }
  },
}
</script>
