<template>
  <li :style="{background: bgColor}"
      @mouseenter="handleEnter(true)"
      @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="complete">
      <span>{{ todo.title }}</span>
    </label>
    <button v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  // 声明接收属性
  props: {
    todo: Object,
    index: Number,
    toggleTodo: Function
  },
  data () {
    return {
      isShow: false,  // 标志按钮不显示
      bgColor: 'white'
    }
  },
  computed: {
    // 是否勾选
    complete: {
      get () {
        return this.todo.complete
      },
      set (val) {
        console.log("set ", val)
        this.toggleTodo(this.todo)
      }
    }
  },
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = "#cccccc"
        this.isShow = true
      }else{
        this.bgColor = "#ffffff"
        this.isShow = false
      }
    },
    deleteItem () {
      if (confirm("confirm delete?")){
        // this.delTodo(this.index)
        // emit event
        this.$bus.$emit('delTodo', this.index)
      }
    }
  },
}
</script>

<style scoped>

</style>
