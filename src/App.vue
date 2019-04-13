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
  font-size: 14px;
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
}

.continar {
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
    margin-top: 12px;
    margin-left: 8px;
    font-size: 22px;
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
  &-input {
    flex: 1;
    margin-left: 5px;
    height: 46px;
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
  font-size: 16px;
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
.user-avatar {
  background-color:#cdd081;
}
</style>
