<template>
  <div class="err-message"
       v-if="value"><i class="err-message-icon el-icon-warning"></i>{{value}}</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.err-message {
  height: 20px;
  color: #f74555;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 16px;
  &-icon {
    margin-right: 4px;
  }
}
</style>
