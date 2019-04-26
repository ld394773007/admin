<template>
  <div class="test-index">
    <div class="test-index-header">
      <div class="test-index-header-left">

        <div class="test-index-header-icon" @click="changeShowNav">
          <i class="iconfont icon-list"></i>
        </div>
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
          <MenuItem name="1"
                    :to="{name: 'test'}">
          任务
          </MenuItem>
          <MenuItem name="2"
                    :to="{name: 'gt'}">
          甘特图
          </MenuItem>
          <MenuItem name="3"
                    :to="{name: 'document'}">
          文档
          </MenuItem>
          <MenuItem name="4"
                    :to="{name: 'personnel'}">
          人员
          </MenuItem>
          <MenuItem name="5"
                    :to="{name: 'statistics'}">
          统计
          </MenuItem>
          <MenuItem name="6"
                    :to="{name: 'info'}">
          信息
          </MenuItem>
        </Menu>
      </div>
    </div>
    <div ref="body"
         class="test-index-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      active: '',
      value: '1',
      pathArr: ['test', 'gt', 'document', 'personnel', 'statistics', 'info'],
      titleArr: ['未开始/未领取', '进行中', '已完成', '已逾期', '已关闭']
    }
  },
  watch: {
    '$route' (n) {
      this.$refs.body.scrollTop = 0
    }
  },
  methods: {
    ...mapMutations(['changeShowNav'])
  },
  created () {
    let arr = ['statisticsRing', 'statisticsHistogram', 'statisticsGk', 'statisticsLine', 'statisticsTrend', 'statisticsProgress']
    this.active = String(this.pathArr.indexOf(this.$route.name) + 1)
    if (arr.indexOf(this.$route.name) > -1) {
      this.active = '5'
    }
    console.log(arr.indexOf(this.$route.name))
    console.log(this.$route.name)
  }
}
</script>

<style lang="scss" scoped>
.test-index {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  background-color: #ededed;
  .user {
    @include flex-center;
    justify-content: flex-start;
    padding-top: 10px;
    padding-left: 15px;
    margin-bottom: 10px;
    &-name {
      margin-left: 10px;
      font-weight: bold;
    }
  }
  &-header {
    position: relative;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 48px;
    padding-left: 20px;
    background-color: #fff;
    &-left {
      width: 400px;
      display: flex;
      align-items: center;
    }
    &-icon {
      @include flex-center;
      height: 48px;
      margin-right: 10px;
      i {
        color: #383838;
      }
    }
  }
  &-menu {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  &-body {
    box-sizing: border-box;
    height: calc(100vh - 68px);
    margin-top: 20px;
    border-top: 1px solid transparent;
    overflow-y: auto;
  }
}
</style>
