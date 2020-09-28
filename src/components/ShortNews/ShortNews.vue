<template lang="pug">
  .short-news
    .short-news__wrapper
      .short-news__title Новостная лента
      .short-news__content
        ShortNewsItem(
          v-bind:shortNewsItem="shortNewsItem"
          v-for="shortNewsItem of shortNewsItems"
          :key="shortNewsItem.id"
        )
      a.short-news__link(
        href="#"
      ) Все новости
</template>
<script>
import ShortNewsItem from "../ShortNewsItem/ShortNewsItem.vue";

export default {
  props: ['shortNewsItems'],
  components: {
    ShortNewsItem,

  }
};
</script>
<style lang="postcss" src="./ShortNews.pcss" scoped>
</style>

