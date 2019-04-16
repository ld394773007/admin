<template>
  <div class="test-index">
    <div class="test-index-header">
      <div class="test-index-header-left">
        <Select v-model="value"
                style="width:180px;"
                filterable>
          <Option value="1">贵阳大数据管理系统</Option>
          <Option value="2">四川大数据管理系统</Option>
          <Option value="3">北京大数据管理系统</Option>
          <Option value="4">上海大数据管理系统</Option>
        </Select>
        <Icon size="20"
              type="ios-arrow-forward" />
        <span>任务</span>
      </div>
      <div class="test-index-menu">
        <Menu mode="horizontal"
              :active-name="active">
          <MenuItem name="1" :to="{name: 'test'}">
          任务
          </MenuItem>
          <MenuItem name="2" :to="{name: 'gt'}">
          甘特图
          </MenuItem>
          <MenuItem name="3" :to="{name: 'document'}">
          文档
          </MenuItem>
          <MenuItem name="4" :to="{name: 'personnel'}">
          人员
          </MenuItem>
          <MenuItem name="5" :to="{name: 'statistics'}">
          统计
          </MenuItem>
          <MenuItem name="6" :to="{name: 'info'}">
          信息
          </MenuItem>
        </Menu>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: '',
      value: '1',
      pathArr: ['test','gt', 'document','personnel', 'statistics', 'info'],
      titleArr: ['未开始/未领取', '进行中', '已完成', '已逾期', '已关闭']
    }
  },
  created() {
    this.active = String(this.pathArr.indexOf(this.$route.name) + 1)
    console.log(this.active)
  }
}
</script>

<style lang="scss" scoped>
.test-index {
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  &-header {
    position: relative;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 48px;
    padding-left: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    &-left {
      width: 400px;
      display: flex;
      align-items: center;
    }
  }
  &-menu {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
}
</style>
