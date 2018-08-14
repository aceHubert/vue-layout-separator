import Separator from './separator'
import SeparatorItem from './separator-item'

const components = [Separator, SeparatorItem]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

let version = '0.0.10'

export {version, install, Separator, SeparatorItem}

export default components.reduce(function (components, item) {
  components[item.name] = item
  return components
})
