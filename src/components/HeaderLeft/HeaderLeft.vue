<template lang="pug">
  .header-left__wrapper
    form.search__form.search-form(
    )
      input.search-form__button(
        type="button"
      )
      input.search-form__input(
        type="text"
        name="search"
        placeholder="Поиск по сайту"
        required
      )

</template>
<script>
export default {
  components: {}
};
</script>
<style lang="postcss" src="./HeaderLeft.pcss" scoped>
</style>

