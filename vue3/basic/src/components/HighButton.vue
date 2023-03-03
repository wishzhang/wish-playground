<template>
  <div>
    {{ p }}
    <br/>-----------<br/>
  </div>
  <button @click="handleClick">子改</button>
</template>

<script lang="ts" setup>
  import {ref, toRef} from "vue";

  const props = defineProps<{
    p: string
  }>()

  // console.log(props)
  // let q = toRef(props, 'p')

  function handleClick() {
    // console.log(p)
    console.log(props)
    // console.log('q='+q)
  }
</script>