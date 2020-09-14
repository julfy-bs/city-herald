<template lang="pug">
  .nav-list
    ul.nav-list__list
      NavListItem(
      v-for="link of links"
      :key="link.id"
      v-bind:link="link"
      )
</template>

<script>
import NavListItem from "../NavListItem";

export default {
  props: ['links'],
  components: {
    NavListItem
  }
};
</script>


<style lang="postcss" src="./NavList.pcss" scoped>
</style>

