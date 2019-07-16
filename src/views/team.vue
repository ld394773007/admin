<template>
  <div class="team container">
    <div class="team-left"
         ref="left">
      <Input suffix="ios-search"
             class="search-input"
             placeholder="请输入内容"
             style="width: auto" />
      <CellGroup @on-click="changeActive">
        <Cell name="1"
              title="所有成员">
          <i style="font-size:23px"
             class="iconfont icon-chengyuan1"
             slot="icon"></i>
        </Cell>
        <Cell name="2"
              title="未分配部门的成员">
          <i class="iconfont icon-application-for-membership"
             slot="icon"></i>
        </Cell>
      </CellGroup>
      <div class="team-btn-wrap">
        <el-button type="text"
                   icon="el-icon-circle-plus">创建部门</el-button>
      </div>
      <el-tree :data="data2"
               node-key="id"
               class="common-tree"
               @node-click="changeActive2"
               default-expand-all>
        <span class="custom-tree-node"
              slot-scope="{ node, data }">
          <div>
            <i class="iconfont icon-lingdaitie3"></i>
            <span>{{ node.label }}</span>
          </div>
          <i v-if="data.children"
             class="iconfont icon-circle-down team-tree-icon"></i>
        </span>
      </el-tree>
    </div>
    <div class="team-right">
      <div class="team-header">
        <h4>{{title}}</h4>
        <div class="team-header-right">
          <Dropdown trigger="click">
            <el-button type="text"
                       icon="el-icon-upload">批量更新成员信息</el-button>
            <DropdownMenu slot="list">
              <DropdownItem>下载当前成员列表（.csv）</DropdownItem>
              <DropdownItem>上传当前成员列表</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <el-button type="text"
                     icon="el-icon-circle-plus"
                     @click="modal2 = true">添加成员</el-button>
          <el-button type="text"
                     @click="modal3 = true"
                     v-if="active >= 4"
                     icon="el-icon-circle-plus">添加子部门</el-button>
          <Dropdown trigger="custom"
                    class="hide-dropdown"
                    :visible="visible">
            <el-button type="text"
                       @click="visible = true"
                       v-if="active >= 4"
                       icon="el-icon-more">更多</el-button>
            <DropdownMenu slot="list">
              <Card title="Options"
                    :padding="0"
                    shadow
                    style="width: 200px;">
                <p style="text-align:center;"
                   slot="title">
                  部门菜单
                </p>
                <a href="javascript:"
                   slot="extra"
                   @click="visible = false">
                  <i style="font-size: 18px;font-weight:bold;"
                     class="el-icon-close"></i>
                </a>
                <CellGroup>
                  <Cell title="显示子部门成员">
                    <i-switch v-model="switchValue"
                              slot="extra" />
                  </Cell>
                  <Cell title="编辑部门" />
                  <Cell class="cell-delete"
                        title="删除部门">
                    <span style="color:red;font-size:12px">删除部门</span>
                  </Cell>
                </CellGroup>
              </Card>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <el-table ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                v-if="active < 4"
                @row-click="rowClick"
                class="team-table">

        <el-table-column prop="name"
                         label="姓名">
          <template slot-scope="scope">
            <div style="display:flex;align-items:center;">
              <Avatar>{{scope.row.name}}</Avatar>
              <span style="margin-left:10px;">{{scope.row.name}}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="department"
                         label="部门"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="role"
                         label="企业角色">
        </el-table-column>
        <el-table-column label="操作"
                         width="90">
          <template slot-scope="scope">
            <Dropdown>
              <i class="el-icon-more personnel-icon"
                 @click.stop="() => {}"></i>
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
      <el-table ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                v-else
                @row-click="rowClick"
                class="team-table">
        <el-table-column label="部门成员">
          <template slot-scope="scope">
            <div class="table-name">
              <Avatar>{{scope.row.name}}</Avatar>
              <div>
                <p>{{scope.row.name}}</p>
                <span>khgjkshfbklgjvjkxcgxjl</span>
              </div>
            </div>

          </template>
        </el-table-column>

        <el-table-column prop="department"
                         label="职位"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="phone"
                         label="电话">
        </el-table-column>
        <el-table-column label="操作"
                         width="90">
          <template slot-scope="scope">
            <Dropdown>
              <i class="el-icon-more personnel-icon"
                 @click.stop="() => {}"></i>
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
      <div class="team-pagination">
        <el-pagination background
                       layout="prev, pager, next"
                       :total="1000">
        </el-pagination>
      </div>
    </div>
    <Modal v-model="modal2"
           footer-hide
           width="360"
           title="添加成员到企业">
      <div class="modal-content">
        <div class="modal-header">
          <h3>账号邀请</h3>
          <a href="javascript:"
             @click="modal = true"><i class="iconfont icon-ico"></i>通过链接邀请</a>
        </div>
        <div class="modal-center">
          <Input />
          <Divider class="modal-divider" />
          <CellGroup>
            <Cell title="Only show titles">
              <Avatar slot="icon">陈波</Avatar>
              <Button slot="extra">加入</Button>
            </Cell>
          </CellGroup>
        </div>
      </div>
    </Modal>
    <Modal v-model="modal3"
           footer-hide
           width="360"
           title="创建子部门">
      <div class="modal-content"
           style="min-height: 140px;">
        <div class="modal-center">
          <Input placeholder="子部门名称" />
          <span class="modal-center-span">隶属于：营销部</span>
          <Button class="modal-center-btn"
                  type="primary">创建</Button>
        </div>
      </div>
    </Modal>
    <Modal v-model="modal"
           footer-hide
           width="360"
           :styles="{top: '30%'}"
           title="邀请成员">
      <div class="modal-content1"
           style="text-algin:center">
        <span class="modal-text">分享企业链接邀请成员</span>
        <span class="modal-text">有效日期：2019-03-10 11:33</span>
        <Input search
               enter-button="复制链接"
               value="http://www.baidu.com" />
      </div>
    </Modal>
    <Modal v-model="show"
           width="800px"
           :styles="{top: '5%'}"
           footer-hide
           @on-visible-change="onVisibleChange"
           title="企业成员信息">
      <div class="team-info">
        <div class="team-info-header">
          <div class="team-info-header-left">
            <Avatar class="team-info-avatar"
                    style="background-color: #87d068"
                    size="large">{{selectData.name}}</Avatar>
            <span>{{selectData.name}}</span>
          </div>
          <div class="team-info-header-right">
            <div class="team-info-email">
              <Icon type="ios-mail-outline"
                    size="16" /><span>{{selectData.email}}</span></div>
            <div class="team-info-phone">
              <Icon type="md-phone-portrait" /><span>{{selectData.phone}}</span></div>
          </div>
        </div>
        <div class="team-info-title">
          <h3>详细资料</h3>
          <el-button type="text"
                     icon="el-icon-edit"
                     @click="edit = true">编辑</el-button>
        </div>
        <div class="team-info-content">
          <Row class="team-info-row">
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
          <Row class="team-info-row">
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
          <Row class="team-info-row">
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
      <div class="team-popup">
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
    <Modal v-model="showPower"
           width="300px"
           :closable="false"
           :styles="{top: '20%'}"
           footer-hide>
      <div class="power-popup">
        <CellGroup @on-click="onClickCell">
          <Cell name="1"
                title="项目管理员"
                :selected="selected == 1">
            <Icon type="md-checkmark"
                  slot="extra"
                  v-if="selected == 1" />
          </Cell>
          <Cell name="2"
                title="项目成员"
                :selected="selected == 2">
            <Icon type="md-checkmark"
                  v-if="selected == 2"
                  slot="extra" />
          </Cell>
        </CellGroup>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showPower: false,
      show: false,
      edit: false,
      selectData: {},
      active: '1',
      visible: false,
      modal2: false,
      modal3: false,
      modal: false,
      serchValue: '',
      switchValue: false,
      height: 0,
      selected: 0,
      data2: [{
        id: 4,
        label: '市场部',
        children: [{
          id: 5,
          label: '营销组',
        }, {
          id: 6,
          label: '公关组',
        }]
      }, {
        id: 7,
        label: '技术部',
        children: [{
          id: 8,
          label: '技术组'
        }, {
          id: 9,
          label: '运维组'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
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
      }, {
        id: 4,
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
      }, {
        id: 5,
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
      }, {
        id: 6,
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
      }],
      multipleSelection: []
    };
  },
  computed: {
    title () {
      if (this.active > 3) {
        return this.text
      }
      return this.active == '1' ? '所有成员' : this.active == '2' ? '未分配部门的成员' : '停用的成员'
    }
  },
  methods: {
    onClickCell (name) {
      this.selected = name
      this.showPower = false
    },
    onVisibleChange (t) {
      if (!t) {
        this.selectData = {}
      }
    },
    rowClick (row, column) {
      this.selectData = row
      this.show = true
    },
    changeActive2 (n) {
      this.active = n.id
      this.text = n.label
    },
    changeActive (n) {
      console.log(n)
      this.active = n
    },
    checkTreeNode (data, e) {
      console.log(data, e)
    },
    renderContent (h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button size="mini" type="text" on-click={() => this.append(data)}>Append</el-button>
            <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>Delete</el-button>
          </span>
        </span>);
    }
  },
  mounted () {
    this.height = this.$refs.left.clientHeight * (80 / 100)
    console.log(this.height)
  }
}
</script>

