<template lang="pug">
  .popular-news__image.popular-news-image
    .popular-news-image__content(
      :key="imageUrl"
      :style="backgroundImageComputedStyle"
      :class="{ 'popular-news-image__content--first': id === 0, 'popular-news-image__content--other': id > 0}"
    )
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0,
      required: true
    },
    imageUrl: {
      type: String,
      default: "",
    }
  },
  computed: {
    backgroundImageComputedStyle() {
      return {
        'background-image': 'url(' + this.imageUrl + ')'
      };
    }
  }
};
</script>
<style lang="postcss" src="./PopularNewsItemImage.pcss" scoped>
</style>

