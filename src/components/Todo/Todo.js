import React, { useState } from 'react'
import ListItem from 'components/ListItem/ListItem'
import Checkbox from 'components/Checkbox/Checkbox'
import { FaTrashAlt } from 'react-icons/fa'
import style from './todo.module.scss'

const Todo = ({ todo, index, handleDeleteIconClick, onStatusChange, status }) => {
  const [visible, setVisible] = useState(false)
  const handleIconDelete = () => setVisible(!visible)

  const handleCheckboxClick = () => onStatusChange(index)

  return (
    <ListItem
      className={`${style.listItem} ${style[status]}`}
      onMouseEnter={handleIconDelete}
      onMouseLeave={handleIconDelete}
      key={index}
    >
      <Checkbox
        // checked={(status = 'completed' ? true : false)}
        onChange={handleCheckboxClick}
      ></Checkbox>
      {todo}
      {visible && (
        <FaTrashAlt style={{ paddingLeft: '10px' }} onClick={() => handleDeleteIconClick(index)} />
      )}
    </ListItem>
  )
}

export default Todo
