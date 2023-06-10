<template>
  <div id="test" style="height: 100px">comp2
    hi2
  </div>
</template>

<script>
  import {isLocal} from '@/components/Comp1.vue';

  export default {
    name: "Comp2",
    mounted() {
      let el = document.getElementById('test')
      el.style.color = 'red'
    },
    methods: {
    }
  }
</script>
