<template>
  <div>
    <input type="checkbox" name="selectAll" v-model="isCheck">
    "已完成 {{ completeCount }}/全部 {{ todos.length }}"
    <button @click="clearTodos">清除已完成</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    checkAllTodo: Function,
    clearTodos: Function
  },

  computed: {
    // 已完成的数量
    completeCount () {
      // return this.todos.reduce
      return this.todos.reduce((pre, cur) => pre + (cur.complete ? 1 : 0), 0)
    },
    // 是否全选
    isCheck: {
      get () {
        return this.todos.length === this.completeCount
      },
      set (value) {
        this.checkAllTodo(value)
      }
    }
  },
}
</script>

<style scoped>

</style>
