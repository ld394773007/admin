<template>
  <div class="reset">
    <div class="reset-content">
      <img class="logo"
           src="/static/images/创建企业_团队/u116.png">
      <el-form :model="reset"
               status-icon
               :rules="rules2"
               ref="reset"
               label-width="0"
               class="demo-ruleForm">
        <el-form-item prop="email">
          <el-input class="reset-input"
                    disabled
                    placeholder="你的邮箱"
                    v-model="reset.email"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input class="reset-input"
                    placeholder="密码"
                    v-model="reset.password"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input class="reset-input"
                    placeholder="确认密码"
                    v-model="reset.repassword"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     class="reset-btn"
                     @click="submit('reset')">重置密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {checkEmail } from '@/utils'

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
        if (this.reset.repassword !== '') {
          this.$refs.reset.validateField('checkPass');
        }
        callback();
      }
    };
    var validateRePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.reset.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      isSuccess: true,
      reset: {
        email: '394773007@qq.com',
        password: '',
        repassword: '',
      },
      rules2: {
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        repassword: [
          { validator: validateRePass, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/home')
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
.reset {
  .clause {
    @include flex-center;
    color: #909399;
    font-size: 12px;
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
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .register {
    margin-bottom: 20px;
    font-size: 12px;
    color: #909399;
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
    width: 300px;
  }
  &-btn {
    margin-top: 10px;
    width: 100%;
  }
  .wechat-btn,
  .wechat-reset {
    width: 100%;
  }
  .wechat-reset {
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
