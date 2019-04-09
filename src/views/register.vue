<template>
  <div class="login">
    <div class="login-content"
         v-if="!isSuccess">
      <img class="logo"
           src="/static/images/创建企业_团队/u116.png">
      <el-form :model="ruleForm2"
               status-icon
               :rules="rules2"
               ref="ruleForm2"
               label-width="0"
               class="demo-ruleForm">
        <el-form-item prop="email">
          <el-input class="login-input"
                    placeholder="你的邮箱"
                    clearable
                    v-model="ruleForm2.email"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <a href="javascript:"
             class="common-btn"
             @click="submitForm('ruleForm2')">即刻开始<i class="fas fa-arrow-alt-circle-right common-btn-icon"></i></a>
        </el-form-item>
      </el-form>
      <div class="wechat-login">

        <div class="register">第三方账号登录 或 <router-link to="/login"
                       class="register-btn">点点任务账号登录</router-link>
        </div>
        <el-Button type="success" ghost class="wechat-btn"><span class="wechat-btn-text">使用微信登录</span><i class="fab fa-weixin wechat-btn-icon"></i></el-Button>
      </div>
    </div>
    <div class="login-content"
         v-else>
      <img class="logo"
           src="/static/images/创建企业_团队/u116.png">
      <el-form :model="ruleForm2"
               status-icon
               :rules="rules2"
               ref="ruleForm2"
               label-width="0"
               class="demo-ruleForm">
        <el-form-item prop="email">
          <el-input class="login-input"
                    disabled
                    placeholder="你的邮箱"
                    v-model="ruleForm2.email"
                    autocomplete="off"></el-input>
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
             @click="register('ruleForm2')">注册<i class="fas fa-arrow-alt-circle-right common-btn-icon"></i></a>
        </el-form-item>
      </el-form>
      <div class="clause">
        <el-checkbox class="clause-checkbox"
                     v-model="checked"> </el-checkbox>
        <div>我已阅读并同意 《<router-link to="/">服务条款</router-link>》与 《<router-link to='/'>隐私条款</router-link>》</div>
      </div>
    </div>
  </div>
</template>

<script>
import { checkMobile, checkEmail } from '@/utils'

export default {
  data () {
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入你的邮箱'));
      } else {
        if (!checkEmail(value)) {
          callback(new Error('请输入正确的者邮箱'));
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm2.repassword !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validateRePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm2.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      isSuccess: false,
      checked: false,
      ruleForm2: {
        email: '394773007@qq.com',
        name: '',
        password: '',
        repassword: '',
        code: ''
      },
      rules2: {
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        repassword: [
          { validator: validateRePass, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ]
      }
    };
  },
  methods: {
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
    color: #A6A6A6;
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
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translate(-50%, 0);
  }
  .register {
    margin-bottom: 20px;
    font-size: 14px;
    color: #A6A6A6;
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
