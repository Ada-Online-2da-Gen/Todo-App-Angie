import React, { useState } from 'react'
import Button from 'components/Button/Button'
import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import List from 'components/List/List'
import ListItem from 'components/ListItem/ListItem'

const App = () => {
  const [items, setItems] = useState([])
  const [todo, setTodo] = useState('')

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.target.value !== '') {
      setItems([...items, todo])
      addTodo()
    }
  }

  const addTodo = () => setTodo('')

  const handleAddTodoButtonClick = () => {
    setItems([...items, todo])
    addTodo()
  }

  const handleChange = (event) => setTodo(event.target.value)

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
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      </Container>
    </>
  )
}

export default App
