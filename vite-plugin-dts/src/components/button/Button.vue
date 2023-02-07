<template>
  <button class="d-button">
    {{props.type}}
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'
  export interface ButtonProps{
    type: 'primary' | 'default' | 'warning' | 'danger'
  }
  const props = defineProps({
    type: Object as PropType<ButtonProps>
  })
</script>