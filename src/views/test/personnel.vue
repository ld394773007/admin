<template>
  <div class="personnel continar">
    <div class="personnel-header">
      <p class="personnel-header-title">所有成员·1</p>
      <el-button class="personnel-header-btn"
                 type="text"
                 @click="visible = true"
                 icon="el-icon-circle-plus">添加成员</el-button>
    </div>
    <Divider class="personnel-divider" />
    <div class="personnel-body">
      <el-table :data="tableData"
                class="personnel-table show-table"
                :show-header="false"
                style="width: 100%">
        <el-table-column width="160">
          <template slot-scope="scope">
            <div class="personnel-name">
              <Avatar>{{scope.row.name}}</Avatar>
              <span>{{scope.row.name}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="bm"
                         width="100">
        </el-table-column>
        <el-table-column prop="phone"
                         width="120">
        </el-table-column>
        <el-table-column prop="email">
        </el-table-column>
        <el-table-column prop="role"
                         width="90">
        </el-table-column>
        <el-table-column label="操作"
                         width="90">
          <template slot-scope="scope">
            <Dropdown>
              <i class="el-icon-more personnel-icon"></i>
              <DropdownMenu slot="list">
                <DropdownItem>查看成员信息</DropdownItem>
                <DropdownItem>编辑项目权限</DropdownItem>
                <DropdownItem>移出项目</DropdownItem>
              </DropdownMenu>
            </Dropdown>

          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="新增成员"
               center
              width="400px"
               :visible.sync="visible">
      <div class="add-dialog">
        <div class="zhyq"><span>账号邀请</span></div>
        <Input suffix="ios-search" placeholder="输入关键词或邮箱搜索" />
        <div class="add-dialog-list">
          <div class="add-dialog-item" v-for="i in 10" :key="i">
            <div class="add-dialog-left">
              <Avatar>GU</Avatar>
              <span>gugugu</span>
            </div>
            <div class="add-dialog-right">
              <Badge status="processing" />
              <span>技术员</span>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        bm: '技术部',
        phone: '13899200937',
        email: '3947738882@qq.com',
        role: '拥有者',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        bm: '技术部',
        phone: '13899200937',
        email: '3947738882@qq.com',
        role: '拥有者',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        bm: '技术部',
        phone: '13899200937',
        email: '3947738882@qq.com',
        role: '拥有者',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        bm: '技术部',
        phone: '13899200937',
        email: '3947738882@qq.com',
        role: '拥有者',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.personnel {
  width: 800px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 5px;
  .add-dialog {
    &-list {
      padding-top: 20px;
      height: 350px;
      overflow-y: auto;
    }
    &-item {
      @include flex-center;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    &-left {
      @include flex-center;
      span {
        margin-left: 10px;
      }
    }
  }
  .zhyq {
    margin-bottom: 10px;
  }
  &-icon {
    font-size: 20px;
    cursor: pointer;
  }
  &-name {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
  &-divider {
    margin-top: 0;
  }
  &-header {
    @include flex-center;
    justify-content: space-between;
    padding: 0 20px;
  }
  &-body {
    padding: 0 20px;
    padding-bottom: 20px;
    height: 70vh;
  }
}
</style>

