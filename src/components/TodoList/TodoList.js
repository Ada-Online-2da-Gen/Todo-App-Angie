import React, { useContext } from 'react'
import TodoContext from 'contexts/TodoContext'
import List from 'components/List/List'
import Todo from 'components/Todo/Todo'

const TodoList = () => {
  const { todos, deleteTodo, changeTodoStatus, filterStatusTodo } = useContext(TodoContext)

  return (
    <>
      <List>
        {todos.filter(filterStatusTodo).map((todo, index) => (
          <Todo
            key={index}
            index={index}
            title={todo.title}
            onDelete={deleteTodo}
            status={todo.status}
            onStatusChange={changeTodoStatus}
          ></Todo>
        ))}
      </List>
    </>
  )
}

export default TodoList
