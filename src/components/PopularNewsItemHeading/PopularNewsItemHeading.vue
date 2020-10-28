<template lang="pug">
  h2.popular-news-heading
    a.popular-news-heading__content(
      href="#"
      :key="heading"
    ) {{heading}}
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
      default: "Ошибка! Новость не найдена!",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./PopularNewsItemHeading.pcss" scoped>
</style>

