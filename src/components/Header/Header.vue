<template lang="pug">
  .header
    .container.container--header
      .header__wrapper.header-wrapper
        .header__left.search(
          v-if="window.width > 1024"
        )
          HeaderLeft
        .header__center.logo
          HeaderCenter
        .header__right(
          v-if="window.width > 1024"
        )
          HeaderRight
</template>
<script>
import SvgIcon from "../SvgIcon";
import HeaderLeft from "../HeaderLeft/HeaderLeft";
import HeaderCenter from "../HeaderCenter/HeaderCenter";
import HeaderRight from "../HeaderRight/HeaderRight";

export default {
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
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
  components: {HeaderRight, HeaderCenter, HeaderLeft, SvgIcon}
};
</script>
<style lang="postcss" src="./Header.pcss" scoped>
</style>

