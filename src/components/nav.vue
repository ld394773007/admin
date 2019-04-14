<template>
  <div class="nav">
    <div class="nav-left">
      <img class="logo"
           src="/static/images/导航/u31.png">
      <Menu mode="horizontal"
            active-name="1">
        <MenuItem name="1">
        首页
        </MenuItem>
        <MenuItem name="2">
        项目
        </MenuItem>
        <MenuItem name="2">
        wiki
        </MenuItem>
        <MenuItem name="4">
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
            <div class="down-item">
              <i class="iconfont icon-group down-item-icon"></i>
              项目
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <i class="line"></i>
      <i @click="$router.push('/home/enterprise/info')" class="iconfont icon-group nav-icon"></i>
      <router-link to="/home/team">
        <i class="iconfont icon-icon-test nav-icon"></i>
      </router-link>

      <Dropdown trigger="click">
        <a href="javascript:"
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
                style="width: 400px;">
            <router-link to="/home/message"
                         slot="extra">
              查看更多
            </router-link>
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
          <DropdownItem>帮助中心</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <a href="javascript:"
         class="upgrade-btn">升级</a>
      <router-link to="/home/user">
        <Badge class="commom-badge"
               dot>
          <Avatar class="nav-avatar user-avatar">陈波</Avatar>
        </Badge>
      </router-link>
      <Dropdown trigger="click">
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
            <router-link class="card-title" to="/createTeam" slot="title">创建团队/企业</router-link>
            <CellGroup>
              <Cell title="个人空间" />
              <Cell title="阿里巴巴有限公司" />
              <Cell title="腾讯科技有限公司" />
              <Cell class="nav-out" title="退出" />
            </CellGroup>
          </Card>
        </DropdownMenu>
      </Dropdown>

      <!-- <el-popover placement="bottom"
                  width="300"
                  v-model="bellPop"
                  trigger="manual">
        <div class="bell-wrap"
             slot="reference"
             @click="bellPop = !bellPop">
          <i class="fa fa-bell-o"></i>
        </div>
        <div class="message-content">
          <div class="message-header">
            <h3 class="message-header-title">消息中心</h3>
            <a href="javascript:"
               @click="clickMore"
               class="load-more">查看更多</a>
          </div>
          <div class="message-list">
            <div class="message-item"
                 v-for="i in 10"
                 :key="i">
              <i class="message-icon"></i>
              <div class="message-avatar">
                陈
              </div>
              <div class="message-info">
                <div class="message-title">欧阳志愿更新了工作项，提供登录接口给甲方，签订合同，修改维护记录</div>
                <div class="message-text">
                  <span class="message-plan">阿里巴巴上市计划</span>
                  <span class="message-time">2019-09-09 12:09:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-popover> -->

      <!-- <el-popover placement="bottom"
                  width="300"
                  v-model="listPop"
                  trigger="manual">
        <div class="nav-list"
             @click="listPop = !listPop"
             slot="reference">
          <i class="fa fa-list-ul"></i>
          <span>阿里巴巴科技有限公司</span>
        </div>

        <div class="nav-list-pop">
          <a href="javascript:"
             @click="clickAddTeam"
             class="add-team">创建企业/团队</a>
          <div class="nav-list-pop_item">
            <span class="item-left">个人空间</span>
            <el-tag>永久免费</el-tag>
          </div>
          <div class="nav-list-pop_item">
            <span class="item-left">阿里巴巴科技有限公司</span>
            <el-tag type="danger">已过期10天</el-tag>
          </div>
          <div class="nav-list-pop_item">
            <span class="item-left">腾讯科技有限公司</span>
            <el-tag>剩余130天</el-tag>
          </div>
        </div>
      </el-popover> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'header-nav',
  data () {
    return {
      listPop: false,
      bellPop: false,
      msg: 'Welcome to Your Vue.js App',
      navPath: ['/home', '/home/project', '/home/wiki', '/home/admin', '/home/kanban']
    }
  },
  methods: {
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav {
  @include flex-center;
  position: relative;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  z-index: 10;
  .icon-group  {
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
