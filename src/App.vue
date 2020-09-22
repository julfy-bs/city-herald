<template lang="pug">
  #app
    header
      Nav
      Header
      Tabs
    .main-content
      .container.container--main
        .row__wrapper
          BannerFullWidth
        .row__wrapper
          main.column__wrapper.main-column

          aside.column__wrapper.side-column

    footer
      Breadcrumbs
      Footer
</template>
<script>
import Nav from "./components/Nav";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import BannerFullWidth from "./components/BannerFullWidth";

export default {
  name: "app",
  components: {
    Nav, Header, Tabs, Breadcrumbs, Footer, BannerFullWidth
  },
}
</script>

<style lang="postcss" src="global.pcss"
<style lang="postcss" scoped>

</style>
