<template>
  <div>
    comp1
    <button @click="handleClick">comp1</button>
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
    },
    methods: {
      handleClick() {
        isLocal.value = true
      }
    }
  }
</script>