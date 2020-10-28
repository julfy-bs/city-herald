<template lang="pug">
  section.popular-news
    .popular-news__wrapper
      SectionTitle(
        :title="title"
      )
      .popular-news__list
        PopularNewsItem(
          v-bind:popularNewsItem="popularNewsItem"
          v-for="popularNewsItem of popularNewsItems"
          :key="popularNewsItem.id"
        )
</template>
<script>
import PopularNewsItem from "../PopularNewsItem/PopularNewsItem";
import SectionTitle from "../SectionTitle/SectionTitle";

export default {
  components: {
    PopularNewsItem,
    SectionTitle
  },
  props: {
    popularNewsItems: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: "Популярное"
    }
  }
};
</script>
<style lang="postcss" src="./PopularNews.pcss" scoped>
</style>

