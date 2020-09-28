<template lang="pug">
  h2.heading
    a.heading__content(
      href="#"
      :key="shortNewsItem.title"
    ) {{shortNewsItem.heading}}
</template>
<script>
export default {
  props: {
    shortNewsItem: {
      type: Object,
      heading: "",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./ShortNewsItemHeading.pcss" scoped>
</style>

