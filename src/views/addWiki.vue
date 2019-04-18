<template>
  <div class="add-wiki">
    <div class="add-wiki-form">
      <input type="text"
             placeholder="请输入词条标题"
             v-model="form.name"
             class="add-wiki-name">
      <div class="add-wiki-editor-wrap">
        <editor :height="450"
                ref="editor"
                v-model="form.content"></editor>
        <div class="editor-icon">
          <Dropdown trigger="click">
            <i class="iconfont icon-zengjia"></i>
            <DropdownMenu slot="list">
              <DropdownItem><span @click="dialogVisible = true">添加链接</span></DropdownItem>
              <DropdownItem>
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                  <span>上传文档</span>
                </Upload>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

      </div>
      <Select v-model="form.tags"
              multiple
              placeholder="添加一个标签"
              class="add-wiki-select"
              style="width:100%">
        <Option v-for="item in tagList"
                :value="item.id"
                :key="item.id">{{ item.name }}</Option>
      </Select>
      <div class="add-wiki-btn-wrap">
        <Button class="add-wiki-btn"
                type="primary">发布</Button>
        <Button class="add-wiki-btn"
                @click="$router.go(-1)">放弃</Button>
      </div>
    </div>
    <el-dialog title="添加链接"
               width="500px"
               @close="closePop"
               :visible.sync="dialogVisible">
      <div class="add-link">
        <Form :model="linkForm"
              :label-width="80">
          <FormItem label="文本内容">
            <Input v-model="linkForm.name"
                   placeholder=""></Input>
          </FormItem>
          <FormItem label="链接地址">
            <Input v-model="linkForm.url"
                   placeholder=""></Input>
          </FormItem>
        </Form>
        <p class="add-link-checkbox"><span>是否在新窗口打开</span>
          <el-checkbox v-model="linkForm.isBlank"></el-checkbox>
        </p>
        <div class="add-link-btn-wrap">
          <Button class="add-link-btn" type="primary" @click="confimPop">确定</Button>
          <Button class="add-link-btn" @click="closePop">取消</Button>
        </div>
      </div>
    </el-dialog>
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
      dialogVisible: false,
      linkForm: {
        name: '',
        url: '',
        isBlank: true
      },
      form: {
        name: '',
        content: '',
        tags: []
      },
      tagList: [
        {
          id: 1,
          name: '标签1'
        },
        {
          id: 2,
          name: '标签2'
        },
        {
          id: 3,
          name: '标签3'
        }
      ],
    }
  },
  methods: {
    confimPop(e) {
      let {name,url,isBlank} = this.linkForm
      let node = `<a href="${url}" target="${isBlank ? '_blank' : '_self'}">${name}</a>`
      this.$refs.editor.editor.command(e, 'insertHtml', node)
      this.dialogVisible = false
    },
    closePop() {
      this.linkForm.name = ''
      this.linkForm.url = ''
      this.isBlank = true
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.add-wiki {
  box-sizing: border-box;
  padding: 20px 30px;
  width: 1200px;
  margin: 10px auto;
  box-shadow: 0 10px 20px -10px #112037;
  height: calc(85vh);
  border-radius: 5px;
  background-color: #fff;
  .add-link {
    padding-right: 40px;
    &-btn {
      margin: 0 15px;
      width: 80px;
    }
    &-btn-wrap {
      @include flex-center;
      margin-top: 20px;
    }
    &-checkbox {
      margin-left: 20px;
      span {
        margin-right: 10px;
      }
    }
  }
  &-btn {
    width: 80px;
    margin: 0 10px;
  }
  &-btn-wrap {
    @include flex-center;
    margin-top: 14px;
  }
  &-select {
    margin-top: 20px;
  }
  &-editor {
    min-width: 670px;
    &-wrap {
      position: relative;
      .editor-icon {
        position: absolute;

        left: 640px;
        top: 4px;
        z-index: 9999;
        cursor: pointer;
        .iconfont {
          font-size: 16px;
          color: #666 !important;
        }
      }
    }
  }
  &-name {
    margin-bottom: 8px;
    font-size: 24px;
    width: 100%;
    height: 38px;
    border: 1px solid transparent;
    &:focus {
      padding-left: 10px;
      border: 1px solid #999;
      border-radius: 4px;
    }
    &::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #333 !important;
    }
  }
}
</style>
