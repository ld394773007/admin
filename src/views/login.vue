<template>
  <div class="login">
    <div class="login-content">
      <img class="logo"
           src="/static/images/创建企业_团队/u116.png">
      <Form ref="formData"
            :model="formData"
            :label-width="0">
        <FormItem>
          <el-input class="login-input" clearable v-model="formData.userName" placeholder="请输入手机号或者邮箱"></el-input>
        </FormItem>
        <FormItem>
          <el-input class="login-input" clearable show-password v-model="formData.pass" placeholder="请输入密码"></el-input>
        </FormItem>
        <FormItem>
          <err-message :value="message"></err-message>
          <a href="javascript:"
             class="common-btn login-btn"
             @click="submitForm">登录<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
        </FormItem>
      </Form>

      <div class="wechat-login">
        <el-Button type="success" ghost class="wechat-btn"><span class="wechat-btn-text">使用微信登录</span><i class="iconfont icon-wechat wechat-btn-icon"></i></el-Button>
        <div class="register">还没有账号？ <router-link to="/register"
                       class="register-btn">注册新账号</router-link>
        </div>
      </div>
      <div class="reset-password"
           @click="$router.push('/resetPass')">忘记密码？</div>
    </div>
  </div>
</template>

<script>
import errMessage from '@/components/errMessage'
import { checkMobile, checkEmail } from '@/utils'

export default {
  components: {
    errMessage
  },
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入你的手机号或者邮箱'));
      } else {
        if (checkMobile(value) || checkEmail(value)) {
          callback();
        } else {
          callback(new Error('请输入正确的手机号或者邮箱22'));
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 6) {
        callback(new Error('密码不能小于6位'));
      } else {
        callback();
      }
    };
    return {
      formData: {
        pass: '',
        userName: '',
      },
      message: '',
      passType: true
    };
  },
  methods: {

    onFocus () {
      this.message = ''
    },
    submitForm (formName) {
      console.log(111)
      let { pass, userName } = this.formData

      if (checkMobile(userName) || checkEmail(userName)) {
        if (pass == '') {
          this.message = '密码不能为空'
        } else if (pass.length < 6) {
          this.message = '密码过短'
        } else {
          alert('login success')
          this.$router.push('/home')
        }
      } else {
        console.log(1122)
        this.message = '请输入正确的手机号或邮箱'
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.login {
  &-btn {
    margin-top: 16px;
  }
  &-content {
    position: relative;
    @include flex-col-center;
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translate(-50%, 0);
  }
  .register {
    margin-top: 10px;
    font-size: 14px;
    color: #A6A6A6;
    font-weight: bold;
    &-btn {
      text-decoration: none;
      color: rgba($color: #409eff, $alpha: 0.8);
    }
  }
  .reset-password {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 210px;
    font-size: 14px;
    font-weight: bold;
    color: #A6A6A6;
  }
  .logo {
    margin-bottom: 30px;
  }
  &-input {
    width: 350px;
  }


  .fa-eye,
  .fa-eye-slash {
    font-size: 16px;
  }
}
</style>
