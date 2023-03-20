<template>
  <div>comp2
  <button @click="handleClick">comp2</button>
  </div>
</template>

<script>
  import {isLocal} from '@/components/Comp1.vue';

  export default {
    name: "Comp2",
    mounted() {
      console.log('this is comp2 mounted')
      console.log('isLocal=' + isLocal.value)
    },
    methods: {
      handleClick() {
        console.log('this is comp2 handleClick')
        console.log('isLocal=' + isLocal.value)
      }
    }
  }
</script>
