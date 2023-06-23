<template>
  <div id="app">
    <div>hihi</div>
<!--    <el-button @click="handleClick">点击</el-button>-->
  </div>
</template>

<script>
  import axios from 'axios'
  // import JSZip from 'jszip'

  export default {
    name: 'App',
    components: {},
    data() {
      return {}
    },
    mounted() {
      // let el = document.createElement('script')
      // let text = `
      //   (function(){
      //     console.log('hi')
      //   })()
      // `
      //
      // el.innerHTML = text
      // document.body.appendChild(el)
      // el.addEventListener('load', () => {
      //   debugger
      // })
      axios.get('/AreaPollutantSurveyWidget@0.1.0.zip', {
        responseType: 'blob'
      }).then(res=>{
        let objectURL = URL.createObjectURL(res.data);
        let el = document.createElement('script')
        el.src = objectURL
        document.body.appendChild(el)
        el.addEventListener('load', () => {

        })
        debugger
        // unzipScript(res.data)
      }).catch(err => {
        debugger
      })
      //
      // // 解压zip文件并解析数据
      // const unzipScript = async (file) => {
      //   console.log("file", file);
      //   // 上传成功后，前端解压.zip文件并解析数据
      //   const zip = await JSZip.loadAsync(file);
      //   console.log("解析", zip);
      //   debugger
      //   let filesArray = Object.values(zip.files);
      //   const txtBlob = await zip.files[filesArray[0].name].async("string");
      //   console.log("txtBlob", txtBlob);
      //   const fn = new Function(txtBlob);
      //   fn();
      //   let componentName = filesArray[0].name.split("@")[0];
      //   console.log("数据", window[componentName]);
      //   return window[componentName];
      // };
    },
    methods: {
      handleClick() {

      }
    }
  }
</script>

<style>
</style>
