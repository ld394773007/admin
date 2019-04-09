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

i {
  font-style: normal;
}

a {
  color: #303133;
  text-decoration: none;
}
button {
  background: none;
  border: none;
  outline: none;
}

.continar {
  width: 97%;
  height: calc(100vh - 100px);
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
  margin-top: 10px;
  padding: 0 16px;
  width: 100%;
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  background-color: #3da8f5;
  border-radius: 5px;
  cursor: pointer;
  transition: padding-right 0.25s;
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
</style>
