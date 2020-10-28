<template lang="pug">
  section.short-news
    .short-news__wrapper
      SectionTitle(
        :title="title"
      )
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
import SectionTitle from "../SectionTitle/SectionTitle.vue";

export default {
  props: {
    shortNewsItems: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: "Новостная лента"
    }
  },
  components: {
    ShortNewsItem,
    SectionTitle
  }
};
</script>
<style lang="postcss" src="./ShortNews.pcss" scoped>
</style>

