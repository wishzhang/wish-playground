<template>
  <div class="parent">parent
    <span @click="handleClick">fu dianji</span>
  </div>
</template>

<script>
  let i=0
  export default {
    name: 'Comp1',
    props: {
      activeItem: {
        type: Object,
        default: null
      }
    },
    mounted() {
    },
    methods: {
      handleClick() {
        console.log('hh')
        this.$emit('click', {
          greet: 'hi'+i++
        })
      }
    }
  }
</script>
