<template lang="pug">
  .short-news__item
    .short-news__wrapper
      ShortNewsItemTime(
        v-bind:shortNewsItem="shortNewsItem"
      )
      ShortNewsItemHeading(
        v-bind:shortNewsItem="shortNewsItem"
      )
</template>
<script>
import ShortNewsItemTime from "../ShortNewsItemTime/ShortNewsItemTime.vue";
import ShortNewsItemHeading from "../ShortNewsItemHeading/ShortNewsItemHeading.vue";

export default {
  props: ['shortNewsItem'],
  components: {
    ShortNewsItemHeading,
    ShortNewsItemTime
  }
};
</script>
<style lang="postcss" src="./ShortNewsItem.pcss" scoped>
</style>

