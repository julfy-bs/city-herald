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
import NewsImage from "../NewsImage";
import NewsHeading from "../NewsHeading";
import NewsTime from "../NewsTime";
import NewsText from "../NewsText";
import ButtonsActivity from "../ButtonsActivity/ButtonsActivity";
export default {
  components: {ButtonsActivity, NewsText, NewsTime, NewsHeading, NewsImage}
};
</script>
<style lang="postcss" src="./BreakingNewsMain.pcss" scoped>
</style>

