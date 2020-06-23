import React from 'react'

const Checkbox = ({ onCheck, ...props }) => {
  return <input type="checkbox" onChange={onCheck} {...props}></input>
}

export default Checkbox
