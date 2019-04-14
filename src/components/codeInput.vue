<template>
  <div class="codebox-container">
    <div :key="item"
         v-for="(item,i) in length"
         class="codebox-field-wrap">
      <input type="input"
             maxLength="1"
             autoComplete="false"
             autoCorrect="off"
             autoCapitalize="off"
             spellCheck="false"
             :value="code[i]"
             @focus="textSelect(dom[i])"
             @click="textSelect(dom[i])"
             @input="onChangeInput($event,i)"
             @keydown="onKeyDown($event, i)"
             ref="input" />
    </div>
  </div>
</template>

<script>
import {isFunction} from '../utils'
export default {
  props: {
    length: {
      type: Number,
      default: 6
    }
  },
  data () {
    return {
      code: new Array(this.length).fill(""),
      dom: new Array(this.length)
    }
  },
  watch: {
    code(n,o) {
      let success = true
      n.forEach((e,i) => {
        if(!e) {
          console.log(e)
          success = false
        }
      })
      if(success) {
        console.log('success')
        this.$emit('success', n)
      }
    }
  },
  methods: {
    textSelect (element) {
      const start = 0;
      const end = element.value.length + 1;
      element.setSelectionRange(start, end);
      element.focus();
    },
    selectstart () {
      return false
    },
    checkForNum () {

    },
    onChangeInput (e, i) {


      const value = e.target.value;

      if (isFunction(this.validator)) {
        if (value !== "" && !this.validator(value, i)) {
          this.textSelect(e.target);
          return;
        }
      }


      if (this.code[i] !== value && value) {
        this.focusOn(i + 1);
      }


      const newCode = this.code.map(v => v);
      console.log('change', i)
      newCode[i] = value;
      this.code = newCode
      this.textSelect(e.target);

      if (value !== "") {
        this.focusOn(i + 1);
      }

      if (isFunction(this.onChange)) {
        if (newCode.every(v => v !== "")) {
          e.blur();
        }
        this.onChange(newCode);
      }
    },
    getPrevBox (i) {
      return this.dom[i - 1];
    },
    getNextBox (i) {
      return this.dom[i + 1];
    },
    focusOn (i) {
      const element = this.dom[i];
      if (element) {
        element.focus();
      }
    },
    onKeyDown (e, i) {
      const inputElement = e.target;
      switch (e.keyCode) {
        case 8: // 删除完之后，退回到上一个输入框
          console.log(e.target.value)
          if (e.target.value === "") {
            // 如果空的话，那么就退回到上一个输入框
            this.focusOn(i - 1);
          }
          break;
        case 37: // 左
        case 38: // 上
          if (this.getPrevBox(i)) {
            this.focusOn(i - 1);
          } else {
            this.focusOn(i);
          }
          break;
        case 39: // 右
        case 40: // 下
          if (this.getNextBox(i)) {
            this.focusOn(i + 1);
          } else {
            this.focusOn(i);
          }
          break;
        default:
          // 不管你输入什么
          // 都会聚焦文本
          console.log(111)
          this.textSelect(inputElement);
          setTimeout(() => {
            this.focusOn(i + 1)
          }, 300);
      }
    }

  },
  mounted () {
    this.dom = this.$refs.input
    this.focusOn(0)
  }
}
</script>

<style scoped>
.codebox-container {
  display: block;
  text-align: center;
}

.codebox-container .codebox-field-wrap {
  display: inline-block;
  margin: 0.4rem;
  width: 2.8125rem;
  height: 2.8125rem;
}

/* iphone SE */
@media (max-width: 320px) {
  .codebox-container .codebox-field-wrap {
    margin: 0.4rem;
    width: 2rem;
    height: 2rem;
  }
}

.codebox-container .codebox-field-wrap input {
  width: inherit;
  height: inherit;
  line-height: inherit;
  font-size: 1.6rem;
  text-align: center;
  vertical-align: baseline;
  border: none;
  outline: none;
  color: #494949;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
}
</style>
