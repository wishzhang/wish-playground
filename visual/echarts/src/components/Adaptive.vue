<template>
  <div id="main-box" @resize="handleResize">
    <div id="main" style="width: 100%;height: 200px;"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';

  export default {
    name: "Adaptive",
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });

      let el = document.getElementById('main-box')
      el.addEventListener('resize', function (e) {
        let target = e.target
        console.log('000')
        console.log(target.clientWidth, target.clientHeight);
      })

      const observer = new ResizeObserver(function elResizeChange(entries) {
        console.log('aa')
      })
      observer.observe(el) // 观测DOM元素
    },
    methods: {
      handleResize(e) {
        console.log('33')
      }
    }
  }
</script>

<style scoped>

</style>
