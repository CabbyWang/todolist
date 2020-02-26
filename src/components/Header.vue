<template>
  <div>
    <input type="text" placeholder="todo" v-model="title" @keyup.enter="add">
  </div>
</template>

<script>
export default {
  props: {
    addTodo: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      title: ''
    }
  },

  methods: {
    add () {
      // 检查
      if (!this.title) {
        return
      }

      // 根据输入数据封装 todo
      const todo = {
        id: Date.now(),
        title: this.title,
        complete: false
      }

      // 调用 addTodo 来添加 todo
      this.addTodo(todo)
      // 清除输出
      this.title = ''
    }
  }
}
</script>

<style scoped>

</style>
