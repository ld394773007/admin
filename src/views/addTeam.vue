<template>
  <el-card class="add-team container">
    <div class="add-team-content">
      <img class="logo" src="/static/images/创建企业_团队/u116.png">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="add-team-form">
        <el-form-item label="企业名称"
                      prop="name">
          <el-input v-model="ruleForm.name" class="form-item"></el-input>
        </el-form-item>
        <el-form-item label="企业规模"
                      prop="region">
          <el-select v-model="ruleForm.region"
                     class="form-item"
                     placeholder="请选择活动区域">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目简介">
          <editor/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     class="from-btn"
                     @click="submitForm('ruleForm')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import editor from '@/components/editor'


export default {
  components: {
    editor
  },
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
.add-team {
  @include flex-center;
  &-content {
    @include flex-col-center;
  }
  &-form {
    width: 700px;
  }
  .logo {
    margin-bottom: 30px;
    width: 200px;
  }
  .form-item {
    width: 400px;
  }
  .form-btn {
    margin-left: 100px;
  }
}
</style>
