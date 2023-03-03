<template>
  <div class="canvas-bg" @drop="handleDrop" @dragover="handleDragover">canss</div>
</template>

<script>
  export default {
    name: "Canvas",
    methods: {
      handleDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        console.log(e.dataTransfer.getData('id'))
      },
      handleDragover(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy"
      }
    }
  }
</script>

<style scoped>
  .canvas-bg {
    background: white;
  }
</style>
