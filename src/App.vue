<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 12px;
}

i {
  font-style: normal;
}

a {
  color: #303133;
  text-decoration: none;
}
input {
  outline: none;
  border: none;
}
button {
  background: none;
  border: none;
  outline: none;
}

body {
  color: #383838;
  font-size: 12px;
}

.container {
  margin: 0 auto;
  width: 1200px;
}
.fa,
.fas,
.far,
.fab {
  font-size: 20px;
  margin-right: 8px;
}
.flex-center {
  @include flex-center;
}

.flex-start {
  justify-content: flex-start;
}

.el-input__inner {
  line-height: 46px;
  height: 46px;
}
.el-button {
  height: 46px;
}
.common-dialog {
  margin-bottom: 0;
  .el-dialog__body {
    padding: 20px;
    padding-top: 5px;
  }
}
.common-btn {
  position: relative;
  display: block;
  padding: 0 16px;
  width: 100%;
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  background-color: #3da8f5;
  border: 1px solid #3da8f5;
  border-radius: 5px;
  cursor: pointer;
  transition: padding-right 0.25s;
  &.plan {
    color: #3da8f5;
    background-color: #fff;
    &:hover {
      background-color: #3da8f5;
    }
  }
  &-icon {
    position: absolute;
    margin-top: 2px;
    margin-left: 8px;
    font-size: 22px;
    color: #fff !important;
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover {
    padding-right: 36px;
    color: #fff;
  }
  &:hover &-icon {
    opacity: 1;
  }
}

.wechat-btn,
.wechat-login {
  width: 100%;
}
.wechat-login {
  @include flex-col-center;
  padding-top: 20px;
  border-top: 1px #dcdfe6 solid;
}
.wechat-btn {
  position: relative;
  background-color: #fff;
  color: #67c23a;
  height: 46px;
  font-size: 16px;
  &-icon {
    position: absolute;
    top: 50%;
    left: 55%;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
  }
  &:hover .wechat-btn-icon {
    opacity: 1;
    left: 50%;
    color: #fff;
  }
  &:hover &-text {
    opacity: 0;
  }
  &:hover {
    background: #67c23a !important;
    border-color: #67c23a;
    color: #fff !important;
  }
}
.common-phone {
  @include flex-center;
  width: 100%;
  &-input {
    flex: 1;
    margin-left: 5px;
    height: 44px;
    font-size: 16px;
    padding-left: 5px;
    &.disabled {
      cursor: not-allowed;
      background-color: #eee;
    }
  }
  &-right {
    @include flex-center;
    justify-content: flex-start;
    flex: 1;
    height: 46px;
    padding-left: 8px;
    border: 1px solid #dcdfe6;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: none;
    transform: translateX(-2px);
    .span-edit {
      font-size: 16px;
      color: #383838;
      margin-right: 6px;
    }
  }
  &-select {
    width: 96px;
    border: none;
  }
  .country-code {
    height: 32px;
    border: none;
    outline: none;
    border-right: 1px solid #dcdfe6;
    color: #383838;
  }
}
.el-input {
  font-size: 12px;
}
.claer-border input {
  border: none;
}
.ivu-menu-horizontal {
  height: 48px;
  line-height: 48px;
}
.ivu-menu-horizontal.ivu-menu-light:after {
  display: none;
}
.iconfont {
  font-size: 16px;
  color: #a6a6a6;
}
.ivu-badge-dot {
  top: 2px;
  right: -5px;
}
.commom-badge {
  .ivu-badge-dot {
    background: #3da8f5;
  }
}
.ivu-menu {
  z-index: 0;
}
.ivu-avatar-string {
  position: static !important;
}
.ivu-avatar {
  @include flex-center;
}
.user-avatar {
  background-color: #cdd081;
}
.p10 {
  .el-card__body {
    padding: 10px;
  }
}
.show-table {
  overflow: initial;
  .el-table__body-wrapper {
    overflow: initial;
  }
}
.el-table__row:hover .show-table-action {
  opacity: 1 !important;
}
.text-center-input {
  input {
    text-align: center;
  }
}
.custom-tree-node:hover .more-icon {
  opacity: 1 !important;
}
.wiki-form-select {
  .ivu-select-selection {
    border-color: transparent;
  }
  .ivu-select-arrow {
    opacity: 0;
  }
  input::-webkit-input-placeholder,
  .ivu-select-placeholder {
    /* WebKit browsers */
    color: #999 !important;
    font-size: 12px !important;
  }
  &.ivu-select-visible {
    .ivu-select-selection {
      border-color: #57a3f3;
    }
    .ivu-select-arrow {
      opacity: 1;
    }
  }
}
.ivu-cell,
.el-tabs__content {
  overflow: initial !important;
}
.information-progress {
  .ivu-progress-outer {
    width: 90% !important;
  }
}
.ivu-input,
.ivu-btn {
  font-size: 12px;
}
.ivu-input:focus {
  box-shadow: none !important;
}
.common-tree {
  .el-tree-node__content {
    height: 38px;
  }
}
.message-card {
  .ivu-card-body {
    height: 300px;
    overflow-y: auto;
  }
}
.prject .el-card__body {
  padding: 10px 20px !important;
}
.body {
  .ivu-cell-title,
  .ivu-menu,
  .el-button,
  .el-form-item__label,
  .ivu-menu-item,
  .el-table,
  .el-tree-node__label {
    font-size: 12px !important;
  }
  .el-table__header {
    font-weight: bold;
  }
}
.ivu-select-item-selected {
  position: relative;
  &::after {
    content: '\e611';
    position: absolute;
    right: 10px;
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
  }
}
.ivu-cell-with-link {
  .ivu-cell-arrow {
    display: none;
  }
}
.el-tabs__nav-wrap::after {
  height: 1px;
  .hide-line & {
    opacity: 0;
  }
}
.hide-line {
  .el-tabs__active-bar,
  .ivu-tabs-ink-bar {
    opacity: 0;
  }
  .ivu-tabs-bar {
    border-color: transparent;
  }
  .el-tabs__item.is-active,
  .ivu-tabs-nav .ivu-tabs-tab-active {
    color: #303133;
  }
}
.el-button--text {
  padding: 0;
  height: auto;
}
.el-card {
  border-color: transparent;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1) !important;
}
.el-tree-node__expand-icon::before {
  content: '\e604';
  font-weight: bold;
}
.ivu-card {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
.common-tree {
  .el-tree-node__expand-icon {
    display: none;
  }
}
.el-tree-node.is-expanded {
  .team-tree-icon {
    transform: rotate(0) !important;
  }
}
.hide-dropdown {
  .ivu-select-dropdown {
    padding: 0;
  }
}
</style>
