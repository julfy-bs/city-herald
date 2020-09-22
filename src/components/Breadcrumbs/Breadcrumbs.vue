<template lang="pug">
  .breadcrumbs
    .container.container--main
      .breadcrumbs__wrapper.breadcrumbs-wrapper
        ul.breadcrumbs__list
          .breadcrumbs__item(
            v-for="breadcrumb of breadcrumbs"
            :key="breadcrumb.id"
            v-bind:breadcrumb="breadcrumb"
          )
            a.breadcrumbs__link(
              :key="breadcrumb.title"
            ) {{ breadcrumb.title }}
</template>
<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {id: 0, title: 'Главная', href: ""},
        {id: 1, title: 'Рубрики', href: ""},
        {id: 2, title: 'Наши люди', href: ""},
      ],
      activeTabId: 0,
    }
  },
};
</script>
<style lang="postcss" src="./Breadcrumbs.pcss" scoped>
</style>

