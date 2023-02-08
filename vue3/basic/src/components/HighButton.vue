<template>
  <div>
    <BaseButton v-bind="$attrs"/>
  </div>
</template>

<script lang="ts" setup>
  import BaseButton from "@/components/BaseButton.vue";
  const props = defineProps<{
    class: string
  }>()
</script>

<script lang="ts">
  export default {
    inheritAttrs: true
  }
</script>

<style scoped>

</style>