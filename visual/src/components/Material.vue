<template>
  <div class="material">
    <div v-for="(item, index) in colors" :key="index" :style="{background: getColor(index)}" class="material-item"></div>
  </div>
</template>

<script>
  export default {
    name: "Material",
    data() {
      return {
        colors: ['#123456', '#654321', '#351246']
      }
    },
    methods: {
      getColor(i) {
        return this.colors[i]
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
