import {compileTemplate, parse} from '@vue/compiler-sfc'

// no parseComponent API

/*const res = compileTemplate(
  {
    id: 'test',
    filename: 'example.vue',
    source: `
      <template>
        <div>hi</div>
      </template>
    `
  }
)*/

const res = parse(
  `
      <template>
        <div>hi</div>
      </template>
      <style src="./test.css"></style>
      <style lang="stylus" scoped>
        h1
          color red
        h2
          color green
      </style>
      <style module>
        h1 { font-weight: bold }
      </style>
      <style bool-attr val-attr="test"></style>
      <script>
        export default {}
      </script>
      <div>
        <style>nested should be ignored</style>
      </div>
    `
)

console.log(res)
