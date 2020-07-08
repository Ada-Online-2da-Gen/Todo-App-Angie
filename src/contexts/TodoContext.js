import React, { createContext, useState } from 'react'

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [todoStatusFilter, setTodoStatusFilter] = useState('all')

  const addTodo = () => {
    const newTodo = { title: todo, status: 'pending' }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (index) => {
    const copyTodos = todos.filter((todo) => todos.indexOf(todo) !== index)
    setTodos([...copyTodos])
  }

  const changeTodoStatus = (index) => {
    const newTodo = todos.find((todo) => todos.indexOf(todo) === index)
    const newStatus = newTodo.status === 'pending' ? 'completed' : 'pending'
    const updateNewTodo = { ...newTodo, status: newStatus }
    const newTodos = todos.map((todo) => (todos.indexOf(todo) === index ? updateNewTodo : todo))
    setTodos([...newTodos])
  }

  const filterStatusTodo = (todo) => {
    return todoStatusFilter === 'all' ? true : todo.status === todoStatusFilter
  }

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        todo,
        todos,
        setTodo,
        setTodos,
        changeTodoStatus,
        deleteTodo,
        setTodoStatusFilter,
        todoStatusFilter,
        filterStatusTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
export { TodoProvider }
