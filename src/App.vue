<template>
  <div id="app">
    <h1>Todo List</h1>
    <Header @addTodo="addTodo"/>
    <List :todos="todos" :delTodo="delTodo" :toggleTodo="toggleTodo"/>
    <Footer :todos="todos" :checkAllTodo="checkAllTodo" :clearTodos="clearTodos"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    List
  },
  data () {
    return {
      todos: []
    }
  },
  mounted() {
    // 模拟异步读取数据
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem("todos") || '[]')
      this.todos = todos
    }, 1000)
  },

  watch: {
    todos: {
      deep: true,
      handler (val) {
        localStorage.setItem('todos', JSON.stringify(val))
      }
    }
  },

  methods: {
    // 添加 todo
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    // 删除 todo
    delTodo (index) {
      this.todos.splice(index, 1)
    },
    // 全选/全部选 todo
    checkAllTodo (isCheck) {
      this.todos.forEach(todo => todo.complete = isCheck)
    },
    // 清除已完成 todo
    clearTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    // 切换 todo 是否完成
    toggleTodo (todo) {
      todo.complete = !todo.complete
    }
  },
}
</script>

<style scope>

</style>
