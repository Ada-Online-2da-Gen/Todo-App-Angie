import React, { useState } from 'react'

import Button from 'components/Button/Button'
import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import List from 'components/List/List'
import Todo from 'components/Todo/Todo'

const App = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.target.value !== '') {
      addTodo()
      setTodo('')
    }
  }

  const addTodo = () => {
    const newTodo = { title: todo, status: 'pending' }
    setTodos([...todos, newTodo])
  }

  const handleAddTodoButtonClick = () => {
    if (todo !== '') {
      addTodo()
      setTodo('')
    }
  }

  const handleChange = (event) => setTodo(event.target.value)

  const handleTodoDelete = (index) => {
    const copyTodos = todos.filter((todo) => todos.indexOf(todo) !== index)
    setTodos([...copyTodos])
  }

  const handleTodoStatusChange = (index) => {
    const newTodo = todos.find((todo) => todos.indexOf(todo) === index)
    const newStatus = newTodo.status === 'pending' ? 'completed' : 'pending'
    const updateNewTodo = { ...newTodo, status: newStatus }
    const newTodos = todos.map((todo) => (todos.indexOf(todo) === index ? updateNewTodo : todo))
    setTodos([...newTodos])
  }

  return (
    <>
      <Container>
        <Input
          type="text"
          placeholder="Ingrese nuevo To Do"
          value={todo}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <Button onClick={handleAddTodoButtonClick}>Agregar</Button>
        <List>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              title={todo.title}
              onDelete={handleTodoDelete}
              status={todo.status}
              onStatusChange={handleTodoStatusChange}
            ></Todo>
          ))}
        </List>
      </Container>
    </>
  )
}

export default App
