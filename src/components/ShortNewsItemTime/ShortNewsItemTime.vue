<template lang="pug">
  .time
    .time__content(
      :key="shortNewsItem.time"
    ) {{shortNewsItem.time}} {{shortNewsItem.date}}
</template>
<script>
export default {
  props: {
    shortNewsItem: {
      type: Object,
      time: "",
      date: "",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./ShortNewsItemTime.pcss" scoped>
</style>

