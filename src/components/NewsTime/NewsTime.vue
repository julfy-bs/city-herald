<template lang="pug">
  .time
    .time__content(
      :key="newsItem.time"
    ) Опубликовано {{newsItem.time}}
</template>
<script>
export default {
  props: {
    newsItem: {
      type: Object,
      time: "",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./NewsTime.pcss" scoped>
</style>

