<template>
  <div style="width: 500px;">
    <grid-layout :layout.sync="layout"
                 :col-num="colNum"
                 :row-height="10"
                 :min-h="1"
                 :margin="[0, 0]"
                 :min-w="1"
                 :is-draggable="draggable"
                 :is-resizable="resizable"
                 :vertical-compact="true"
                 :use-css-transforms="true"
                 @layout-created="layoutCreatedEvent"
                 @layout-updated="layoutUpdatedEvent"
    >
      <grid-item v-for="item in layout"
                 :static="item.static"
                 :key="item.i"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
      >
        <WrapComp ref="wrap">{{ itemTitle(item) }}</WrapComp>
      </grid-item>
    </grid-layout>
  </div>

</template>

<script>
  import {GridLayout, GridItem} from "vue-grid-layout"
  import WrapComp from '@/components/WrapComp.vue';

  export default {
    components: {
      GridLayout,
      GridItem,
      WrapComp
    },
    data() {
      return {
        colNum: 100,
        rowHeight: 10,
        layout: [
          {"x": 0, "y": 0, "w": 10, "h": 10, "i": "0", static: false},
          {"x": 0, "y": 10, "w": 10, "h": 10, "i": "2", static: false},
          {"x": 20, "y": 0, "w": 10, "h": 10, "i": "1", static: false},
          {"x": 20, "y": 2, "w": 10, "h": 10, "i": "3", static: false},
          {"x": 20, "y": 3, "w": 10, "h": 50, "i": "4", static: false},
          {"x": 20, "y": 4, "w": 10, "h": 10, "i": "5", static: false}
        ],
        draggable: true,
        resizable: true,
        index: 0
      }
    },
    created() {
      console.log('created')
    },
    async mounted() {
      console.log('mounted')
      console.log(this.$refs.wrap[0].$el.offsetHeight)
      // this.$nextTick(()=>{
      //   console.log('mounted oo')
      //   console.log(this.$refs.wrap[0].$el.offsetHeight)
      // })
      // this.layout = this.getLayouts(this.layout)
      // let bodyWidth = document.body.offsetWidth
      // this.colNum = Math.floor(bodyWidth / 10)
      // setTimeout(()=>{
      //   console.log('layout cal')
      //   this.layout = this.getLayouts(this.layout)
      // }, 3000)
    },
    methods: {
      layoutCreatedEvent(e) {
        console.log('layoutCreatedEvent')
        console.log(e)
      },
      layoutUpdatedEvent(e) {
        console.log('layoutUpdatedEvent')
        console.log(e)
      },
      getLayouts(layout) {
        layout = JSON.parse(JSON.stringify(layout))
        layout = layout.map((el, index) => {
          let wrapEl = this.$refs.wrap[index].$el
          let autoHeight = this.getAutoHeight(wrapEl)
          el.h = this.getGridItemH(autoHeight)
          wrapEl.style.height= '100%'
          return el
        })
        return layout
      },
      getGridItemH(h, cellH = 10) {
        return Math.floor(h / cellH)
      },
      getAutoHeight(el) {
        return el.offsetHeight
      },
      itemTitle(item) {
        let result = item.i;
        if (item.static) {
          result += " - Static";
        }
        return result;
      }
    }
  }
</script>

<style scoped>
  .vue-grid-layout {
    background: #eee;
  }

  .vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
  }

  .vue-grid-item .resizing {
    opacity: 0.9;
  }

  .vue-grid-item .static {
    background: #cce;
  }

  .vue-grid-item .text {
    font-size: 12px;
    text-align: center;
    background: red;
  }

  .vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
  }

  .vue-grid-item .minMax {
    font-size: 12px;
  }

  .vue-grid-item .add {
    cursor: pointer;
  }

  .vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
  }


</style>
