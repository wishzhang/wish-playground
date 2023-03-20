<template>
  <div id="main-box">
    <div id="main" style="width: 500px;height: 400px;"></div>

    <button @click="updateEcharts">更新</button>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  import {initEchartsResize} from '@/initEchartsResize';

  export default {
    name: "Adaptive",
    data() {
      return {
        myChart: {},
        myChart2: {}
      }
    },
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById('main'));
      this.myChart2 = echarts.init(document.getElementById('main'));
      console.log(this.myChart === this.myChart2)
      // 绘制图表
      this.myChart.setOption({
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
            data: [5, 20, 36, 10, 10, 20],
            // barMinWidth: 10,
            // barMaxWidth: 50
          }
        ]
      });

      initEchartsResize({
        referVm: this,
        echartsInstance: this.myChart
      })
    },
    methods: {
      updateEcharts() {
        let el = document.getElementById('main')
        el.width = 400
        el.height = 800
        this.myChart.resize({
          width: 400,
          height: 800
        })
      }
    }
  }
</script>

<style scoped>
  #main-box {
  }
</style>
