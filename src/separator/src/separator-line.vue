<template>
  <div class="el-separator-line">
    <div class="el-separator-line_icon"
         @mousedown="handleMouseDown"> </div>
  </div>
</template>

<script>
import { setStyle, getStyle } from '../../../libs/utils/dom'

export default {
  name: 'SeparatorLine',
  inject: ['rootSeparator'],
  methods: {
    handleMouseDown (e) {
      e.preventDefault()
      e.stopPropagation()
      const { $el } = this

      this.last = {
        left: e.clientX,
        top: e.clientY
      }
      this.totalWidth = $el.previousElementSibling.offsetWidth + $el.nextElementSibling.offsetWidth
      this.totalHeight = $el.previousElementSibling.offsetHeight + $el.nextElementSibling.offsetHeight
      window.addEventListener('mousemove', this.handleMouseMove)
      window.addEventListener('mouseup', this.handleMouseUp)
    },
    handleMouseMove (e) {
      const { $el, last, totalWidth, totalHeight } = this
      const { clientX, clientY } = e
      const isHorizontal = this.rootSeparator.direction === 'horizontal'
      const totalSize = isHorizontal ? totalWidth : totalHeight

      let prevEl, prevElSize, prevElMaxSize, prevElMinSize, prevElStyle
      prevEl = $el.previousElementSibling
      prevElSize = isHorizontal ? prevEl.offsetWidth + (clientX - last.left) : prevEl.offsetHeight + (clientY - last.top)
      prevElMaxSize = this.parseInt(getStyle(prevEl, isHorizontal ? 'maxWidth' : 'maxHeight'))
      prevElMinSize = this.parseInt(getStyle(prevEl, isHorizontal ? 'minWidth' : 'minHeight'))
      prevElStyle = { flexGrow: '0' }

      if (prevElSize < prevElMinSize) {
        prevElSize = prevElMinSize
      }

      let nextEl, nextElSize, nextElMaxSize, nextElMinSize, nextElStyle
      nextEl = $el.nextElementSibling
      nextElSize = totalSize - prevElSize
      nextElMaxSize = this.parseInt(getStyle(nextEl, isHorizontal ? 'maxWidth' : 'maxHeight'))
      nextElMinSize = this.parseInt(getStyle(nextEl, isHorizontal ? 'minWidth' : 'minHeight'))
      nextElStyle = { flexGrow: '0' }

      if (nextElSize < nextElMinSize) {
        prevElSize = totalSize - nextElMinSize
        nextElSize = nextElMinSize
      }

      if (prevElMaxSize) {
        prevElSize = Math.min(prevElSize, prevElMaxSize)
        nextElSize = totalSize - prevElSize
        Object.assign(nextElStyle, isHorizontal ? { maxWidth: 'auto' } : { maxHeight: 'auto' })
      } else if (nextElMaxSize) {
        nextElSize = Math.min(nextElSize, nextElMaxSize)
        prevElSize = totalSize - nextElSize
        Object.assign(prevElStyle, isHorizontal ? { maxWidth: 'auto' } : { maxHeight: 'auto' })
      }

      setStyle(prevEl, Object.assign({}, prevElStyle, { flexBasis: prevElSize + 'px' }))
      setStyle(nextEl, Object.assign({}, nextElStyle, { flexBasis: nextElSize + 'px' }))

      Object.assign(this.last, { left: clientX, top: clientY })
    },
    handleMouseUp (e) {
      window.removeEventListener('mousemove', this.handleMouseMove)
      window.removeEventListener('mouseup', this.handleMouseUp)
    },
    parseInt (value) {
      return value === 'none' || value === 'auto' ? null : parseInt(value)
    }
  }
}
</script>
