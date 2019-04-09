<template>
  <div class="nav">
    <div class="nav-left">
      <img class="logo"
           src="/static/images/导航/u31.png">
      <el-menu default-active="1"
               class="el-menu-demo"
               mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="1">工作台</el-menu-item>
        <el-menu-item index="2">项目</el-menu-item>
        <el-menu-item index="3">wiki</el-menu-item>
        <el-menu-item index="4">管理后台</el-menu-item>
        <el-menu-item index="5">管理看板</el-menu-item>
      </el-menu>
    </div>
    <div class="nav-right">
      <router-link to="/home/team"
                   class="team-btn"><i class="fas fa-user-friends"></i></router-link>
      <el-popover placement="bottom"
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
      </el-popover>

      <router-link to='/home/user'
                   class="user-name">陈</router-link>
      <el-popover placement="bottom"
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
      </el-popover>

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
      this.$router.push(this.navPath[e-1])
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
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px;
  justify-content: space-between;
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
    margin-left: 30px;
    height: 60px;
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
  &-item {
    @include flex-center;
    margin-bottom: 15px;
    justify-content: flex-start;
  }
  &-icon {
    margin-right: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #409eff;
  }
  &-avatar {
    @include flex-center;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    font-size: 12px;
    color: #fff;
    border-radius: 50%;
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
    width: 230px;
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
