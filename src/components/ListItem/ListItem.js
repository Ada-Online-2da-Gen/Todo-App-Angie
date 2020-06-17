import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const ListItem = ({ todo, index, handleDeleteIconClick }) => {
  const [visible, setVisible] = useState(false)
  const handleIconDelete = () => setVisible(!visible)
  return (
    <li
      style={{ margin: '10px auto' }}
      onMouseOver={handleIconDelete}
      onMouseOut={handleIconDelete}
      key={index}
    >
      {todo}
      {visible && (
        <FaTrashAlt style={{ paddingLeft: '10px' }} onClick={() => handleDeleteIconClick(index)} />
      )}
    </li>
  )
}

export default ListItem
