<template>
  <div id="app">
    <button @click="handleClick">hihihi</button>
  </div>
</template>

<script>
  import System from 'systemjs'

export default {
  name: 'App',
  components: {

  },
  mounted() {
    let el = document.getElementById('test')
    console.log(el)
  },
  methods: {
    handleClick() {
      System.import('http://159.75.234.119/remote-load/index.umd.js');
    }
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
