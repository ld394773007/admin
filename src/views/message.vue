<template>
  <el-card class="a_message container">
    <div class="a_message-content">
      <div class="a_message-left">
        <div class="a_message-left-header">
          <Dropdown>
            <a href="javascript:void(0)">
              <Icon type="ios-notifications-outline" />
              全部消息
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>全部消息</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input suffix="ios-search"
                 placeholder="请输入关键词"
                 style="width: auto" />
        </div>
        <div class="message-list">
          <CellGroup>
            <Cell v-for="item in 9"
                  :key="item">
              <div class="message-left"
                   slot="icon">
                <i class="message-icon"></i>
                <Avatar class="message-avatar">陈波</Avatar>
              </div>
              <p class="message-title">欧阳志远更新了工作内容，欧阳志远更新了工作内容，欧阳志远更新了工作内容，</p>
              <div slot="label">
                <span>阿里巴巴上市计划</span>
                <span class="message-time">2019-09-09 12:09:56</span>
              </div>
            </Cell>
          </CellGroup>
        </div>
        <div class="message-pagination">
          <el-pagination background
                         pager-count="5"
                         layout="prev, pager, next"
                         :total="1000">
          </el-pagination>
        </div>
      </div>
      <div class="a_message-right">
        <div class="a_message-right-body">
          <div class="a_message-right-name">
            尊敬的chenbo:
          </div>
          <div class="a_message-right-content">
            软件开发云上有您的新动态
          </div>
          <div class="a_message-right-link">
            <span>链接</span>
            <a href="">http://wwww.baidu.com</a>
          </div>
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
  margin: 20px 0;
  height: calc(100vh - 88px);
  &-content {
    display: flex;
  }
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
  &-left {
    margin-right: 20px;
    padding-bottom: 20px;
    width: 380px;
    background-color: #fff;
    &-header {
      @include flex-center;
      justify-content: space-between;
      padding: 15px 10px;
    }
  }
  &-right {
    flex: 1;
    background-color: #fff;
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
      background-color: #f2f6fc;
    }
    &-link {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      a {
        color: #409eff;
      }
    }
    &-table {
      width: 450px;
      margin: 0 auto;
      margin-top: 30px;
      &-header,
      &-body,
      &-list {
        @include flex-center;
      }
      &-header,
      &-list {
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
          color: #303133;
        }
      }
    }
  }
  .message {
    &-list {
      height: 63vh;
      overflow-y: auto;
    }
    &-pagination {
      @include flex-center;
      margin-top: 10px;
    }
    &-left {
      @include flex-center;
    }
    &-icon {
      display: block;
      margin-right: 10px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #409eff;
    }
    &-avatar {
      background-color: #409eff;
    }
    &-info {
      flex: 1;
      @include flex-col-center;
      align-items: flex-start;
    }
    &-title {
      margin-bottom: 8px;
      font-size: 14px;
      color: #545c64;
      width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-text {
      color: #909399;
      font-size: 12px;
    }
    &-time {
      margin-left: 20px;
    }
  }
}
</style>

