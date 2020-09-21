<template lang="pug">
  #app
    Nav
    Header
    Tabs
</template>
<script>
import Nav from "./components/Nav";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

export default {
  name: "app",
  components: {
    Nav, Header, Tabs
  },
}
</script>

<style lang="postcss" src="global.pcss"
<style lang="postcss" scoped>

</style>
