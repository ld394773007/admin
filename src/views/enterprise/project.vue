<template>
  <div class="power">
    <h3>项目权限</h3>
    <Collapse v-model="value"
              accordion
              simple>
      <Panel name="1">
        <span>成员</span>
        <div class="panel-content" slot="content">
          <div class="panel-item">
            <checkboxGroup title="企业管理"></checkboxGroup>
          </div>
          <div class="panel-item">
            <checkboxGroup title="成员管理"></checkboxGroup>
          </div>
          <div class="panel-item">
            <checkboxGroup title="权限设置"></checkboxGroup>
          </div>
        </div>
      </Panel>
      <Panel name="2">
        <span>管理员</span>
        <div class="panel-content" slot="content">
          <div class="panel-item">
            <checkboxGroup title="企业管理"></checkboxGroup>
          </div>
          <div class="panel-item">
            <checkboxGroup title="成员管理"></checkboxGroup>
          </div>
          <div class="panel-item">
            <checkboxGroup title="权限设置"></checkboxGroup>
          </div>
        </div>
      </Panel>
      <Panel name="3">
        <span>拥有者</span>
        <div class="panel-content" slot="content">
          <div class="panel-item">
            <checkboxGroup title="企业管理"></checkboxGroup>
          </div>
          <div class="panel-item">
            <checkboxGroup title="成员管理"></checkboxGroup>
          </div>
          <div class="panel-item">
            <checkboxGroup title="权限设置"></checkboxGroup>
          </div>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
import checkboxGroup from '@/components/checkboxGroup'
export default {
  components: {
    checkboxGroup
  },
  data () {
    return {
      value: '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.power {
  h3 {
    margin-bottom: 20px;
  }
  .panel-item {
    border-top: 1px solid #dcdee2;
  }
}
</style>
