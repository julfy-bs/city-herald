<template lang="pug">
  .news__text.text(
    :key="text"
  )
    p.text__content {{text}}
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./NewsItemText.pcss" scoped>
</style>

