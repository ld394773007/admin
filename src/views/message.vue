<template>
  <el-card class="a_message continar">
    <div class="a_message-left">
      <el-tabs v-model="activeName"
               class="a_message-tabs"
               type="border-card"
               @tab-click="handleClick">
        <el-tab-pane label="未读信息"
                     name="unread">
          <div class="a_message-srcoll">
            <div class="a_message-list">
              <span class="a_message-time">2019-09-10</span>
              <div class="a_message-item"
                   v-for="i in 100"
                   :key="i">
                <div class="a_message-title">张琴更新了工作：首页张琴更新了工作：首页张琴更新了工作：首页张琴更新了工作：首页张琴更新了工作：首页</div>
                <div class="release-time">发布时间：2019-09-10</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已读信息"
                     name="read">
          <div class="a_message-srcoll">
            <div class="a_message-list">
              <span class="a_message-time">2019-09-10</span>
              <div class="a_message-item"
                   v-for="i in 10"
                   :key="i">
                <div class="a_message-title">张琴更新了工作：首页张琴更新了工作：首页张琴更新了工作：首页张琴更新了工作：首页张琴更新了工作：首页</div>
                <div class="release-time">发布时间：2019-09-10</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="@我的"
                     name="atme">
          <div class="a_message-srcoll">
            <div class="a_message-list">
              <span class="a_message-time">2019-09-10</span>
              <div class="a_message-item"
                   v-for="i in 100"
                   :key="i">
                <div class="a_message-title">张琴更新了工作：首页张琴更新了工作：首页张琴更新了工作：首页张琴更新了工作：首页张琴更新了工作：首页</div>
                <div class="release-time">发布时间：2019-09-10</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="a_message-right">
      <div class="a_message-right-header">
        <el-select v-model="selectValue"
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-input placeholder="请输入内容"
                  v-model="seachValue"
                  class="search-input">
          <el-button slot="append"
                     icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary">标记为全部已读</el-button>
      </div>
      <div class="a_message-right-body">
        <div class="a_message-right-name">
          尊敬的chenbo:
        </div>
        <div class="a_message-right-content">
          软件开发云上有您的新动态
        </div>
        <div class="a_message-right-wrap">
          <div class="a_message-right-info">
            <div class="a_message-right-info-item">
              <span class="a_message-right-info-left">
                项目：
              </span>
              <span class="a_message-right-info-left">
                练成项目
              </span>
            </div>
            <div class="a_message-right-info-item">
              <span class="a_message-right-info-left">
                工作项：
              </span>
              <span class="a_message-right-info-left">
                练成机械质量检测系统
              </span>
            </div>
            <div class="a_message-right-info-item">
              <span class="a_message-right-info-left">
                修改人：
              </span>
              <span class="a_message-right-info-left">
                chengbo
              </span>
            </div>
            <div class="a_message-right-info-item">
              <span class="a_message-right-info-left">
                修改时间：
              </span>
              <span class="a_message-right-info-left">
                20193-03-10
              </span>
            </div>
          </div>
          <div class="a_message-right-table">
            <div class="a_message-right-table-header">
              <div class="a_message-right-table-item">
                修改字段
              </div>
              <div class="a_message-right-table-item">
                修改前
              </div>
              <div class="a_message-right-table-item">
                修改后
              </div>
            </div>
            <div class="a_message-right-table-body">
              <div class="a_message-right-table-list">
                <div class="a_message-right-table-item">
                  修改后
                </div>
                <div class="a_message-right-table-item">
                  修改后
                </div>
                <div class="a_message-right-table-item">
                  修改后
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="a_message-right-link">
            <span>链接</span>
            <a href="">http://wwww.baidu.com</a>
          </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'unread',
      seachValue: '',
      selectValue: '',
      options: [{
        value: 'dsad',
        label: 'dsa'
      }]
    }
  },
  methods: {
    handleClick (e) {
      console.log()
    }
  },
}
</script>

<style lang="scss">
.a_message {
  position: relative;
  &-item {
    padding-top: 20px;
  }
  &-title {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &-time {
    @include flex-center;
    position: relative;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      height: 1px;
      width: 120px;
      background-color: #ebeef5;
    }
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      height: 1px;
      width: 120px;
      background-color: #ebeef5;
    }
  }
  .release-time {
    margin-top: 4px;
    font-size: 12px;
    color: #c0c4cc;
  }
  .el-tabs__content {
    position: absolute;
    top: 39px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &-srcoll {
    position: absolute;
    padding: 20px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    &.hide {
      overflow: hidden;
    }
  }
  &-left,
  &-tabs {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 400px;
  }
  &-right {
    position: absolute;
    left: 400px;
    right: 0;
    top: 0;
    bottom: 0;
    &-header {
      @include flex-center;
      justify-content: flex-end;
      padding: 10px;
      .search-input {
        width: 300px;
        margin-left: 20px;
        margin-right: 20px;
      }
    }
    &-body {
      margin: 50px auto;
      width: 80%;
      overflow-y: auto;
    }
    &-name {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
      color: #303133;
    }
    &-content {
      margin-bottom: 20px;
      text-indent: 30px;
      font-size: 14px;
      line-height: 28px;
      color: #606266;
    }
    &-wrap {
      padding: 40px;
      border-radius: 10px;
      background-color: #F2F6FC;
    }
    &-link {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      a {
        color: #409EFF;
      }
    }
    &-table {
      width: 450px;
      margin: 0 auto;
      margin-top: 30px;
      &-header, &-body, &-list {
        @include flex-center;
      }
      &-header, &-list {
        border-bottom: 1px solid #606266;
      }

      &-item {
        @include flex-center;
        width: 150px;
        line-height: 40px;
        color: #606266;
      }
      &-header {
        .a_message-right-table-item {
          font-weight: bold;
          color: #303133
        }
      }
    }
  }
}
</style>

