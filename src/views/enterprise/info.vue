<template>
  <div class="info">
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="企业名称">
        <el-input class="info-input"
                  placeholder="请填写企业名称"
                  v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="企业规模">
        <el-select class="info-input"
                   v-model="form.scale"
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
        <editor v-model="form.info"></editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
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

<style lang="scss" scoped>
.info {
  width: 700px;
  &-input {
    width: 300px;
  }
}
</style>

