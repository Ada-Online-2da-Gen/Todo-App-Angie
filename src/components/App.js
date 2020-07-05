import React from 'react'

import Container from 'components/Container/Container'
import TodoList from 'components/TodoList/TodoList'
import ContainerAddTodo from 'components/ContainerAddTodo/ContainerAddTodo'
import Filters from 'components/Filters/Filters'
import { TodoProvider } from 'contexts/TodoContext'

const App = () => {
  return (
    <>
      <TodoProvider>
        <Container>
          <ContainerAddTodo />
          <Filters />
          <TodoList />
        </Container>
      </TodoProvider>
    </>
  )
}

export default App
