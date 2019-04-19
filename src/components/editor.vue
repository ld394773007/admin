<template>
    <div :style="{'height': height + 'px'}" class="wangEditor" ref="wangEditor"></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "html"
    },
    value: {
      type: String,
      default: ""
    },
    pasteFilterStyle: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 10000
    },
    height: {
      type: Number,
      default: 200
    },
    uploadImgServer: {
      type: String
    },
    uploadImgHeaders: {
      type: Object
    },
    uploadFileName: {
      type: String,
      default: "file"
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    uploadImgHooks: {
      type: Object,
      default: () => ({
        customInsert: (insertImg, result, editor) => {
          console.log(result);
          if (result.code == 200) {
            insertImg(result.resultData.url);
          } else {
            this.$message.error(result.msg);
          }
        },
        fail: (xhr, editor, result) => {
          console.log(xhr, result);
        },
        error: (xhr, editor) => {
          console.log(xhr);
          console.log(editor);
        }
      })
    },
    debug: {
      type: Boolean,
      default: false
    },
    menus: {
      type: Array,
      default: () => [
        'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        'forecolor',
        '|',
        'fontfamily',
        'fontsize',
        'head',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'img',
        '|'
      ]
    },
    colors: {
      type: Array,
      default: () => [
        "#000000",
        "#eeece0",
        "#1c487f",
        "#4d80bf",
        "#c24f4a",
        "#8baa4a",
        "#7b5ba1",
        "#46acc8",
        "#f9963b",
        "#ffffff"
      ]
    },
    fontNames: {
      type: Array,
      default: () => ["宋体", "微软雅黑", "Arial", "Tahoma", "Verdana"]
    },
    onfocus: {
      type: Function
    },
    onblur: {
      type: Function
    }
  },
  data() {
    return {
      editor: null
    };
  },
  methods: {
    // 初始化富文本
    created() {
      this.editor.create();
    },
    // 设置是否禁用富文本
    contenteditable(bol) {
      if(bol) {
        this.editor.disable();
      } else {
        this.editor.enable();
      }
    },
    // 设置富文本内容
    setHtml(str) {
      this.editor.$txt.html(str);
    },
    // 获取富文本中的内容
    getContent() {
      return {
        html: this.editor.$txt.html(),
        text: this.editor.$txt.text()
      };
    },
    // 往富文本中追加内容
    appendHtml(str) {
      this.editor.$txt.append(str);
    },
    // 清除富文本内容
    clearHtml() {
      this.editor.$txt.html('<p><br></p>');
    },
    createEditor() {
      let editor = this.editor;
      // 配置富文本菜单栏
      editor.config.menus = this.menus;
      // 配置富文本编辑区zIndex
      editor.config.zIndex = 20000;
      // 配置菜单栏颜色选择列表
      editor.config.colors = this.colors;
      // 配置菜单栏字体列表
      editor.config.familys = this.fontNames;
      // 取消粘贴过滤
    editor.config.pasteFilter = this.pasteFilterStyle;
      // 配置自定义上传链接
      if (this.uploadImgServer) {
        editor.config.uploadImgUrl = this.uploadImgServer;
      }
      // 上传图片时，可自定义filename，即在使用formdata.append(name, file)添加图片文件时，自定义第一个参数。
      editor.config.uploadImgFileName = this.uploadFileName;
      // 跨域上传中如果需要传递 cookie 需设置 withCredentials
      editor.config.withCredentials = this.withCredentials;
      // 上传图片时刻自定义设置 header
      if (this.uploadImgHeaders) {
        editor.config.uploadHeaders = this.uploadImgHeaders;
      }

    //   // 可使用监听函数在上传图片的不同阶段做相应处理
    //   editor.config.uploadImgHooks = this.uploadImgHooks;
    //   // 配置是否开启debug模式
    //   if (this.debug) {
    //     editor.config.debug = this.debug;
    //   }
    //   // 配置粘贴内容时是否过滤内容
    //   editor.config.pasteFilterStyle = this.pasteFilterStyle;
    //   // 点击富文本触发onfocus事件时的方法
    //   if (this.onfocus) {
    //     editor.config.onfocus = this.onfocus;
    //   }
    //   // 富文本失去焦点是触发方法
    //   if (this.onblur) {
    //     editor.config.onfocus = this.onblur;
    //   }

      // 富文本点击或者输入时 触发 onchange时 向上分发自定义事件input ，  在组件中可以使用v-model进行绑定
      editor.onchange = () => {
        switch (this.type) {
          case "html":
            this.$emit("input", this.editor.$txt.html());
            console.log(this.getContent());
            break;
          case "text":
            this.$emit("input", this.editor.$txt.text());
            console.log(this.getContent());
            break;
          case "formatText":
            this.$emit("input", this.editor.$txt.formatText());
            console.log(this.getContent());
            break;
          default:
            this.$emit("input", this.editor.$txt.html());
            break;
        }
      };
      this.created();
      if (this.value) {
        this.setHtml(this.value);
      }

    }
  },
  created() {},
  mounted() {

    this.editor = new wangEditor(this.$refs.wangEditor);
    this.createEditor();
  }
}
</script>

<style>
</style>
