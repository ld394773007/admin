<template>
  <div class="checkbox">
    <div class="checkbox-left">
      <el-checkbox :indeterminate="isIndeterminate"
                   v-model="checkAll"
                   @change="handleCheckAllChange">{{title}}</el-checkbox>
    </div>
    <div class="checkbox-right">
      <el-checkbox-group class="checkbox-group" v-model="checkAllGroup"
                         @change="checkAllGroupChange">
        <div class="checkbox-item" v-for="item in checkGroup" :key="item">
          <el-checkbox
                     :label="item"
                     >{{item}}</el-checkbox>
        </div>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '全选'
    },
    checkGroup: {
      type: Array,
      default: () => (['全企业内创建项目','编辑全企业内项目分组','查看企业所有项目','全企业内主动加入的项目', '全企业内分组成员管理','查看企业所有项目分组'])
    }
  },
  data () {
    return {
      isIndeterminate: false,
      checkAll: false,
      checkAllGroup: []
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkAllGroup = val ? this.checkGroup : [];
      this.isIndeterminate = false;
      this.$emit('checkA-all', this.checkGroup)
    },
    checkAllGroupChange (value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.checkGroup.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkGroup.length;
      this.$emit('checkA-all', this.checkGroup)
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  width: 100%;
  padding: 15px 0;
  padding-bottom: 4px;
  &-left {
    margin-right: 20px;
  }
  &-right {
    flex: 1;
  }
  &-group {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    width: 182px;
    margin-bottom: 15px;
  }
}
</style>
