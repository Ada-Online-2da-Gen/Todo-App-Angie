import React, { useState } from 'react'
import ListItem from 'components/ListItem/ListItem'
import { FaTrashAlt } from 'react-icons/fa'
import style from './todo.module.scss'

const Todo = ({ todo, index, handleDeleteIconClick }) => {
  const [visible, setVisible] = useState(false)
  const handleIconDelete = () => setVisible(!visible)

  return (
    <ListItem
      className={style.listItem}
      onMouseEnter={handleIconDelete}
      onMouseLeave={handleIconDelete}
      key={index}
    >
      {todo}
      {visible && (
        <FaTrashAlt style={{ paddingLeft: '10px' }} onClick={() => handleDeleteIconClick(index)} />
      )}
    </ListItem>
  )
}

export default Todo
