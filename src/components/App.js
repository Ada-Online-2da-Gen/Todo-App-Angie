import React, { useState } from 'react'

import { FaTrashAlt } from 'react-icons/fa'

import Button from 'components/Button/Button'
import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import List from 'components/List/List'
import ListItem from 'components/ListItem/ListItem'

const App = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [visible, setVisible] = useState(false)

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

  const handleIconDelete = () => setVisible(!visible)

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
              style={{ margin: '10px auto' }}
              onMouseOver={handleIconDelete}
              onMouseOut={handleIconDelete}
              key={index}
            >
              {todo}
              {visible && (
                <FaTrashAlt
                  style={{ paddingLeft: '10px' }}
                  key={todo.key}
                  onClick={() => handleDeleteIconClick(index)}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  )
}

export default App
