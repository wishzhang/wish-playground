<template>
  <div id="app">

  </div>
</template>

<script>
  import Comp1 from './components/Comp1.vue'
  import Comp2 from './components/Comp2.vue'

  export default {
    name: 'App',
    components: {
      Comp1,
      Comp2
    },
    data() {
      return {
        activeItem: null,
        show: false
      }
    },
    methods: {
      handleClick() {
        console.log('click')
        this.show = !this.show
      },
      handleParentClick(item) {
        this.activeItem = item
      }
    }
  }
</script>

<style>
  .parent {
    width: 400px;
    height: 400px;
    background-color: gray;
  }


  .child {
    width: 200px;
    height: 200px;
    background-color: lightblue;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
