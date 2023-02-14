<script setup lang="ts">
  /*
    定义一个响应式变量，普通类型用 ref，reactive
    他们的区别是：
      - ref是通过RefImpl类的get set实现，而reactive通过proxy实现。ref其中对于对象是调用reactive来实现
      - 上面了解了ref和reactive的原理，诸多不具有响应性的原因是值类型。
     解包的规则就不细看了都是为了某方面的方便而搞的。如何使用呢？
     多数情况下其实应该用ref，因为reactive可以定义一个较为完整的数据结构和更方便的API，但是不利于传值的响应

     子组件的props相当于reactive返回值类型
     ---------------
     透传 Attributes：这里注意一点是inheritAttrs决定该组件根元素是否透传，但$attrs在模板的非根元素也是有效的。
      但是已包含在props的属性可以决定上面两者。
   */

  import HighButton from "@/components/HighButton.vue";
  import {reactive, ref, toRef} from "vue";

  let p = ref('zhang')

  function handleClick() {
    p.value= 'wang'
  }
</script>

<template>
  <HighButton :name="p"/>
  <button @click="handleClick">改变p</button>
</template>
