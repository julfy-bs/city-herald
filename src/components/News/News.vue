<template lang="pug">
  .news
    .news__item(
      v-for="newsItem of newsItems"
      :key="newsItem.id"
    )
      .news__wrapper
        .news__left
          NewsTag(
            v-bind:newsItem="newsItem"
          )
          NewsHeading(
            v-bind:newsItem="newsItem"
          )
          NewsRecommendation(
            v-if="newsItem.recommendation === true"
          )
          NewsTime(
            v-bind:newsItem="newsItem"
          )
          NewsText(
            v-bind:newsItem="newsItem"
          )
          ButtonsActivity
        .news__right
          NewsImage(
            v-bind:newsItem="newsItem"
          )
</template>
<script>
import NewsTag from "../NewsTag";
import NewsImage from "../NewsImage";
import NewsHeading from "../NewsHeading";
import NewsTime from "../NewsTime";
import NewsText from "../NewsText";
import ButtonsActivity from "../ButtonsActivity/ButtonsActivity";
import NewsRecommendation from "../NewsRecommendation/NewsRecommendation";

export default {
  props: ['newsItems'],
  components: {
    NewsRecommendation,
    ButtonsActivity,
    NewsText,
    NewsTime,
    NewsHeading,
    NewsImage,
    NewsTag
  }
};
</script>
<style lang="postcss" src="./News.pcss" scoped>
</style>

