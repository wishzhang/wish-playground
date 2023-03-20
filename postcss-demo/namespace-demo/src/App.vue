<template>
  <div id="app" class="cockpit-ui-library">
    <div data-greet>hi</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

::v-deep .hi{
  background: red;
}

>>> .hello {
  background: black;
}

/deep/ .greet {
  background: blue;
}

[data-greet] {
  background: purple;
}
</style>
