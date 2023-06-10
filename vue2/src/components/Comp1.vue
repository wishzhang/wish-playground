<template>
  <div id="test" style="height: 200px" ref="testhi">
    hi
  </div>
</template>

<script>
  export let isLocal = {
    value: false
  }
  export default {
    name: 'Comp1',
    mounted() {
      console.log('this is comp1 mounted')
      console.log('isLocal=' + isLocal.value)
      let el = document.getElementById('test')
      el.style.color = 'red'
    },
    methods: {
    }
  }
</script>