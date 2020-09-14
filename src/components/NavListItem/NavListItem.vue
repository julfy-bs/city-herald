<template lang="pug">
  li.nav-list__item
    a.nav-list__link(
      href="#"
      :key="link.title"
    ) {{ link.title }}
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      title: "",
      required: true
    }
  },
  components: {}
};
</script>


<style lang="postcss" src="./NavListItem.pcss" scoped>
</style>

