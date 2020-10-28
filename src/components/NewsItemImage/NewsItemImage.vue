<template lang="pug">
  .image
    .image__content(
      :key="imageUrl"
      :style="giveBackgroundImage"
      :class="{ 'image__content--big': id === 0, 'image__content--small': id > 0}"
    )

</template>
<script>
export default {
  props: {
    imageUrl: {
      type: String,
      imageUrl: "",
      required: true
    },
    id: {
      type: Number,
      default: 0,
      required: true
    }
  },
  computed: {
    giveBackgroundImage() {
      return {
        'background-image': 'url(' + this.imageUrl + ')',
      };
    }
  }
};
</script>
<style lang="postcss" src="./NewsItemImage.pcss" scoped>
</style>


