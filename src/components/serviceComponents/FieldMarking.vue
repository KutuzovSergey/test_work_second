<template>
  <span class="marking">
  </span>
</template>

<script>
export default {
  name: 'FieldMarking',
  props: {
  },
  data(){
    return {
      placeholder: '',
    }
  },
  mounted(){
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';

  .marking{
    @include block(4px, 4px, 0, 4px, #FF8484);
  }
</style>
