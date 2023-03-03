<template>
  <div id="app">
    <Designer/>
  </div>
</template>

<script>
import Designer from '@/components/Designer';
export default {
  name: 'App',
  components: {
    Designer
  }
}
</script>

<style>
  #app {
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }
</style>
