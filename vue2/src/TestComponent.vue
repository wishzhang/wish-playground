<template>
<div>this is TestComponent</div>
</template>

<script>
  const pLimit = require('p-limit');

  export default {
    name: "TestComponent4",
    created() {
      this.myWay()
    },
    methods: {
      async myWay() {
        const limit = pLimit(1);

        const fetchSomething = (str) => {
          return new Promise((resolve, reject)=>{
            setTimeout(()=>{
              console.log(str)
              resolve()
            }, 2000)
          })
        }

        const input = [
          limit(() => fetchSomething('foo')),
          limit(() => fetchSomething('bar')),
        ];

        const result = await Promise.all(input);
        console.log('result')
        console.log(result);
      }
    }
  }
</script>

<style scoped>

</style>
