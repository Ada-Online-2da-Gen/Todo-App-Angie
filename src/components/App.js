import React from 'react'

import Container from 'components/Container/Container'
import TodoList from 'components/TodoList/TodoList'
import AddTodoPanel from 'components/AddTodoPanel/AddTodoPanel'
import Filters from 'components/Filters/Filters'
import { TodoProvider } from 'contexts/TodoContext'

const App = () => {
  return (
    <>
      <TodoProvider>
        <Container>
          <AddTodoPanel />
          <Filters />
          <TodoList />
        </Container>
      </TodoProvider>
    </>
  )
}

export default App
