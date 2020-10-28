<template lang="pug">
  .section__title-wrapper
    h2.section__title {{title}}
    .section__title-after(
      :style="afterComputedStyle"
    )

</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Заголовок",
      required: true
    },
    color: {
      type: String,
      default: "#438573"
    },
    width: {
      type: Number,
      default: 70
    }
  },
  components: {},
  computed: {
    afterComputedStyle() {
      return {
        'background-color': this.color,
        'width': this.width + "px"
      };
    }
  }
};
</script>
<style lang="postcss" src="./SectionTitle.pcss" scoped>
</style>

