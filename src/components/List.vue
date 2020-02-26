<template>
  <ul>
    <Item v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :index="index" :delTodo="delTodo"      :toggleTodo="toggleTodo"/>
  </ul>
</template>

<script>
import Item from './Item.vue'
export default {
  // 声明接收属性
  // 所有接收的标签属性都会成为组件对象的属性
  props: {
    todos: Array,
    delTodo: Function,
    toggleTodo: Function
  },
  components: {
    Item
  }
}
</script>

<style scoped>

</style>
