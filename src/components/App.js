import React, { useState } from 'react'
import Button from 'components/Button/Button'
import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import List from 'components/List/List'
import ListItem from 'components/ListItem/ListItem'

const App = () => {
  const [items, setItems] = useState([])
  const [todo, setTodo] = useState('')

  const addItemList = (event) => {
    setTodo(event.target.value)
    if (event.keyCode === 13 && event.target.value !== '') {
      setItems([...items, todo])
      setTodo('')
    }
  }

  const addItemListButton = () => {
    setItems([...items, todo])
    setTodo('')
  }

  const handleChange = (event) => setTodo(event.target.value)

  return (
    <>
      <Container>
        <Input
          type="text"
          placeholder="Ingrese nuevo To Do"
          value={todo}
          onKeyDown={addItemList}
          onChange={handleChange}
        />
        <Button onClick={addItemListButton}>Agregar</Button>
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
