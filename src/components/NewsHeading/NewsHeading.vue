<template lang="pug">
  .heading
    h2.heading__content(
      :key="newsItem.title"
    ) {{newsItem.heading}}
</template>
<script>
export default {
  props: {
    newsItem: {
      type: Object,
      heading: "",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./NewsHeading.pcss" scoped>
</style>

