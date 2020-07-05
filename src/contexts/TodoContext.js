import React, { createContext, useState } from 'react'

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [statusTodo, setStatusTodo] = useState('all')

  const addTodoKeyDown = (event) => {
    if (event.keyCode === 13 && event.target.value !== '') {
      addTodo()
      setTodo('')
    }
  }

  const addTodo = () => {
    const newTodo = { title: todo, status: 'pending' }
    setTodos([...todos, newTodo])
  }

  const addTodoButtonClick = () => {
    if (todo !== '') {
      addTodo()
      setTodo('')
    }
  }

  const setTodoChange = (event) => setTodo(event.target.value)

  const deleteIconClick = (index) => {
    const copyTodos = todos.filter((todo) => todos.indexOf(todo) !== index)
    setTodos([...copyTodos])
  }

  const todoStatusChange = (index) => {
    const newTodo = todos.find((todo) => todos.indexOf(todo) === index)
    const newStatus = newTodo.status === 'pending' ? 'completed' : 'pending'
    const updateNewTodo = { ...newTodo, status: newStatus }
    const newTodos = todos.map((todo) => (todos.indexOf(todo) === index ? updateNewTodo : todo))
    setTodos([...newTodos])
  }

  return (
    <TodoContext.Provider
      value={{
        todo,
        todos,
        setTodo,
        setTodos,
        todoStatusChange,
        deleteIconClick,
        addTodoButtonClick,
        addTodoKeyDown,
        setTodoChange,
        setStatusTodo,
        statusTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
export { TodoProvider }
