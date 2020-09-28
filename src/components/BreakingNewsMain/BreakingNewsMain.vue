<template lang="pug">
  .news.news--top
    .news__wrapper.news__wrapper--top
      NewsImage
      NewsHeading
      NewsTime
      NewsText
      ButtonsActivity
</template>
<script>
import NewsImage from "../NewsItemImage";
import NewsHeading from "../NewsItemHeading";
import NewsTime from "../NewsItemTime";
import NewsText from "../NewsItemText";
import ButtonsActivity from "../ButtonsActivity/ButtonsActivity";
export default {
  components: {ButtonsActivity, NewsText, NewsTime, NewsHeading, NewsImage}
};
</script>
<style lang="postcss" src="./BreakingNewsMain.pcss" scoped>
</style>

