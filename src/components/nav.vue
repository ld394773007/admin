<template>
  <div class="nav">
    <Modal v-model="dialogVisible"
           footer-hide
           :styles="{top: '20px'}"
           width="800">
      <p slot="header"
         style="text-align:center;font-size:16px;">
        <span>当前企业付费状态</span>
      </p>
      <div class="level-popup">
        <p class="level-popup-title">名额使用情况</p>
        <Card>
          <div class="level-popup-card">
            <div class="level-popup-card-left">
              <i-circle :size="80"
                        :percent="80">
                <span class="demo-Circle-inner"
                      style="font-size:24px">80%</span>
              </i-circle>
            </div>
            <div class="level-popup-card-right">
              <div class="level-popup-info">
                <div class="level-popup-info-header">
                  <div class="level-popup-item">
                    <span>可用名额</span>
                    <p>10</p>
                  </div>
                  <div class="level-popup-item">
                    <span>剩余可激活成员名额</span>
                    <p>8</p>
                  </div>
                </div>

                <span>名额有效期至 2020-04-15</span>
              </div>
              <el-button @click="$router.push('/order')"
                         class="level-popup-btn"
                         plain>购买名额</el-button>
            </div>
          </div>
        </Card>
        <div class="qytq">
          <p class="level-popup-title">企业特权</p>
          <div class="qytq-icon">
            <div class="qytq-img">
              <img src="/static/images/basic-medal-active.4e09e98d.png"
                   alt="">
            </div>
            <p>企业版功能</p>
            <span>适用于任何规模的团队或企业</span>
          </div>
          <div class="qytq-list">
            <p>任务、日程、文件、分享、聊天</p>
            <p>企业和项目统计报告</p>
            <p>强大并易于配置的权限管理</p>
            <p>企业组织架构管理</p>
            <p>项目和成员甘特图</p>
            <p>自定义任务类型和字段</p>
            <p>任务工时统计</p>
            <p>项目信息表</p>
            <p>丰富的第三方应用</p>
          </div>
        </div>
      </div>
    </Modal>
    <div class="nav-left">
      <img class="logo"
           src="/static/images/logo.svg">
      <Menu mode="horizontal"
            :active-name="activeName">
        <MenuItem name="1" to="/home">
        首页
        </MenuItem>
        <MenuItem name="2" to="/home/project">
        项目
        </MenuItem>
        <MenuItem name="3" to="/home/wiki">
        wiki
        </MenuItem>
        <MenuItem name="4" to="/home/information">
        数据
        </MenuItem>
      </Menu>
    </div>

    <div class="nav-right">
      <Dropdown trigger="click">
        <a href="javascript:"
           class="nav-plus">
          <i class="plus-icon"></i>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>
            <div class="down-item"
                 @click="showProjectPop = true">
              <i class="iconfont icon-group down-item-icon"></i>
              项目
            </div>
          </DropdownItem>
          <DropdownItem>
            <div class="down-item"
                 @click="showTestPop = true">
              <i class="iconfont icon-group down-item-icon"></i>
              任务
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <i class="line"></i>
      <i @click="$router.push('/home/enterprise/info')"
         class="iconfont icon-group nav-icon"></i>
      <router-link to="/home/team">
        <i class="iconfont icon-icon-test nav-icon"></i>
      </router-link>

      <Dropdown>
        <a href="javascript:"
           @click="changVisible"
           class="nav-plus">
          <Badge class="plus-badge"
                 dot>
            <i class="iconfont icon-lingdang nav-icon"></i>
          </Badge>

        </a>
        <DropdownMenu slot="list">
          <Card title="消息中心"
                :padding="0"
                shadow
                class="message-card">
            <a href="javascript:"
               @click="clickMoreMessage"
               slot="extra">
              查看更多
            </a>
            <CellGroup>
              <Cell v-for="item in 10"
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
          </Card>
        </DropdownMenu>
      </Dropdown>
      <i class="iconfont icon-rili nav-icon"></i>
      <Dropdown trigger="click">
        <a href="javascript:"
           class="nav-help">
          <i class="iconfont icon-help nav-icon"></i>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem><router-link to="/home/help">帮助中心</router-link></DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <a href="javascript:"
         @click="dialogVisible = true"
         class="upgrade-btn">升级</a>
      <router-link to="/home/user">
        <Badge class="commom-badge"
               dot>
          <Avatar class="nav-avatar user-avatar">陈波</Avatar>
        </Badge>
      </router-link>
      <Dropdown class="hide-dropdown"  trigger="click">
        <a href="javascript:"
           class="nav-list">
          <Icon type="ios-list"
                color="#a6a6a6"
                size="26" />
          阿里巴巴科技有限公司
        </a>
        <DropdownMenu slot="list">
          <Card title="Options"
                icon="ios-options"
                :padding="0"
                shadow
                style="width: 200px;">
            <router-link class="card-title"
                         to="/createTeam"
                         slot="title">创建团队/企业</router-link>
            <CellGroup>
              <Cell title="个人空间" />
              <Cell title="阿里巴巴有限公司" />
              <Cell title="腾讯科技有限公司" />
              <Cell class="nav-out"
                    title="退出" />
            </CellGroup>
          </Card>
        </DropdownMenu>
      </Dropdown>
    </div>
    <Modal width="550px"
           title="新建项目"
           :styles="{top: '20px'}"
           v-model="showProjectPop">
      <div class="add-project">
        <Form :model="formItem"
              :label-width="0">
          <FormItem>
            <Input style="width:510px"
                   v-model="formItem.name"
                   placeholder="请输入项目名称"></Input>
          </FormItem>
          <FormItem>
            <Select placeholder="请选择项目优先级" style="width:510px"
                    v-model="formItem.level">
              <Option value="1">一般</Option>
              <Option value="2">重要</Option>
              <Option value="3">紧急</Option>
              <Option value="3">紧急且重要</Option>
            </Select>
          </FormItem>
          <FormItem >
            <div class="time-input">
              <DatePicker type="date"
                          style="width: 250px"
                          placeholder="选择开始时间"
                          v-model="formItem.startTime"></DatePicker>
                <span>-</span>
              <TimePicker type="time"
                          style="width: 250px"
                          placeholder="选择结束时间"
                          v-model="formItem.endTime"></TimePicker>
            </div>
          </FormItem>
          <FormItem>
            <div style="width: 510px">
              <editor v-model="formItem.dec"></editor>
            </div>
          </FormItem>
          <!-- <FormItem>
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
          </FormItem> -->
        </Form>
      </div>
    </Modal>
    <Modal width="1200px"
           title="新建任务"
           :styles="{top: '20px'}"
           v-model="showTestPop">
      <create-test></create-test>
    </Modal>
  </div>
