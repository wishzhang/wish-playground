<template>
  <div class="home">
    <button @click="handleChange">change</button>
    <button @click="handleChange2">change2</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    handleChange() {
      this.$store.commit('setTest', 'ii')
    },
    handleChange2() {
      const a = this.$store.state.test
      console.log('a:'+a)
    }
  }
}
</script>
