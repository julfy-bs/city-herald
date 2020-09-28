<template lang="pug">
  .image
    .image__content(
      :class="{ 'image__content--big': newsItem.id === 0, 'image__content--small': newsItem.id > 0}"
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
<style lang="postcss" src="./NewsItemImage.pcss" scoped>
</style>


