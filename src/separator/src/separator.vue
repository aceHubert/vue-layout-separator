
<script>
import { addResizeListener, removeResizeListener } from '../../../libs/utils/resize-event'
import SeparatorLine from './separator-line'

export default {
  name: 'Separator',
  components: {
    SeparatorLine
  },
  props: {
    vertical: Boolean,
    width: {
      type: [String, Number],
      default: '100%'
    },
    height: {
      type: [String, Number],
      default: '100%'
    }
  },
  data () {
    return {
      colActive: false,
      rowActive: false,
      definition: {
        offset: this.vertical ? 'offsetWidth' : 'offsetHeight',
        size: this.vertical ? 'width' : 'height',
        min: this.vertical ? 'minWidth' : 'minHeight',
        max: this.vertical ? 'maxWidth' : 'maxHeight',
        position: this.vertical ? 'left' : 'top',
        cursor: this.vertical ? 'colActive' : 'rowActive',
        separatorWidth: 10
      }
    }
  },
  provide () {
    return {
      rootSeparator: this
    }
  },
  methods: {
    update () {
      const { $el, $children, definition, lineCount } = this
      const containerSize = $el[definition.offset]
      const items = $children.filter(child => child.$options.componentName === 'SeparatorItem')
      const lines = $children.filter(child => child.$options.componentName === 'SeparatorLine')
      let allocated = items.filter(child => child[definition.size] !== 'auto').reduce((prev, child) => prev + child.$el[definition.offset], 0) // 固定了高度/宽度的和
      let unallocatedItems = items.filter(child => child[definition.size] === 'auto')
      let prevUnallocated = unallocatedItems.reduce((prev, child) => prev + child.$el[definition.offset], 0) // 未分配的宽度/高度（上一次的）
      let unallocated = containerSize - allocated - lineCount * definition.separatorWidth // 未分配的宽度/高度
      let unallocatedCount = unallocatedItems.length// 未分配的宽度/高度 数量
      let unallocatedAvgSize = unallocated / unallocatedCount
      let upMaxItems = unallocatedItems.filter(child => child[definition.max] && child[definition.max] < unallocatedAvgSize)
      if (upMaxItems.length) {
        unallocated -= upMaxItems.reduce((prev, child) => prev + child[definition.max], 0)
        prevUnallocated -= upMaxItems.reduce((prev, child) => prev + child[definition.max], 0)
        unallocatedCount -= upMaxItems.length
        unallocatedAvgSize = unallocated / unallocatedCount
      }
      let position = 0
      items.forEach((item, index) => {
        const { $el } = item
        const min = item[definition.min]
        const max = item[definition.max] || Number.MAX_SAFE_INTEGER

        item.setStyle(definition.position, `${position}px`)

        if (item[definition.size] === 'auto') {
          let size = 0
          if (unallocatedAvgSize > max) {
            size = max
          } else if (unallocatedAvgSize < min) {
            size = min
          } else if (item.loaded) {
            size = $el[definition.offset] / prevUnallocated * unallocated
          } else {
            size = unallocatedAvgSize
          }
          !item.loaded && (item.loaded = true)

          item.setStyle(definition.size, `${Math.floor(size)}px`)
          position += parseInt(size) + definition.separatorWidth
        } else {
          position += parseInt($el[definition.offset]) + definition.separatorWidth
        }
        index < items.length - 1 && lines[index].setStyle(definition.position, `${position - definition.separatorWidth}px`)
      })
    }
  },
  mounted () {
    addResizeListener(this.$el, this.update)
  },
  beforeDestroy () {
    removeResizeListener(this.$el, this.update)
  },
  render (h) {
    let { vertical, width, height, rowActive, colActive } = this
    let defaultSlots = this.$slots.default

    let items = defaultSlots.filter(vnode => vnode.componentOptions && vnode.componentOptions.Ctor.extendOptions.componentName === 'SeparatorItem')
    let lines = Array.from({ length: items.length - 1 }, (v, i) => i).map(index => (<SeparatorLine index={index}></SeparatorLine>))
    this.lineCount = lines.length
    let styles = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : width
    }
    return (
      <div class={{
        'el-separator': true,
        'row': !vertical,
        'row-active': rowActive,
        'col': vertical,
        'col-active': colActive
      }} style={styles}>
        {items}
        <div class="el-separator-lines">
          {lines}
        </div>
      </div>
    )
  }
}
</script>

<style lang="less">
.el-separator {
  position: relative;
  box-sizing: border-box;

  & > .el-separator-item {
    box-sizing: border-box;
    overflow: auto;
    position: absolute;
    left: 0;
    top: 0;
  }

  & > .el-separator-lines > .el-separator-line {
    position: absolute;
    left: 0;
    top: 0;
  }

  &.row-active {
    cursor: row-resize;
  }

  &.row {
    & > .el-separator-item {
      right: 0;
    }

    & > .el-separator-lines > .el-separator-line {
      width: 100%;
      height: 10px;
      line-height: 10px;
      text-align: center;
      cursor: row-resize;

      & > .el-separator-line_icon {
        width: 40px;
        height: inherit;
        position: relative;
        display: inline-block;

        &::before,
        &::after {
          content: "";
          width: 14px;
          position: absolute;
          left: 13px;
          border-top: 1px solid #ccc;
        }

        &::before {
          top: 3px;
        }

        &::after {
          bottom: 3px;
        }
      }
    }
  }

  &.col-active {
    cursor: col-resize;
  }

  &.col {
    & > .el-separator-item {
      bottom: 0;
    }

    & > .el-separator-lines > .el-separator-line {
      width: 10px;
      height: 100%;
      cursor: col-resize;

      & > .el-separator-line_icon {
        width: inherit;
        height: 40px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        transform-origin: 50%;

        &::before,
        &::after {
          content: "";
          height: 14px;
          position: absolute;
          top: 13px;
          border-left: 1px solid #ccc;
        }

        &::before {
          left: 3px;
        }

        &::after {
          right: 3px;
        }
      }
    }
  }
}
</style>
