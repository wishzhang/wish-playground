<template>
  <div class="base-comp">
    aa
    <div v-bind="$attrs"></div>
  </div>
</template>

<script>
  export default {
    name: "BaseComp",
    props: {
      name: {
        type: String
      }
    },
    created() {
      console.log('attrs', this.$attrs)
    }
  }
</script>

<style scoped>
  .base-comp {

  }
</style>
