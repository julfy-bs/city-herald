<template lang="pug">
  .news__text.text(
    :key="newsItem.text"
  )
    p.text__content {{newsItem.text}}
</template>
<script>
export default {
  props: {
    newsItem: {
      type: Object,
      text: "",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./NewsText.pcss" scoped>
</style>

