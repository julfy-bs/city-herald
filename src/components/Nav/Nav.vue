<template lang="pug">
  nav.top-nav
    .container.container--header
      .top-nav__wrapper.top-nav-wrapper
        .top-nav-wrapper__left
          NavBurger
          NavBurgerSidebar
          NavList(
            v-bind:links="links"
            v-if="window.width > 1024"
          )
          HeaderLeft(
            v-if="window.width < 1025 && window.width > 480"
          )
        .top-nav-wrapper__right
          NavAge(
            v-if="window.width > 1024"
          )
          NavVersion(
            v-if="window.width > 1024"
          )
          NavLogin(
            v-if="window.width > 1024"
          )
          HeaderLeft(
            v-if="window.width < 480"
          )
          HeaderRight(
            v-if="window.width < 1025 && window.width > 480"
          )
</template>
<script>
import NavList from '../NavList'
import NavBurger from '../NavBurger'
import NavLogin from '../NavLogin'
import NavVersion from "../NavVersion/NavVersion";
import NavAge from "../NavAge/NavAge";
import NavBurgerSidebar from "../NavBurgerSidebar/NavBurgerSidebar";
import HeaderLeft from "../HeaderLeft/HeaderLeft";
import HeaderRight from "../HeaderRight/HeaderRight";

export default {
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      links: [
        {id: 1, title: 'Об издании', href: "/about"},
        {id: 2, title: 'Реклама', href: "/ad"},
        {id: 3, title: 'Объявления', href: "/promo"},
        {id: 4, title: 'Галерея', href: "/gallery"},
        {id: 5, title: 'Контакты', href: "/contact"},
      ],
      activeTabId: 0,
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  components: {
    HeaderRight,
    HeaderLeft,
    NavBurgerSidebar,
    NavAge,
    NavVersion,
    NavList, NavBurger, NavLogin,
  }
};
</script>
<style lang="postcss" src="./Nav.pcss" scoped>
</style>

