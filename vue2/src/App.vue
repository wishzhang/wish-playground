<template>
  <div id="app">
    <TestComponent/>
  </div>
</template>

<script>
  import TestComponent from '@/TestComponent';
  export default {
    name: 'App',
    components: {
      TestComponent
    },
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      handleClick() {

      }
    }
  }
</script>

<style>
</style>
