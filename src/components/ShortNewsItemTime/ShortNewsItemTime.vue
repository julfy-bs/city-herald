<template lang="pug">
  .time
    .time__content(
      :key="date"
    ) {{date}}
</template>
<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./ShortNewsItemTime.pcss" scoped>
</style>

computed: {
dateAndTime() {
return {
time: this.shortNewsItem.time,
date: this.shortNewsItem.date
};
}
}