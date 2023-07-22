<template>
<div class="wrap">
  <button @click="handleClick">go it</button>
  <div>a</div>
  <div><slot></slot></div>
</div>
</template>

<script>
  export default {
    name: 'WrapComp',
    data() {
      return {
        flag: false
      }
    },
    methods: {
      handleClick() {
        setTimeout(()=>{
          console.log('show')
          this.flag = true
        }, 2000)
      }
    }
  }
</script>

<style scoped lang="scss">
.wrap {
  background: blue;
  width: 100%;
  height: 100%;
}
</style>