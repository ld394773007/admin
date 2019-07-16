<template>
  <div class="personnel container">
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
                @row-click="rowClick"
                style="width: 100%">
        <el-table-column width="160">
          <template slot-scope="scope">
            <div class="personnel-name">
              <Avatar>{{scope.row.name}}</Avatar>
              <span>{{scope.row.name}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="department"
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
              <i class="el-icon-more personnel-icon"
                 @click="stopPropagation($event)"></i>
              <DropdownMenu slot="list">
                <div @click.stop="() => {}">
                  <DropdownItem><span @click="rowClick(scope.row)">查看成员信息</span></DropdownItem>
                  <DropdownItem><span @click="showPower = true">编辑项目权限</span></DropdownItem>
                  <DropdownItem>移出项目</DropdownItem>
                </div>
              </DropdownMenu>
            </Dropdown>

          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="新增成员"
               center
               class="common-dialog"
               width="400px"
               :visible.sync="visible">
      <div class="add-dialog">
        <Input suffix="ios-search"
               placeholder="输入关键词或邮箱搜索" />
        <div class="add-dialog-list">
          <div class="add-dialog-item"
               v-for="i in 10"
               :key="i">
            <div class="add-dialog-left">
              <Avatar>GU</Avatar>
              <span>gugugu</span>
            </div>
            <div class="add-dialog-right">
              <div class="add-dialog-right-text">
                <Badge status="processing" />
                <span>技术员</span>
              </div>
              <div class="add-dialog-right-btn">
                <el-button v-if="i < 3"
                           size="small">加入</el-button>
                <el-button v-else
                           type="text"
                           size="small"
                           disabled>已加入</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <Modal v-model="showPower"
           width="300px"
           :closable="false"
           :styles="{top: '20%'}"
           footer-hide>
      <div class="power-popup">
        <CellGroup @on-click="onClickCell">
          <Cell name="1" title="项目管理员" :selected="selected == 1">
            <Icon type="md-checkmark" slot="extra" v-if="selected == 1" />
          </Cell>
          <Cell name="2" title="项目成员" :selected="selected == 2">
            <Icon type="md-checkmark" v-if="selected == 2" slot="extra" />
          </Cell>
        </CellGroup>
      </div>
    </Modal>
    <Modal v-model="show"
           width="800px"
           :styles="{top: '5%'}"
           footer-hide
           @on-visible-change="onVisibleChange"
           title="企业成员信息">
      <div class="personnel-info">
        <div class="personnel-info-header">
          <div class="personnel-info-header-left">
            <Avatar class="personnel-info-avatar"
                    style="background-color: #87d068"
                    size="large">{{selectData.name}}</Avatar>
            <span>{{selectData.name}}</span>
          </div>
          <div class="personnel-info-header-right">
            <div class="personnel-info-email">
              <Icon type="ios-mail-outline"
                    size="16" /><span>{{selectData.email}}</span></div>
            <div class="personnel-info-phone">
              <Icon type="md-phone-portrait" /><span>{{selectData.phone}}</span></div>
          </div>
        </div>
        <div class="personnel-info-title">
          <h3>详细资料</h3>

        </div>
        <div class="personnel-info-content">
          <Row class="personnel-info-row">
            <Col span="8">
            <span>姓名</span>
            <p>{{selectData.name}}</p>
            </Col>
            <Col span="8">
            <span>司龄</span>
            <p>2年</p>
            </Col>
            <Col span="8">
            <span>职位</span>
            <p>{{selectData.position}}</p>
            </Col>
          </Row>
          <Row class="personnel-info-row">
            <Col span="8">
            <span>员工类型</span>
            <p>{{selectData.type}}</p>
            </Col>
            <Col span="8">
            <span>办公地点</span>
            <p>北京 故宫</p>
            </Col>
            <Col span="8">
            <span>电子邮箱</span>
            <p>{{selectData.email}}</p>
            </Col>
          </Row>
          <Row class="personnel-info-row">
            <Col span="8">
            <span>电话</span>
            <p>{{selectData.phone}}</p>
            </Col>
            <Col span="8">
            <span>生日</span>
            <p>{{selectData.birthday}}</p>
            </Col>
            <Col span="8">
            <span>部门</span>
            <p>{{selectData.department}}</p>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
    <Modal v-model="edit"
           :styles="{top: '5%'}"
           title="编辑企业成员信息">
      <div class="personnel-popup">
        <Form :model="selectData"
              label-position="top">
          <Row :gutter="16">
            <Col span="12">
            <FormItem label="姓名">
              <Input placeholder="请填写姓名"
                     v-model="selectData.name"></Input>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="电子邮件">
              <Input placeholder="请填写电子邮件"
                     v-model="selectData.email"></Input>
            </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
            <FormItem label="生日">
              <Input placeholder="请选择生日"
                     v-model="selectData.birthday"></Input>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="入职时间">
              <Input placeholder="请选择入职时间"
                     v-model="selectData.entryTime"></Input>
            </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
            <FormItem label="员工类型">
              <Select placeholder="请选择员工类型"
                      v-model="selectData.type">
                <Option value="全职">全职</Option>
                <Option value="兼职">兼职</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="公司职位">
              <Select placeholder="请选择公司职位"
                      v-model="selectData.position">
                <Option value="总经理">总经理</Option>
                <Option value="主管">主管</Option>
                <Option value="员工">员工</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>

          <FormItem label="部门">
            <Select placeholder="请选择部门"
                    v-model="selectData.department">
              <Option value="技术部">技术部</Option>
              <Option value="产品部">产品部</Option>
              <Option value="销售部">销售部</Option>
            </Select>
          </FormItem>
          <FormItem label="工作地点">
            <Cascader placeholder="请选择工作地点"
                      :data="addressData"
                      change-on-select
                      v-model="selectData.address"></Cascader>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="primary"
                size="large"
                long
                @click="edit = false">保存</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      selectData: {},
      edit: false,
      showPower: false,
      show: false,
      selected: 0,
      tableData: [{
        id: 1,
        birthday: '2016-05-02',
        entryTime: '2019-05-01',
        position: "总经理",
        type: "全职",
        name: '王小虎',
        department: '技术部',
        phone: '13899200937',
        email: '3947738882@qq.com',
        role: '拥有者',
        address: ['beijing', 'gugong']
      }, {
        id: 2,
        birthday: '2011-03-02',
        entryTime: '2017-04-01',
        position: "员工",
        type: "全职",
        name: '李四',
        department: '销售部',
        phone: '13899200937',
        email: '22222@qq.com',
        role: '拥有者',
        address: ['jiangsu', 'nanjing', 'fuzimiao']
      }, {
        id: 3,
        birthday: '1990-05-02',
        entryTime: '2014-04-01',
        position: "主管",
        type: "兼职",
        name: '王五',
        department: '产品部',
        phone: '13899200937',
        email: '1111111@qq.com',
        role: '拥有者',
        address: ['jiangsu', 'suzhou', 'shizilin']
      }],
      addressData: [{
        value: 'beijing',
        label: '北京',
        children: [
          {
            value: 'gugong',
            label: '故宫'
          },
          {
            value: 'tiantan',
            label: '天坛'
          },
          {
            value: 'wangfujing',
            label: '王府井'
          }
        ]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'fuzimiao',
                label: '夫子庙',
              }
            ]
          },
          {
            value: 'suzhou',
            label: '苏州',
            children: [
              {
                value: 'zhuozhengyuan',
                label: '拙政园',
              },
              {
                value: 'shizilin',
                label: '狮子林',
              }
            ]
          }
        ],
      }]
    }
  },
  methods: {
    onClickCell(name) {
      this.selected = name
      this.showPower = false
    },
    stopPropagation (e) {
      console.log(e)
      e.stopPropagation()
    },
    onVisibleChange (t) {
      if (!t) {
        this.selectData = {}
      }
    },
    rowClick (row, column) {
      this.selectData = row
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.personnel {
  width: 1200px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 5px;

  &-info {
    padding: 0 40px;
    &-title {
      @include flex-center;
      justify-content: space-between;
      margin: 10px 0;
    }
    &-email,
    &-phone {
      span {
        margin-left: 6px;
      }
    }
    &-avatar {
      margin-right: 10px;
    }
    &-header {
      @include flex-center;
      justify-content: space-between;
      margin-bottom: 20px;
      &-left {
        @include flex-center;
      }
    }
    &-row {
      padding: 20px 0;
      border-bottom: 1px solid #dcdee2;
      &:last-child {
        border: none;
      }
      span {
        color: #515a6e;
      }
      p {
        margin-top: 4px;
        color: #17233d;
      }
    }
  }
  .add-dialog {
    &-list {
      margin-top: 10px;
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
    &-right {
      @include flex-center;
      padding-right: 10px;
      &-text {
        margin-right: 20px;
      }
      &-btn {
        @include flex-center;
        width: 56px;
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
    height: 48px;
  }
  &-body {
    padding: 0 20px;
    padding-bottom: 20px;
    height: calc(100vh - 160px);
  }

}
</style>

