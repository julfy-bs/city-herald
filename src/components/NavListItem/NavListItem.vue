<template lang="pug">
  li.nav-list__item
    <!-- router-link( -->
    <!--  :to="link.href" -->
    <!--  :data-text="link.title" -->
    <!--  exact-active-class="nav-list__link--active" -->
    <!-- ).nav-list__link -->

    a.nav-list__link(
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

