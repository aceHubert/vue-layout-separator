
<script>
import SeparatorLine from './separator-line'

export default {
  name: 'Separator',
  components: {
    SeparatorLine
  },
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator: function (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  provide () {
    return {
      rootSeparator: this
    }
  },
  render (h) {
    let { direction } = this
    let defaultSlots = this.$slots.default

    let items = []

    const line = (<SeparatorLine direction={direction}></SeparatorLine>)

    for (let index = 0; index < defaultSlots.length; index++) {
      let vnode = defaultSlots[index]
      if (vnode.componentOptions && vnode.componentOptions.Ctor.extendOptions.componentName === 'SeparatorItem') {
        if (index !== 0) {
          items.push(line)
        }
        items.push(vnode)
      }
    }

    return (
      <div class={{
        'el-separator': true,
        'horizontal': direction === 'horizontal',
        'vertical': direction === 'vertical'
      }}>
        {items}
      </div>
    )
  }
}
</script>

<style lang="less">
.el-separator {
  height: 100%;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;

  .el-separator-item {
    overflow: auto;
  }

  &.horizontal {
    flex-direction: row;

    & > .el-separator-line {
      width: 10px;
      height: 100%;

      & > .el-separator-line_icon {
        width: inherit;
        height: 40px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        transform-origin: 50%;
        cursor: col-resize;

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

  &.vertical {
    flex-direction: column;

    & > .el-separator-line {
      width: 100%;
      height: 10px;
      line-height: 10px;
      text-align: center;

      & > .el-separator-line_icon {
        width: 40px;
        height: inherit;
        position: relative;
        display: inline-block;
        cursor: row-resize;

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
}
</style>
