import React, { useContext } from 'react'
import TodoContext from '../../contexts/TodoContext'
import Option from 'components/Option/Option'
import Select from 'components/Select/Select'

const Filters = () => {
  const { setStatusTodo } = useContext(TodoContext)
  const handleStatus = (event) => setStatusTodo(event.target.value)

  return (
    <Select id="select" onChange={handleStatus}>
      <Option value="all">TODOS</Option>
      <Option value="pending">PENDING</Option>
      <Option value="completed">COMPLETED</Option>
    </Select>
  )
}

export default Filters
