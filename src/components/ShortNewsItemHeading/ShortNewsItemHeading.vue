<template lang="pug">
  h2.heading
    a.heading__content(
      href="#"
      :key="heading"
    ) {{heading}}
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
      default: "",
      required: true
    }
  },
};
</script>
<style lang="postcss" src="./ShortNewsItemHeading.pcss" scoped>
</style>

