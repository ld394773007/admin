<template>
  <div class="login">
    <div class="login-content"
         v-if="!isSuccess">
      <img class="logo"
           src="/static/images/创建企业_团队/u116.png">
      <el-form :model="ruleForm2"
               label-width="0"
               class="demo-ruleForm">
        <el-form-item prop="phone">
          <el-input class="login-input"
                    placeholder="你的邮箱"
                    clearable
                    v-model="ruleForm2.phone"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="isLogin">
          <el-input class="login-input"
                    placeholder="你的密码"
                    type="password"
                    clearable
                    v-model="ruleForm2.password"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <a href="javascript:"
             class="common-btn"
             @click="submitForm('ruleForm2')">{{!isLogin ? '即刻开始' : '登录'}}<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
        </el-form-item>
      </el-form>
      <div class="wechat-login"
           v-if="!isLogin">

        <div class="register">第三方账号登录 或 <router-link to="/login"
                       class="register-btn">点点任务账号登录</router-link>
        </div>
        <el-Button type="success"
                   ghost
                   class="wechat-btn"><span class="wechat-btn-text">使用微信登录</span><i class="fab fa-weixin wechat-btn-icon"></i></el-Button>
      </div>
    </div>
    <div class="login-content"
         v-else>
      <img class="logo"
           src="/static/images/创建企业_团队/u116.png">
      <el-form :model="ruleForm2"
               label-width="0"
               class="demo-ruleForm">
        <el-form-item>
          <div class="common-phone">
            <div class="common-phone-left">
              <el-select v-model="countryValue"
                         class="common-phone-select"
                         placeholder="请选择">
                <el-option label="中国"
                           value="1"></el-option>
                <el-option label="美国"
                           value="2"></el-option>
                <el-option label="日本"
                           value="3"></el-option>
              </el-select>
            </div>
            <div class="common-phone-right">
              <span class="span-edit area-plus">+</span>
              <input class="country-code"
                     type="text"
                     placeholder="国家码"
                     v-model="countryCode"
                     autocomplete="off"
                     style="width: 48px;">
              <input disabled
                     type="text"
                     v-model="ruleForm2.phone"
                     class="common-phone-input disabled">
            </div>
          </div>
        </el-form-item>
        <el-form-item prop="name">
          <el-input class="login-input"
                    placeholder="姓名"
                    clearable
                    v-model="ruleForm2.name"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input class="login-input"
                    placeholder="密码"
                    clearable
                    show-password
                    v-model="ruleForm2.password"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input class="login-input"
                    placeholder="确认密码"
                    clearable
                    show-password
                    v-model="ruleForm2.repassword"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input class="login-input"
                    placeholder="验证码"
                    clearable
                    v-model="ruleForm2.code"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <a href="javascript:"
             class="common-btn"
             @click="register('ruleForm2')">注册<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
        </el-form-item>
      </el-form>
      <div class="clause">
        <el-checkbox class="clause-checkbox"
                     v-model="checked"> </el-checkbox>
        <div>我已阅读并同意 《<router-link to="/">服务条款</router-link>》与 《<router-link to='/'>隐私条款</router-link>》</div>
      </div>
      <div class="wechat-login"
           v-if="!isLogin">
        <a href="javascript:"
           class="common-btn plan"
           @click="register('ruleForm2')">其他号码登录<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
      </div>
    </div>
    <create-team :current="current" @next-step="nextStep"></create-team>
  </div>
</template>

<script>
import createTeam from '@/components/createTeam'
import { checkMobile, checkEmail } from '@/utils'

export default {
  components: {createTeam},
  data () {
    return {
      isLogin: false,
      isSuccess: false,
      checked: false,
      countryValue: '1',
      countryCode: '',
      current: 0,
      ruleForm2: {
        phone: '13699011543',
        name: '',
        password: '',
        repassword: '',
        code: ''
      },
    };
  },
  methods: {
    nextStep() {
      this.$router.push('/home')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isSuccess = true
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    register (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isSuccess = true
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }

}
</script>

<style lang="scss" scoped>
.login {
  .clause {
    @include flex-center;
    margin-bottom: 10px;
    color: #a6a6a6;
    font-size: 14px;
    font-weight: bold;
    &-checkbox {
      margin-right: 10px;
    }
    a {
      color: #409eff;
    }
  }
  &-content {
    position: relative;
    @include flex-col-center;
    width: 350px;
    margin: 0 auto;
    margin-top: 90px;
  }
  .register {
    margin-bottom: 20px;
    font-size: 14px;
    color: #a6a6a6;
    font-weight: bold;
    &-btn {
      text-decoration: none;
      color: rgba($color: #409eff, $alpha: 0.8);
    }
  }
  .reset-password {
    position: absolute;
    right: 0;
    top: 200px;
    color: #909399;
  }
  .logo {
    margin-bottom: 30px;
  }
  &-input {
    width: 350px;
    &-header {
      @include flex-center;
    }
  }
  &-select {
    width: 80px;
  }
  &-btn {
    margin-top: 10px;
    width: 100%;
  }
  .wechat-btn,
  .wechat-login {
    width: 100%;
  }
  .wechat-login {
    @include flex-col-center;
    padding-top: 20px;
    border-top: 1px #dcdfe6 solid;
  }
  .wechat-btn {
    background-color: #fff;
    color: #67c23a;
  }

}
</style>
