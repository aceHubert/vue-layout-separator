import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('TextComponent', {
  name: 'Test',
  template: '<div>A custom component!</div>',
  data() {
    return {d1: 123}
  },
  props: {
    p1: {
      type: Number,
      default: 111,
      validator(value) {
        return value > 100
      }
    }
  },
  method: {
    getTest() {
      this.$emit('update',123)
    }
  }
})

var testComponent = Vue.component('TextComponent')

console.log(new testComponent())

new Vue({
  render: h => h(App)
}).$mount('#app')
