<template>
  <div>
    {{ props.name }}
    <br/>-----------<br/>
  </div>
  <button @click="handleClick">子改</button>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    name: string
  }>()

  function handleClick() {
    console.log('props')
    console.log(props.name)
  }
</script>