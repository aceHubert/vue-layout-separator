import Separator from './separator'
import SeparatorItem from './separator-item'

const components = [
  Separator,
  SeparatorItem
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  Separator,
  SeparatorItem
}

module.exports.default = module.exports
