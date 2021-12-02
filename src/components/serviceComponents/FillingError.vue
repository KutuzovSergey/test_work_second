<template>
  <div class="error">
    <span class="error__text">{{error_text}}</span>
  </div>
</template>

<script>
export default {
  name: 'FillingError',
  props: {
    error_text: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
    }
  },
  mounted(){
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';

  .error{
    width: 90%;
    height: auto;
    border-radius: 2px;
    padding: 0 6px 5px 5px;
    background-color: rgb(235,9,9);

    &__text{
      @include textBlock(16px, 10px, #ffffff, normal, normal);
      letter-spacing: -0.02em;
    }
  }
</style>
