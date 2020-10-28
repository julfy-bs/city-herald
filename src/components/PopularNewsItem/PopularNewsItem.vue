<template lang="pug">
  .popular-news__item
    .popular-news-item__content
      PopularNewsItemImage(
        v-bind:imageUrl="popularNewsItem.imageUrl"
        v-bind:id="popularNewsItem.id"
      )
      .popular-news-content__wrapper
        .popular-news-content__left-column
          .popular-news-content__counter(

          ) 0{{popularNewsItem.id + 1}}
        .popular-news-content__right-column
          PopularNewsItemHeading(
            v-bind:heading="popularNewsItem.heading"
          )
          NewsItemRecommendation(
            v-if="popularNewsItem.recommendation === true"
          )
</template>
<script>
import NewsItemRecommendation from "../NewsItemRecommendation/NewsItemRecommendation";
import PopularNewsItemHeading from "../PopularNewsItemHeading/PopularNewsItemHeading";
import PopularNewsItemImage from "../PopularNewsItemImage/PopularNewsItemImage";
export default {
  props: {
    popularNewsItem: {
      type: Object,
      default: {},
      required: true
    },

  },
  components: {
    NewsItemRecommendation,
    PopularNewsItemHeading,
    PopularNewsItemImage
  }
};
</script>
<style lang="postcss" src="./PopularNewsItem.pcss" scoped>
</style>

