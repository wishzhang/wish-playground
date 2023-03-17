<template>
  <div id="map-con" ref="basicMapbox" class="map-con"></div>
</template>

<script>
  export default {
    name: 'Company',
    components: {
    },
    mounted() {
      this.initMap()
    },
    methods: {
      initMap() {
        console.log(mapboxgl)
        const baseServiceHost = window.location.origin
        // 监测中心地图的accessToken
        mapboxgl.accessToken =
            "pk.eyJ1IjoibWVpaW4xMjM0NTYiLCJhIjoiY2tqbWtlemR5MGt4MTJ4bjBxcjNmcng5NCJ9.GRpGEmZhxJ58EkNW6Ta_AQ";

        this.mapInst = new mapboxgl.Map({
          container: this.$refs.basicMapbox, //地图容器 id
          style: `${baseServiceHost}/vector-styles/mapbox/HillshadeImage.json`,
          // center: [113.47, 22.75], // 地图初始化时的地理中心点
          center: [113.47, 22.75], // 地图初始化时的地理中心点
          zoom: 6.0, //初始缩放比
          bearing: 0,
          pitch: 0,
          optimizeForTerrain: true,
          trackResize: false,
          antialias: true,
        });

        this.mapInst.on("load", (e) => {
          // 加载完成，父组件可以通过props属性设置地图中心或者更新数据
          this.$emit("onloaded");
          // this.addImageInMap(this.pointImg);

          //加载监测站点
          // this.getSitePointMonitor(this.sitePointData);
        });

        this.mapInst.on("styledata", (e) => {
          // 发现切换底图之后， 原有点位就会丢失，重新添加回来
          if (this.styleLoading) {
            this.styleLoading = false;
            //   this.initMoveLayer(this.pointDataMove);
          }
        });
      },
      addImageInMap(imagedata) {
        let that = this;
        imagedata.forEach((item) => {
          that.mapInst.loadImage(item.url, function (error, image) {
            if (error) throw error;
            // 检查同名的图片资源是否已存在
            if (!that.mapInst.hasImage(item.name)) {
              that.mapInst.addImage(item.name, image);
            }
          });
        });
      },
    }
  }
</script>

<style>
  .map-con {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>
