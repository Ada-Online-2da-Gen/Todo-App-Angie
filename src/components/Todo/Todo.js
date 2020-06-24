import React, { useState } from 'react'
import ListItem from 'components/ListItem/ListItem'
import Checkbox from 'components/Checkbox/Checkbox'
import { FaTrashAlt } from 'react-icons/fa'
import style from './todo.module.scss'

const Todo = ({ index, title, status, onDelete, onStatusChange }) => {
  const [visible, setVisible] = useState(false)
  const handleHover = () => setVisible(!visible)

  const handleCheckboxClick = () => onStatusChange(index)

  const handleDeleteIconClick = () => onDelete(index)

  return (
    <ListItem
      className={`${style.listItem} ${style[status]}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      key={index}
    >
      <Checkbox checked={status === 'completed'} onChange={handleCheckboxClick}></Checkbox>
      {title}
      {visible && <FaTrashAlt className={style.iconDelete} onClick={handleDeleteIconClick} />}
    </ListItem>
  )
}

export default Todo
