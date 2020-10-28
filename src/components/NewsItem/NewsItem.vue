<template lang="pug">
  .news__item
    .news__wrapper
      .news__left
        NewsItemTag(
          v-bind:tag="newsItem.tag"
          v-bind:tagColor="newsItem.tagColor"
        )
        NewsItemHeading(
          v-bind:heading="newsItem.heading"
          v-bind:id="newsItem.id"
        )
        NewsItemRecommendation(
          v-if="newsItem.recommendation === true"
        )
        NewsItemTime(
          v-bind:time="newsItem.time"
          v-bind:date="newsItem.date"
        )
        NewsItemText(
          v-bind:text="newsItem.text"
        )
        ButtonsActivity
      .news__right
        NewsItemImage(
          v-bind:imageUrl="newsItem.imageUrl"
          v-bind:id="newsItem.id"
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
  props: {
    newsItem: {
      type: Object,
      default: {},
      required: true
    }
  },
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

