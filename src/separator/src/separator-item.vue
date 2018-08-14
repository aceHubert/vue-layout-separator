<template>
  <div class="el-separator-item"
       :style="getStyle">
    <slot></slot>
  </div>
</template>

<script>
import { addResizeListener, removeResizeListener } from '../../../libs/utils/resize-event'

export default {
  name: 'SeparatorItem',
  componentName: 'SeparatorItem',
  inject: ['rootSeparator'],
  props: {
    width: {
      type: [String, Number],
      default: 'auto',
      validator: function (value) {
        return /^\d+\.?\d{0,2}%$|\d+$|\d+px$|auto$/.test(value)
      }
    },
    height: {
      type: [String, Number],
      default: 'auto',
      validator: function (value) {
        return /^\d+\.?\d{0,2}%|\d+|\d+px$|auto$/.test(value)
      }
    },
    maxWidth: Number,
    minWidth: {
      type: Number,
      default: 34
    },
    maxHeight: Number,
    minHeight: {
      type: Number,
      default: 34
    }
  },
  computed: {
    getStyle () {
      const isHorizontal = this.rootSeparator.direction === 'horizontal'
      const { width, height, minWidth, minHeight, maxWidth, maxHeight } = this
      let style = {}
      if (isHorizontal) {
        style.height = '100%'
        if (width === 'auto') {
          style.flexGrow = 1
        } else if (typeof width === 'number') {
          style.flexBasis = width + 'px'
        } else {
          style.flexBasis = width
        }
        if (maxWidth) {
          style.maxWidth = maxWidth + 'px'
        }
        if (minWidth) {
          style.minWidth = minWidth + 'px'
        }
      } else {
        style.width = '100%'
        if (height === 'auto') {
          style.flexGrow = 1
        } else if (typeof height === 'number') {
          style.flexBasis = height + 'px'
        } else {
          style.flexBasis = height
        }

        if (maxHeight) {
          style.maxHeight = maxHeight + 'px'
        }

        if (minHeight) {
          style.minHeight = minHeight + 'px'
        }
      }
      return style
    }
  },
  methods: {
    handleResize (e) {
      this.$emit('resize', e)
    }
  },
  mounted () {
    addResizeListener(this.$el, this.handleResize)
  },
  destroyed () {
    removeResizeListener(this.$el, this.handleResize)
  }
}
</script>
