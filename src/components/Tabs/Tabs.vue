<template lang="pug">
  .tabs
    .container.container--tabs
      .tabs__wrapper.tabs-wrapper
        ul.tabs__list
          .tabs__item(
            v-for="tab of tabs"
            :key="tab.id"
            v-bind:tab="tab"
          )
            a.tabs__link(
              :key="tab.title"
            ) {{ tab.title }}
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {id: 0, title: 'Главная', href: ""},
        {id: 1, title: 'Новости', href: ""},
        {id: 2, title: 'Официально', href: ""},
        {id: 3, title: 'Наши люди', href: ""},
        {id: 4, title: 'Гости редакции', href: ""},
        {id: 5, title: 'Благое дело', href: ""},
        {id: 6, title: 'Происшествия', href: ""},
        {id: 7, title: 'Экономика', href: ""},
      ],
      activeTabId: 0,
    }
  },
};
</script>
<style lang="postcss" src="./Tabs.pcss" scoped>
</style>

