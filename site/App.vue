<template>
  <div id="app">
    <separator vertical>
      <separator-item :width="itemWidth"
                      :min-width="100"
                      style="background:#ddd "
                      @resize="(el)=>{itemWidth = el.offsetWidth}">
        LEFT
        <p>min-width:100px</p>
        <P>width:{{itemWidth + 'px'}}</P>
      </separator-item>
      <separator-item>
        <separator>
          <separator-item :height="50"
                          style="background:#ddd ">
            TOP
            <p>height:50px</p>
          </separator-item>
          <separator-item :max-height="150">
            MIDDLE1
            <p>height:auto</p>
            <p>max-height:150px</p>
          </separator-item>
          <separator-item style="background:#ddd ">
            MIDDLE2
            <p>height:auto</p>
          </separator-item>
          <separator-item>
            MIDDLE3
            <p>height:auto</p>
          </separator-item>
          <separator-item :height="100"
                          :min-height="80"
                          :max-height="150"
                          style="background:#ddd ">
            BOTTOM
            <p>min-height:80px</p>
            <p>max-height:150px</p>
          </separator-item>
        </separator>
      </separator-item>
      <separator-item :width="200"
                      :max-width="300"
                      style="background:#ddd ">
        RIGTH
        <p>max-width:300px</p>
      </separator-item>
    </separator>
  </div>
</template>

<script>
import { Separator, SeparatorItem } from '../src/index'

export default {
  name: 'app',
  components: {
    Separator,
    SeparatorItem
  },
  data () {
    return {
      itemWidth: 150
    }
  }
}
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid #ccc;
  position: absolute;
  left: 50px;
  right: 50px;
  top: 100px;
  bottom: 100px;

  p {
    margin: 0 0 5px 0;
  }
}
</style>
