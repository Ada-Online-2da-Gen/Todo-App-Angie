import React, { useState } from 'react'

import Button from 'components/Button/Button'
import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import List from 'components/List/List'
import ListItem from 'components/ListItem/ListItem'

const App = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.target.value !== '') {
      addTodo()
      setTodo('')
    }
  }

  const addTodo = () => setTodos([...todos, todo])

  const handleAddTodoButtonClick = () => {
    if (todo !== '') {
      addTodo()
      setTodo('')
    }
  }

  const handleChange = (event) => setTodo(event.target.value)

  const handleDeleteIconClick = (index) => {
    const copyTodos = todos.filter((todo) => todos.indexOf(todo) !== index)
    setTodos([...copyTodos])
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
            <ListItem
              key={index}
              index={index}
              todo={todo}
              handleDeleteIconClick={handleDeleteIconClick}
            ></ListItem>
          ))}
        </List>
      </Container>
    </>
  )
}

export default App
