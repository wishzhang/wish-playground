<template>
  <div class="designer">
    <div class="material">
      <Material/>
    </div>
    <div class="canvaser">
      <Canvaser/>
    </div>
    <div class="setting">
      <Setting/>
    </div>
  </div>
</template>

<script>
  import Material from '@/components/Material';
  import Setting from '@/components/Setting';
  import Canvaser from '@/components/Canvaser';
  export default {
    name: "Designer",
    components: {
      Material,
      Setting,
      Canvaser
    }
  }
</script>

<style scoped lang="scss">
  .designer {
    display: flex;
    height: 100%;

    .material {
      width: 200px;
      background: grey;
    }

    .canvaser {
      flex: 1;
      background: #1a1a1a;
    }

    .setting {
      width: 200px;
      background: #2c3e50;
    }
  }
</style>
