<template lang="pug">
  .image
    .image__content.image__content--small(
    )

</template>
<script>
export default {
  props: {
    newsItem: {
      type: Object,
      imageUrl: "",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./NewsImage.pcss" scoped>
</style>

