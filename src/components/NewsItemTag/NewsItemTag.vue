<template lang="pug">
  .tag
    a.tag__content(
      :key="tag"
      :style="changeTagColor"
    ) {{tag}}
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: "",
    },
    tagColor: {
      type: String,
      default: "",
    }
  },
  computed: {
    changeTagColor() {
      return {
        'color': this.tagColor
      };
    }
  }
};
</script>
<style lang="postcss" src="./NewsItemTag.pcss" scoped>
</style>

