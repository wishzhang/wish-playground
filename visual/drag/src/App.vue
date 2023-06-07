<template>
  <div id="app">
    <div style="display: flex;">
      <div v-for="(name,index) in componentNames"
           style="width: 100px;height: 50px; background-color: black; color: white"
           @click="handleClick(index)">{{ name }}
      </div>
    </div>
    <component :is="componentNames[currentIndex]"></component>
  </div>
</template>

<script>
  import Designer from '@/components/Designer';
  import EventDemo from '@/vue-grid-layout-demo/event-demo';

  export default {
    name: 'App',
    components: {
      Designer,
      EventDemo
    },
    data() {
      return {
        componentNames: [
          Designer.name,
          EventDemo.name
        ],
        currentIndex: 1
      }
    },
    methods: {
      handleClick(index) {
        this.currentIndex = index
      }
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
