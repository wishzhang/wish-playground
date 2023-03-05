<template>
  <div id="app">
    <Adaptive></Adaptive>
  </div>
</template>

<script>
import Adaptive from '@/components/Adaptive';

export default {
  name: 'App',
  components: {
    Adaptive
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
