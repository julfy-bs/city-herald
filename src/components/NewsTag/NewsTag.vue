<template lang="pug">
  .tag
    a.tag__content(
      :key="newsItem.tag"
      :style="{color:newsItem.tagColor}"
    ) {{newsItem.tag}}
</template>
<script>
export default {
  props: {
    newsItem: {
      type: Object,
      tag: "",
      tagColor: "$TextColor",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./NewsTag.pcss" scoped>
</style>

