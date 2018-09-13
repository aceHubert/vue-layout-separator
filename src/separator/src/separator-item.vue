<template>
  <div class="el-separator-item">
    <slot></slot>
  </div>
</template>

<script>
import { addResizeListener, removeResizeListener } from '../../../libs/utils/resize-event'
import { getStyle, setStyle } from '../../../libs/utils/dom'

export default {
  name: 'SeparatorItem',
  componentName: 'SeparatorItem',
  inject: ['rootSeparator'],
  props: {
    width: {
      type: [String, Number],
      default: 'auto',
      validator (value) {
        return /^\d+\.?\d{0,2}%$|\d+$|\d+px$|auto$/.test(value)
      }
    },
    height: {
      type: [String, Number],
      default: 'auto',
      validator0 (value) {
        return /^\d+\.?\d{0,2}%|\d+|\d+px$|auto$/.test(value)
      }
    },
    maxWidth: {
      type: Number,
      validator (value) {
        return value > 0
      }
    },
    minWidth: {
      type: Number,
      default: 34,
      validator (value) {
        return value > 0
      }
    },
    maxHeight: {
      type: Number,
      validator (value) {
        return value > 0
      }
    },
    minHeight: {
      type: Number,
      default: 34,
      validator: function (value) {
        return value > 0
      }
    },
    noresize: Boolean
  },
  computed: {
    isHorizontal () {
      return !this.rootSeparator.vertical
    }
  },
  methods: {
    setStyle (...styles) {
      setStyle(this.$el, ...styles)
    },
    getStyle (name) {
      return getStyle(this.$el, name)
    },
    handleResize (e) {
      this.$emit('resize', this.$el)
    }
  },
  mounted () {
    const { width, height, minWidth, minHeight, maxWidth, maxHeight, isHorizontal } = this
    let style = isHorizontal ? {
      width: 'auto',
      height: typeof height === 'number' ? `${height}px` : width,
      minHeight: minHeight ? `${minHeight}px` : 'auto',
      maxHeight: maxHeight ? `${maxHeight}px` : 'auto'
    } : {
      width: typeof width === 'number' ? `${width}px` : width,
      height: 'auto',
      minWidth: minWidth ? `${minWidth}px` : 'auto',
      maxWidth: maxWidth ? `${maxWidth}px` : 'auto'
    }
    this.setStyle(style)

    !this.noresize && addResizeListener(this.$el, this.handleResize)
  },
  beforeDestroy () {
    !this.noresize && removeResizeListener(this.$el, this.handleResize)
  }
}
</script>
