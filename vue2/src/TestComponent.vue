<template>
<div>
<!--  <BaseComp name="hi" :style="{background: 'red'}" how/>-->
  <BaseButton type="primary" :style="{width: '200px', height: '100px'}">确定</BaseButton>
</div>
</template>

<script>
  import BaseComp from '@/BaseComp';
  import BaseButton from '@/BaseButton';
  export default {
    name: "TestComponent",
    components: {
      BaseButton,
      BaseComp
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
