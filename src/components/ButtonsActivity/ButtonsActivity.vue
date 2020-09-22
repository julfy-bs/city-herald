<template lang="pug">
  .buttons.buttons__activity
    button.buttons__like
    button.buttons__repost
    button.buttons__comment Комментарии
</template>
<script>
import BreakingNewsMain from '../BreakingNewsMain';

export default {
  components: {
    BreakingNewsMain
  }
};
</script>
<style lang="postcss" src="./ButtonsActivity.pcss" scoped>
</style>

