<template>
  <div id="app">
    <router-view />
    <Drawer placement="left"
            @on-close="changeShowNav"
            :closable="false"
            :value="showNav">
      <div class="navbar">
        <div class="user">
          <Avatar size="large" style="background-color: #2d8cf0">陈波</Avatar>
          <span class="user-name">陈波</span>
        </div>
        <el-menu @select="selectNav" router :default-active="$route.fullPath">
          <el-menu-item to="/home" index="/home">
          <i class="iconfont icon-home"></i>
          首页
          </el-menu-item>
          <el-menu-item to="/home/project" index="/home/project">
          <i class="iconfont icon-project-o"></i>
          项目
          </el-menu-item>
          <el-menu-item to="/home/wiki" index="/home/wiki">
          <i class="iconfont icon-wikipedia"></i>
          wiki
          </el-menu-item>
          <el-menu-item to="/home/project" index="/home/project">
          <i class="iconfont icon-shuju"></i>
          数据
          </el-menu-item>
          <el-menu-item to="/home/message" index="/home/message">
          <i class="iconfont icon-lingdang"></i>
          通知
          </el-menu-item>
          <el-menu-item index="/home/rili">
          <i class="iconfont icon-rili"></i>
          日历
          </el-menu-item>
          <el-menu-item to="/home/help" index="/home/help">
          <i class="iconfont icon-help"></i>
          帮助
          </el-menu-item>
        </el-menu>
      </div>
    </Drawer>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  computed: {
    showNav () {
      return this.$store.state.showNav
    }
  },
  methods: {
    ...mapMutations(['changeShowNav']),
    selectNav() {
      this.changeShowNav()
    }
  },
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
.navbar{
  .user {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    &-name {
      margin-left: 10px;
    }
  }
}
.flex-center {
  @include flex-center;
}
.ivu-drawer-body {
  padding: 0;
}
.flex-start {
  justify-content: flex-start;
}

.el-input__inner {
  line-height: 46px;
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
  &:hover &-text {
    opacity: 0;
  }
  &:hover .wechat-btn-icon {
    opacity: 1;
    left: 50%;
    color: #fff;
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
  font-size: 20px;
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
.ivu-el-menu-item,
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
  .ivu-el-menu-item-title,
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
#app .ivu-select-item-selected {
  position: relative;
  &::after {
    content: '\e611';
    position: absolute;
    top: 50%;
    right: 10px;
    font-family: element-icons !important;
    speak: none;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    transform: translateY(-50%);
  }
}
.ivu-el-menu-item-with-link {
  .ivu-el-menu-item-arrow {
    display: none;
  }
}
.el-tabs__nav-wrap::after {
  height: 1px;
  .hide-line & {
    opacity: 0;
  }
  .show-line & {
    opacity: 1;
  }
}
.test-list {
  overflow: initial !important;
}
.hide-line {
  .el-tabs__active-bar,
  .ivu-tabs-ink-bar {
    opacity: 0;
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
.prject-nav {
  .ivu-el-menu-item {
    padding: 14px 16px;
  }
}
.level-popup {
  color: #383838;
  .time-input {
    @include flex-center;
    width: 510px;
    span {
      margin: 0 10px;
    }
  }
  &-title {
    margin-top: 8px;
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: bold;
  }
  &-btn {
    border-color: #409eff;
    color: #409eff;
  }
  &-item {
    margin-right: 32px;
    color: #383838;
    font-weight: 600;
    p {
      font-size: 36px;
      line-height: 38px;
    }
  }
  &-info {
    &-header {
      @include flex-center;
      margin-bottom: 16px;
    }
    & > span {
      font-size: 12px;
      color: #a6a6a6;
    }
  }
  &-card {
    @include flex-center;
    &-left {
      padding-left: 16px;
      padding-right: 32px;
      height: 80px;
      border-right: 1px solid #e5e5e5;
    }
    &-right {
      flex: 1;
      @include flex-center;
      justify-content: space-between;
      padding-left: 32px;
    }
  }
  .qytq {
    @include flex-center;
    margin-top: 42px;
    margin-bottom: 20px;
    & > p {
      flex: 1;
    }
    & > div {
      flex: 2;
    }
    &-list {
      p {
        position: relative;
        margin-bottom: 10px;
        &::before {
          content: '';
          position: absolute;
          left: -12px;
          top: 50%;
          margin-top: -2px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #409eff;
        }
      }
    }
    &-icon {
      @include flex-col-center;
      padding-right: 60px;
      p {
        font-size: 16px;
        font-weight: bold;
      }
      span {
        color: #a6a6a6;
      }
    }
    &-img {
      position: relative;
      margin-bottom: 32px;
      width: 100px;
      height: 100px;
      img {
        width: 100%;
      }
    }
  }
}
.focus-form {
  .ivu-icon-ios-calendar-outline,
  .el-input__suffix {
    opacity: 0;
  }
  .ivu-input,
  .el-input__inner,
  .ivu-select-selection {
    border-color: transparent;

    &:hover {
      background-color: #f3f3f3;
    }
    &:focus {
      border-color: #dcdee2 !important;
      background-color: #fff;
      box-shadow: none;
    }
    &:focus &-icon {
      opacity: 1;
    }
    &:focus + .el-input__suffix {
      opacity: 1;
    }
  }
  .el-input__inner {
    height: 32px;
    line-height: 32px;
  }
  .el-input__icon {
    line-height: 32px;
  }
  .el-select:hover .el-input__inner {
    border-color: transparent;
  }

  .wangEditor-container {
    border-color: transparent;
    &:hover {
      background-color: #f3f3f3;
    }
    .wangEditor-menu-container {
      opacity: 0;
    }
    &.wangEditor-focus {
      background-color: #fff;
      border-color: #ccc;
      .wangEditor-menu-container {
        opacity: 1;
      }
    }
  }
}
.ivu-modal-header-inner {
  text-align: center;
}
.chart-right {
  &-btn {
    @include flex-center;
    justify-content: space-between;
  }
}
.create-test-left {
  overflow: initial !important;
}

.icon-icon-test {
  font-size: 22px !important;
}
.ivu-tag {
  height: 25px;
  line-height: 25px;
}
.el-dialog {
  margin-top: 0 !important;
  &__wrapper {
    @include flex-center;
  }
}
.ivu-modal {
  top: 0 !important;
  &-wrap {
    @include flex-center;
  }
}
</style>
