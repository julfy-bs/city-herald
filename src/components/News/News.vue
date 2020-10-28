<template lang="pug">
  section.news
    NewsItem(
      v-bind:newsItem="newsItem"
      v-for="newsItem of newsItems"
      :key="newsItem.id"
    )
</template>
<script>
import NewsItem from "../NewsItem/NewsItem.vue";

export default {
  props: ['newsItems'],
  components: {
    NewsItem,

  }
};
</script>
<style lang="postcss" src="./News.pcss" scoped>
</style>

