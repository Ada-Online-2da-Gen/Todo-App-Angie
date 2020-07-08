import React, { useContext } from 'react'
import TodoContext from 'contexts/TodoContext'
import Option from 'components/Option/Option'
import Select from 'components/Select/Select'

const Filters = () => {
  const { setTodoStatusFilter } = useContext(TodoContext)

  const handleStatusFilterChange = (event) => setTodoStatusFilter(event.target.value)

  return (
    <Select id="select" onChange={handleStatusFilterChange}>
      <Option value="all">TODOS</Option>
      <Option value="pending">PENDING</Option>
      <Option value="completed">COMPLETED</Option>
    </Select>
  )
}

export default Filters