<style lang="scss" scoped>
.modal {
  &-content1 {
    @include flex-col-center;
    padding-bottom: 20px;
    span {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
  &-divider {
    margin-bottom: 10px;
  }
  &-content {
    min-height: 500px;
  }
  &-center-span {
    display: block;
    margin: 10px 0;
    font-size: 14px;
    color: #808695;
  }
  &-center-btn {
    width: 100%;
  }
  &-header {
    @include flex-center;
    justify-content: space-between;
    margin-bottom: 10px;
    a {
      @include flex-center;
      color: #2d8cf0;
      font-size: 12px;
      i {
        margin-right: 6px;
        font-size: 16px;
        color: #2d8cf0;
      }
    }
  }
}
.team {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  .cell-delete {
    border-top: 1px solid #ebeef5;
  }
  .custom-tree-node {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 10px;
    width: 100%;
    .team-tree-icon {
      margin-right: 30px;
      transform: rotate(-90deg);
    }
  }

  .table-name {
    @include flex-center;
    & > div {
      margin-left: 10px;
      span {
        @include text-overflow;
        font-size: 12px;
      }
    }
  }
  &-btn-wrap {
    margin-left: 20px;
  }
  .search-input {
    width: 250px !important;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  &-pagination {
    @include flex-center;
    margin-top: 30px;
    justify-content: flex-end;
  }
  &-left {
    box-sizing: border-box;
    margin-right: 20px;
    padding: 20px 0;
    width: 300px;
    height: calc(100vh - 90px);
    border-radius: 5px;
    background-color: #fff;
  }
  &-right {
    flex: 1;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    .search-input {
      width: 300px;
    }
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
  }
}
</style>

