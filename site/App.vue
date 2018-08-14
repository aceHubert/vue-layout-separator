<template>
  <div id="app">
    <separator>
      <separator-item width="200px"
                      :min-width="100"
                      style="background:#ddd ">
        LEFT
        <p>min-width:100px</p>
      </separator-item>
      <separator-item>
        <separator direction="vertical">
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
                          :max-height="100"
                          style="background:#ddd ">
            BOTTOM
            <p>height:100px</p>
            <p>min-height:100px</p>
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
  }
}
</script>

<style lang="less">
body {
  width: 100%;
  height: 1500px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 500px;
  border: 1px solid #ccc;
  position: absolute;
  left: 100px;
  right: 100px;
  top: 500px;

  p {
    margin: 0 0 5px 0;
  }
}
</style>
