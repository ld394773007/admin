<template>
  <div class="login">
    <div class="login-content">
      <img class="logo" src="/static/images/创建企业_团队/u116.png">
      <el-form :model="ruleForm2"
               status-icon
               :rules="rules2"
               ref="ruleForm2"
               label-width="0"
               class="demo-ruleForm">
        <el-form-item
                      prop="userName">
          <el-input class="login-input"
                    placeholder="请输入你的邮箱或者手机号"
                    v-model="ruleForm2.userName"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
                      prop="pass">
          <el-input type="password"
                    class="login-input"
                    placeholder="请输入你的密码"
                    v-model="ruleForm2.pass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     class="login-btn"
                     @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="wechat-login">
        <el-button type="success" class="wechat-btn" plain>使用微信登录</el-button>
        <div class="register">还没有账号？ <router-link to="/register" class="register-btn">注册新账号</router-link></div>
      </div>
      <div class="reset-password" @click="$router.push('/resetPass')">忘记密码？</div>
    </div>
  </div>
</template>

<script>
import { checkMobile, checkEmail } from '@/utils'

export default {
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
      ruleForm2: {
        pass: '',
        userName: '',
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        userName: [
          { validator: validateName, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/home')
          alert('submit!');
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
  &-content {
    position: relative;
    @include flex-col-center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .register{
    margin-top: 10px;
    font-size: 12px;
    color: #909399;
    &-btn {
      text-decoration: none;
      color: rgba($color: #409EFF, $alpha: 0.8);
    }
  }
  .reset-password {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 200px;
    color: #909399;
  }
  .logo {
    margin-bottom: 30px;
  }
  &-input {
    width: 300px;
  }
  &-btn {
    margin-top: 10px;
    width: 100%;
  }
  .wechat-btn, .wechat-login  {
    width: 100%;
  }
  .wechat-login  {
    @include flex-col-center;
    padding-top: 20px;
    border-top: 1px #DCDFE6 solid;
  }
  .wechat-btn {
    background-color: #fff;
    color: #67C23A;
  }
}
</style>
