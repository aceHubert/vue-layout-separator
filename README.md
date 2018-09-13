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
 vertical | Boolean | false | direction of items.
 width | String/Number | 100% | container's width.
 height | String/Number | 100% | container's height.


 ` SeparatorItem:`

  name | type | default | description
 ---- | ---- | ------- | -----------
 width | String/Number | auto | item width(300, 10% or auto), works with parent's vertical with 'false'.
 height | String/Number | auto | item height(same with width), works with parent's vertical width 'true'.
 maxWidth | Number | - | item max width.
 minWidth | Number | 34 | item min width.
 maxHeight | Number | - | item max height.
 minHeight | Number | 34 | item min height.
 noresize | Boolean | false | event 'resize' will not be triggered. <br>if you do not need it, better to set 'true'.
 resize | event | - | Callback fired when the item size is changed.<br>__Signature:__ <br> function(el) => void


## Update 
> 0.1.0
* Added prop "vertical", "width", "height" in Container
* Removed prop "direction" in Container

> 0.0.12
* Added prop "noresize" in Item.

## LICENSE
[MIT](https://choosealicense.com/licenses/mit/)