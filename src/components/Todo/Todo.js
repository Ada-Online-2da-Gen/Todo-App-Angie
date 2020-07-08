import React, { useContext, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

import ListItem from 'components/ListItem/ListItem'
import Checkbox from 'components/Checkbox/Checkbox'

import style from './todo.module.scss'
import TodoContext from 'contexts/TodoContext'

const Todo = ({ index, title, status, children }) => {
  const { changeTodoStatus, deleteTodo } = useContext(TodoContext)

  const [visible, setVisible] = useState(false)

  const handleHover = () => setVisible(!visible)

  const handleCheckboxClick = () => changeTodoStatus(index)

  const handleDeleteIconClick = () => deleteTodo(index)

  return (
    <ListItem
      className={`${style.listItem} ${style[status]}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      key={index}
    >
      <Checkbox checked={status === 'completed'} onChange={handleCheckboxClick}></Checkbox>
      {title}
      {children}
      {visible && <FaTrashAlt className={style.iconDelete} onClick={handleDeleteIconClick} />}
    </ListItem>
  )
}

export default Todo
