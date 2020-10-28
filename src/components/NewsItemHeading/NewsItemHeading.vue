<template lang="pug">
  .heading
    h2.heading__content(
      :key="heading"
      :class="{ 'heading__content--main': id === 0, 'heading__content--default': id > 0}"

    ) {{heading}}
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0,
      required: true
    },
    heading: {
      type: String,
      default: "",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./NewsItemHeading.pcss" scoped>
</style>

