<template>
  <div id="app">
    <h1>Todo List</h1>
    <Header :addTodo="addTodo"/>
    <List :todos="todos" :delTodo="delTodo"/>
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
      todos: [
        {id: Date.now(), title: 'A', complete: false},
        {id: Date.now() + 1, title: 'B', complete: true},
        {id: Date.now() + 2, title: 'C', complete: false},
        {id: Date.now() + 3, title: 'D', complete: false}
      ]
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
    }
  },
}
</script>

<style scope>

</style>
