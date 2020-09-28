<template lang="pug">
  .news__item
    .news__wrapper
      .news__left
        NewsItemTag(
          v-bind:newsItem="newsItem"
        )
        NewsItemHeading(
          v-bind:newsItem="newsItem"
        )
        NewsItemRecommendation(
          v-if="newsItem.recommendation === true"
        )
        NewsItemTime(
          v-bind:newsItem="newsItem"
        )
        NewsItemText(
          v-bind:newsItem="newsItem"
        )
        ButtonsActivity
      .news__right
        NewsItemImage(
          v-bind:newsItem="newsItem"
        )
</template>
<script>
import NewsItemTag from "../NewsItemTag";
import NewsItemImage from "../NewsItemImage";
import NewsItemHeading from "../NewsItemHeading";
import NewsItemTime from "../NewsItemTime";
import NewsItemText from "../NewsItemText";
import ButtonsActivity from "../ButtonsActivity/ButtonsActivity";
import NewsItemRecommendation from "../NewsItemRecommendation/NewsItemRecommendation";

export default {
  props: ['newsItem'],
  components: {
    NewsItemRecommendation,
    ButtonsActivity,
    NewsItemText,
    NewsItemTime,
    NewsItemHeading,
    NewsItemImage,
    NewsItemTag
  }
};
</script>
<style lang="postcss" src="./NewsItem.pcss" scoped>
</style>

