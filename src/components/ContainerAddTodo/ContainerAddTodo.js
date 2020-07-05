import React, { useContext } from 'react'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import TodoContext from '../../contexts/TodoContext'

const ContainerAddTodo = () => {
  const { todo, addTodoKeyDown, setTodoChange, addTodoButtonClick } = useContext(TodoContext)

  return (
    <>
      <Input
        type="text"
        placeholder="Ingrese nuevo To Do"
        value={todo}
        onKeyDown={addTodoKeyDown}
        onChange={setTodoChange}
      />
      <Button onClick={addTodoButtonClick}>Agregar</Button>
    </>
  )
}

export default ContainerAddTodo
