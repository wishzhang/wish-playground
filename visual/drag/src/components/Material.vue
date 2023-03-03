<template>
  <div class="material">
    <div v-for="(item, index) in materials" :id="item.id" :key="index" :style="{background: item.color}"
         @dragstart="handleDragstart"
         :draggable="true"
         class="material-item"></div>
  </div>
</template>

<script>
  export default {
    name: "Material",
    data() {
      return {
        materials: [
          {
            id: 'a1',
            color: '#123456'
          },
          {
            id: 'a2',
            color: '#654321'
          },
          {
            id: 'a3',
            color: '#351246'
          }
        ]
      }
    },
    methods: {
      handleDragstart(e) {
        e.dataTransfer.dropEffect = "copy";
        e.dataTransfer.setData('id', e.target.id)
      }
    }
  }
</script>

<style scoped lang="scss">
  .material {
    .material-item {
      height: 80px;
    }
  }
</style>
