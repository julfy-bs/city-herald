<template lang="pug">
  .time
    .time__content(
      :key="date"
    ) Опубликовано {{time}} {{date}}
</template>
<script>
export default {
  props: {
    time: {
      type: String,
      default: "",
      required: true
    },
    date: {
      type: String,
      default: "",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./NewsItemTime.pcss" scoped>
</style>

