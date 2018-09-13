<template>
  <div :class="{'el-separator-line':true, 'active':active}"
       @mousedown="handleMouseDown">
    <div class="el-separator-line_icon"> </div>
  </div>
</template>

<script>
import { setStyle, getStyle, on, off } from '../../../libs/utils/dom'

export default {
  name: 'SeparatorLine',
  componentName: 'SeparatorLine',
  inject: ['rootSeparator'],
  props: {
    index: Number
  },
  computed: {
    isHorizontal () {
      return !this.rootSeparator.vertical
    },
    definition () {
      return this.rootSeparator.definition
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    setStyle (...styles) {
      setStyle(this.$el, ...styles)
    },
    getStyle (name) {
      return getStyle(this.$el, name)
    },
    handleMouseDown (e) {
      e.stopImmediatePropagation()

      const { index, rootSeparator, definition } = this
      rootSeparator[definition.cursor] = true
      this.active = true
      this.lastPosition = {
        left: e.clientX,
        top: e.clientY
      }
      let items, prevItem, nextItem, elPosition, minPosition, maxPosition

      items = this.$parent.$children.filter(child => child.$options.componentName === 'SeparatorItem')
      prevItem = items[index]
      nextItem = items[index + 1]
      elPosition = this.parseInt(this.getStyle(definition.position))
      minPosition = elPosition - (prevItem.$el[definition.offset] - prevItem[definition.min])
      if (nextItem[definition.max]) { minPosition = Math.max(minPosition, elPosition - (nextItem[definition.max] - nextItem.$el[definition.offset])) }
      maxPosition = elPosition + (nextItem.$el[definition.offset] - nextItem[definition.min])
      if (prevItem[definition.max]) { maxPosition = Math.min(maxPosition, elPosition + (prevItem[definition.max] - prevItem.$el[definition.offset])) }

      console.log(minPosition, maxPosition)
      Object.assign(this, { prevItem, nextItem, minPosition, maxPosition })

      on(document, 'mousemove', this.handleMouseMove)
      on(document, 'mouseup', this.handleMouseUp)
      document.onselectstart = () => false
    },
    handleMouseMove (e) {
      const { $el, rootSeparator, definition, lastPosition, prevItem, nextItem, minPosition, maxPosition } = this
      const { clientX, clientY } = e
      let offset = (rootSeparator.vertical ? clientX : clientY) - lastPosition[definition.position]
      let position = this.parseInt(this.getStyle(definition.position)) + offset
      if (position > minPosition && position < maxPosition) {
        Object.assign(this.lastPosition, { left: clientX, top: clientY })
      } else if (position < minPosition) {
        offset += minPosition - position
        position = minPosition
      } else if (position > maxPosition) {
        offset += maxPosition - position
        position = maxPosition
      }
      this.setStyle(definition.position, `${position}px`)
      prevItem.setStyle(definition.size, `${prevItem.$el[definition.offset] + offset}px`)
      nextItem.setStyle(definition.size, `${nextItem.$el[definition.offset] - offset}px`)
      nextItem.setStyle(definition.position, `${position + $el[definition.offset]}px`)
    },
    handleMouseUp (e) {
      const { rootSeparator, definition } = this
      rootSeparator[definition.cursor] = false
      this.active = false
      off(document, 'mousemove', this.handleMouseMove)
      document.onselectstart = null
    },
    parseInt (value) {
      return value === 'none' || value === 'auto' ? null : parseInt(value)
    }
  },
  beforeDestroy () {
    off(document, 'mouseup', this.handleMouseUp)
  }
}
</script>
