<template>
  <div id="app">
    <Comp1 ref="comp1"/>
    <button @click="handleChange">change</button>
  </div>
</template>

<script>
import Comp1 from './components/Comp1.vue'

export default {
  name: 'App',
  components: {
    Comp1
  },
  methods: {
    handleChange() {
      // console.log(this.$refs.comp1.$data, 'value', 'hello')
      // this.$refs.comp1.value2_copy = 'hello'
      // this.$refs.comp1.$forceUpdate()
      this.$emit('change', 'hi')
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
