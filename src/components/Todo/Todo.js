import React, { useState } from 'react'
import ListItem from 'components/ListItem/ListItem'
import Checkbox from 'components/Checkbox/Checkbox'
import { FaTrashAlt } from 'react-icons/fa'
import style from './todo.module.scss'

const Todo = ({ todo, index, handleDeleteIconClick }) => {
  const [visible, setVisible] = useState(false)
  const handleIconDelete = () => setVisible(!visible)

  const [statusCheckbox, setStatusCheckbox] = useState('pending')

  const handleCheckboxClick = (event) => {
    const status = event.target.checked ? 'completed' : 'pending'
    setStatusCheckbox(status)
  }

  return (
    <ListItem
      className={`${style[statusCheckbox]}`}
      onMouseEnter={handleIconDelete}
      onMouseLeave={handleIconDelete}
      key={index}
    >
      <Checkbox handleCheckboxClick={handleCheckboxClick}></Checkbox>
      {todo}
      {visible && (
        <FaTrashAlt style={{ paddingLeft: '10px' }} onClick={() => handleDeleteIconClick(index)} />
      )}
    </ListItem>
  )
}

export default Todo
