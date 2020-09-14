<template lang="pug">
  .header-right__wrapper
    HeaderRightSocials
    HeaderRightSubscribe
</template>
<script>
import SvgIcon from "../SvgIcon";
import HeaderRightSocials from "../HeaderRightSocials/HeaderRightSocials";
import HeaderRightSubscribe from "../HeaderRightSubscribe/HeaderRightSubscribe";

export default {
  components: {HeaderRightSubscribe, HeaderRightSocials, SvgIcon}
};
</script>
<style lang="postcss" src="./HeaderRight.pcss" scoped>
</style>

