<template lang="pug">
  section.advertisements
    .advertisements__wrapper
      SectionTitle(
        :title="title"
      )
      ul.advertisements__list
        li.advertisements__item.advertisement(
          v-for="advertisement of advertisements"
          :key="advertisement.id"
        )
          .advertisement__wrapper
            .advertisement__left
              .user-photo(
                :key="advertisement.imageUrl"
                :style="{ backgroundImage: 'url(' + advertisement.imageUrl + ')' }"
              )
            .advertisement__right
              .user-name {{advertisement.name}}
              .user-text {{advertisement.text}}


</template>
<script>
import SectionTitle from "../SectionTitle/SectionTitle";
export default {
  props: {
    advertisements: {
      type: Array,
    },
    title: {
      type: String,
      default: "Объявления",
    }
  },
  components: {SectionTitle}
};
</script>
<style lang="postcss" src="./Advertisement.pcss" scoped>
</style>

