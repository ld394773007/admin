<template>
  <div class="test-index">
    <div class="test-index-header">
      <div class="test-index-header-left">

        <Dropdown trigger="click">
          <div class="test-index-header-icon">
            <i class="iconfont icon-list"></i>
          </div>
          <DropdownMenu slot="list">
            <div>
              <div class="user">
                <Avatar style="background-color: #2d8cf0">陈波</Avatar>
                <span class="user-name">陈波</span>
              </div>
              <CellGroup style="width:200px">
                <Cell title="首页" to="/home">
                  <i class="iconfont icon-home" slot="icon"></i>
                </Cell>
                <Cell title="项目" to="/home/project">
                  <i class="iconfont icon-project-o" slot="icon"></i>
                </Cell>
                <Cell title="wiki" to="/home/wiki">
                <i class="iconfont icon-wikipedia" slot="icon"></i></Cell>
                <Cell title="数据" to="/home/project" >
                  <i class="iconfont icon-shuju" slot="icon"></i>
                </Cell>
                <Cell title="新增" to="/home/information">
                  <i class="iconfont icon-plus" slot="icon"></i>
                </Cell>
                <Cell title="管理后台" to="/home/enterprise/info">
                  <i class="iconfont icon-group" slot="icon"></i>
                </Cell>
                <Cell title="团队" to="/home/team" >
                  <i class="iconfont icon-icon-test" slot="icon"></i>
                </Cell>
                <Cell title="通知" to="/home/message" >
                  <i class="iconfont icon-lingdang" slot="icon"></i>
                </Cell>
                <Cell title="日历" >
                  <i class="iconfont icon-rili" slot="icon"></i>
                </Cell>
                <Cell title="帮助" to="/home/help" >
                  <i class="iconfont icon-help" slot="icon"></i>
                </Cell>
              </CellGroup>
            </div>
          </DropdownMenu>
        </Dropdown>
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
    <div ref="body" class="test-index-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
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
    '$route'(n) {
      this.$refs.body.scrollTop = 0
    }
  },
  created () {
    let arr = ['statisticsRing','statisticsHistogram', 'statisticsGk', 'statisticsLine', 'statisticsTrend', 'statisticsProgress']
    this.active = String(this.pathArr.indexOf(this.$route.name) + 1)
    if(arr.indexOf(this.$route.name) > -1) {
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
