# vue-layout-separator

## Installation

``` bash
  //with yarn
  yarn add vue-layout-separator
  //with npm 
  npm install vue-layout-separator --save
```

## Usage

Here's a quick example to get you started:

``` js
  // main.js
  import Vue from 'vue'
  import App from './App.vue'

  new Vue({
    render: h => h(App)
  }).$mount('#app')

 // App.vue
  <template>
  <div style="width:1000px; height:500px;">
    <separator>
      <separator-item :width="200"
                      :min-width="100">
        Content
      </separator-item>
    </separator>
  </div>
  </template>
  <script>
  import { Separator, SeparatorItem } from 'vue-layout-separator'
  import 'vue-layout-separator/dist/index.css'

  export default {
    name: 'app',
    components: {
      Separator,
      SeparatorItem
    }
  }
  </script>
```

## Prpos

` Separator:`

 name | type | default | description
 ---- | ---- | ------- | -----------
 direction | String | horizontal | direction of items,'horizontal' or 'vertical'.

 ` SeparatorItem:`

  name | type | default | description
 ---- | ---- | ------- | -----------
 width | String/Number | auto | item width(300, 10% or auto), works with parent's direction in 'horizontal'.
 height | String/Number | auto | item height(same with width), works with parent's direction in 'vertical'.
 maxWidth | Number | - | item max width.
 minWidth | Number | 34 | item min width.
 maxHeight | Number | - | item max height.
 minHeight | Number | 34 | item min height.
 resize | event | - | Callback fired when the item size is changed.<br>__Signature:__ <br> function() => void


## Update 

## LICENSE
[MIT](https://choosealicense.com/licenses/mit/)