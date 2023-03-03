<template>
  <div class="hello">
    {{value2_copy}}
  </div>
</template>

<script>
  export default {
    name: 'Comp1',
    props: {
      value: {
        type: String,
        default: 'hi'
      },
      value2: {
        type: String,
        default: 'hi2'
      },
    },
    data() {
      return {
        value2_copy: this.value2
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
