import React from 'react'

const Input = ({ onChangeItem }) => {
  return <input placeholder="Ingrese nuevo To Do" onKeyDown={onChangeItem} />
}

export default Input
