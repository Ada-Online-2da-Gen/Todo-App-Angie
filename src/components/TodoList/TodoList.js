import React, { useContext } from 'react'
import TodoContext from '../../contexts/TodoContext'
import List from 'components/List/List'
import Todo from 'components/Todo/Todo'

const TodoList = () => {
  const { todos, deleteIconClick, todoStatusChange, statusTodo } = useContext(TodoContext)

  const filterStatusTodo = (todo) => {
    return statusTodo === 'all' ? true : todo.status === statusTodo
  }

  return (
    <>
      <List>
        {todos.filter(filterStatusTodo).map((todo, index) => (
          <Todo
            key={index}
            index={index}
            title={todo.title}
            onDelete={deleteIconClick}
            status={todo.status}
            onStatusChange={todoStatusChange}
          ></Todo>
        ))}
      </List>
    </>
  )
}

export default TodoList
