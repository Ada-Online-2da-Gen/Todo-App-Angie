import React, { useContext } from 'react'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import TodoContext from 'contexts/TodoContext'

const AddTodoPanel = () => {
  const { todo, addTodo, setTodo } = useContext(TodoContext)

  const handleAddTodoKeyDown = (event) => {
    if (event.keyCode === 13 && event.target.value !== '') {
      addTodo()
      setTodo('')
    }
  }

  const handleAddTodoButtonClick = () => {
    if (todo !== '') {
      addTodo()
      setTodo('')
    }
  }

  const handleTodoChange = (event) => setTodo(event.target.value)

  return (
    <>
      <Input
        type="text"
        placeholder="Ingrese nuevo To Do"
        value={todo}
        onKeyDown={handleAddTodoKeyDown}
        onChange={handleTodoChange}
      />
      <Button onClick={handleAddTodoButtonClick}>Agregar</Button>
    </>
  )
}

export default AddTodoPanel
