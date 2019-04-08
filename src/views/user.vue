<template>
  <el-card class="user continar">
    <div class="user-left">
      <el-menu :default-active="active"
               class="user-menu"
               @select="selectMenu">
        <el-menu-item index="1">
          <i class="far fa-id-card"></i>
          <span slot="title">个人信息</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="fas fa-users-cog"></i>
          <span slot="title">账号密码</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="fab fa-weixin"></i>
          <span slot="title">微信绑定</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="fas fa-user-cog"></i>
          <span slot="title">账户状态</span>
        </el-menu-item>
      </el-menu>

    </div>
    <div class="user-right">
      <div class="user-content"
           v-if="active == 1">
        <el-form ref="form"
                 :model="form"
                 label-width="100px">
          <el-form-item label="姓名">
            <el-input class="form-input"
                      v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input class="form-input"
                      v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="生日">
            <el-date-picker class="form-input"
                            v-model="form.birthday"
                            type="date"
                            placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="地址">
            <el-input class="form-input"
                      v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="user-content"
           v-if="active == 2">
        <el-form ref="formTwo"
                 :model="form"
                 label-width="100px">
          <el-form-item label="email">
            <div class="form-wrap">
              <el-input class="form-input"
                        v-model="formTwo.email"></el-input>
              <el-button class="form-wrap-btn">为验证</el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="form-wrap-btn">发送邮件</el-button>
          </el-form-item>
          <el-form-item label="电话">
            <div class="form-wrap">
              <el-input class="form-input"
                        v-model="formTwo.phone"></el-input>
              <el-button class="form-wrap-btn">确认绑定</el-button>
            </div>
          </el-form-item>
          <el-form-item label="旧密码">
            <el-input class="form-input"
                      type="password"
                      v-model="formTwo.password"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input type="password"
                      class="form-input"
                      v-model="formTwo.oldPassword"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码">
            <el-input type="password"
                      class="form-input"
                      v-model="formTwo.repassword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button>取消</el-button>
            <el-button type="primary"
                       @click="onSave">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="user-content"
           v-if="active == 3">
        <div class="flex-center flex-start">
          <i class="fab fa-weixin user-wechart"></i>
          <el-button type="primary">绑定</el-button>
        </div>
      </div>
      <div class="user-content" v-if="active == 4">
        <div class="user-item">
          <div class="user-item-left">
            <span class="user-item-text">阿里巴巴优先公司</span>
            <el-tag class="user-item-tag" type="danger">已过期10天</el-tag>
          </div>
          <el-button type="primary">绑定</el-button>
        </div>
         <div class="user-item">
          <div class="user-item-left">
            <span class="user-item-text">腾讯科技有限公司</span>
            <el-tag class="user-item-tag">剩余130天</el-tag>
          </div>
          <el-button type="primary">绑定</el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      active: '1',
      form: {
        name: '',
        phone: '',
        birthday: '',
        address: ''
      },
      formTwo: {
        email: '',
        phone: '',
        password: '',
        oldPassword: '',
        rePassword: ''
      }
    }
  },
  methods: {
    onSave () {

    },
    onSubmit () {
      console.log('submit!');
    },
    selectMenu (index) {
      this.active = index
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  position: relative;
  &-item {
    @include flex-center;
    justify-content: flex-start;
    margin-bottom: 20px;
    &-left {
      @include flex-center;
      margin-right: 30px;
      justify-content: space-between;
      width: 300px;
    }
  }
  .form-wrap {
    @include flex-center;
    justify-content: flex-start;
  }
  .form-input {
    width: 300px;
    margin-right: 30px;
  }
  .user-wechart {
    margin-right: 40px;
    font-size: 50px;
    color: #67C23A;
  }
  &-left {
    position: absolute;
    padding-top: 40px;
    left: 0;
    top: 0;
    bottom: 0;
    border-right: solid 1px #e6e6e6;
  }
  &-right {
    position: absolute;
    left: 200px;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &-content {
    padding: 50px 70px;
    width: 800px;
  }
  &-menu {
    width: 200px;
  }
}
</style>

