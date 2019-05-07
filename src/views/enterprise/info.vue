<template>
  <div class="info focus-form">
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="企业名称">
        <el-input class="info-input"
                  placeholder="请填写企业名称"
                  @focus="showBtn = true"
                  v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="企业规模">
        <el-select class="info-input"
                   v-model="form.scale"
                   @focus="showBtn = true"
                   placeholder="请选择公司规模">
          <el-option label="小型企业"
                     value="1"></el-option>
          <el-option label="中型企业"
                     value="2"></el-option>
          <el-option label="大型企业"
                     value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="企业简介">
        <div class="editor-wrap" @click="showBtn = true">
          <editor v-model="form.info"></editor>
        </div>
      </el-form-item>
      <el-form-item v-if="showBtn">
        <el-button type="primary"
                   class="info-btn"
                   @click="onSubmit">立即创建</el-button>
        <el-button class="info-btn">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import editor from '@/components/editor'
export default {
  components: {
    editor
  },
  data () {
    return {
      showBtn: false,
      form: {
        name: '',
        scale: '',
        info: ''
      }
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style lang="scss">
.info {
  width: 700px;
  &-input {
    width: 510px;
    height: 38px;
    .el-input__inner {
      height: 38px;
    }
  }
  .editor-wrap {
    width: 510px;
  }
  .info-btn {
    height: 38px;
  }
}
</style>

