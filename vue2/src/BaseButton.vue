<template>
  <div class="base-button">
    <el-button v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
  export default {
    name: "BaseButton",
    inheritAttrs: false,
    props: {},
    computed: {}
  };
</script>

<style scoped>
  .base-button {
    width: 96px;
  }

  .base-button ::v-deep .el-button--primary {
    background-color: #3b75fa;
    border-color: #3b75fa;
  }

  .base-button ::v-deep .el-button.el-button--default.is-plain {
    border-color: #3b75fa;
    color: #3b75fa;
  }

  .base-button .el-button {
    width: 100%;
    height: 100%;
  }
</style>