</template>

<script>
import editor from './editor'
import createTest from './createTest'
export default {
  name: 'header-nav',
  components: {
    createTest,
    editor
  },
  data () {
    return {
      dialogVisible: false,
      showTestPop: false,
      showProjectPop: false,
      visible: false,
      listPop: false,
      bellPop: false,
      formItem: {
        name: '',
        level: '',
        startTime: '',
        endTime: '',
        dec: ''
      },
      msg: 'Welcome to Your Vue.js App',
      navPath: ['/home', '/home/project', '/home/wiki', '/home/admin', '/home/kanban']
    }
  },
  computed: {
    activeName () {
      let { fullPath } = this.$route
      return String(this.navPath.indexOf(fullPath) + 1)
    }
  },
  methods: {
    changVisible (e) {
      e.stopPropagation()
      this.visible = true
    },
    clickMoreMessage (e) {
      e.stopPropagation();
      this.visible = false
      this.$router.push('/home/message')
    },
    handleSelect (e, i) {
      this.$router.push(this.navPath[e - 1])
    },
    clickAddTeam () {
      this.$router.push('/home/addTeam')
      this.listPop = false
    },
    clickMore () {
      this.$router.push('/home/message')
      this.bellPop = false
    }
  },
  created () {
    document.body.addEventListener('click', () => {
      this.visible = false
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
.nav {
  @include flex-center;
  position: relative;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  z-index: 10;
  width: 100%;
  min-width: 1200px;
  .icon-group {
    cursor: pointer;
  }
  &-out {
    border-top: 1px solid #e7e7e7;
  }
  .card-title {
    color: #409eff;
  }
  &-plus,
  &-help {
    @include flex-center;
    height: 48px;
  }
  .down-item {
    @include flex-center;
    justify-content: flex-start;
    &-icon {
      margin-right: 8px;
    }
  }
  .plus-badge {
    width: 30px;
    margin-right: 8px;
  }
  &-avatar {
    cursor: pointer;
  }
  .upgrade-btn {
    @include flex-center;
    height: 24px;
    padding: 4px 12px;
    margin-right: 12px;
    border-radius: 16px;
    color: #fff;
    font-size: 12px;
    background: linear-gradient(to bottom right, #4276ff, #32b6ff);
    box-shadow: 0 0 2px 0 rgba(36, 100, 147, 0.2);
    &:hover {
      cursor: pointer;
      box-shadow: 0 2px 8px 0 rgba(13, 119, 226, 0.3);
    }
  }
  .nav-icon {
    margin: 0 8px;
    &.icon-icon-test {
      font-size: 24px;
    }
  }
  .plus-icon {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    opacity: 0.8;
    transition: opacity 0.3s;
    background: url('/static/images/circle-plus.ff3746b2.svg') no-repeat;
    background-size: 100%;
    &:hover {
      opacity: 1;
    }
  }
  .line {
    margin: 0 8px;
    height: 20px;
    border-right: 1px solid #cccaca;
  }
  .fa-user-friends {
    cursor: pointer;
  }
  .bell-wrap {
    @include flex-center;
    height: 60px;
    margin-left: 30px;
    cursor: pointer;
  }
  &-left {
    @include flex-center;
    justify-content: start;
    cursor: pointer;
  }
  &-right {
    @include flex-center;
  }
  &-list {
    @include flex-center;
    margin-left: 10px;
    height: 48px;
    .fa-list-ul {
      margin-right: 10px;
      cursor: pointer;
    }
    &-pop {
      padding: 10px 0px;
      &_item {
        @include flex-center;
        margin-top: 10px;
        justify-content: space-between;
        color: #606266;
        font-size: 14px;
      }
      .add-team {
        color: rgba($color: #409eff, $alpha: 0.7);
      }
    }
  }
  .user-name {
    @include flex-center;
    margin-left: 30px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #409eff;
  }
  .logo {
    margin-right: 50px;
    width: 120px;
  }
}
.message {
  &-card {
    width: 400px;
  }
  &-header {
    @include flex-center;
    margin-bottom: 10px;
    justify-content: space-between;
  }
  &-left {
    @include flex-center;
  }
  &-item {
    @include flex-center;
    margin-bottom: 15px;
    justify-content: flex-start;
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

</style>
