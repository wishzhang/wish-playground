import DButton from './components/button/Button.vue'

import type { App } from 'vue'

const components = [
  DButton
]

export function install(app: App) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}

export {
  DButton
}