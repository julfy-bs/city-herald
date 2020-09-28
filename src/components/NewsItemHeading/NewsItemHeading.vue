<template lang="pug">
  .heading
    h2.heading__content(
      :key="newsItem.title"
      :class="{ 'heading__content--main': newsItem.id === 0, 'heading__content--default': newsItem.id > 0}"

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
<style lang="postcss" src="./NewsItemHeading.pcss" scoped>
</style>

