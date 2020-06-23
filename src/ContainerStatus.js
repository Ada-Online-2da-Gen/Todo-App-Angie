import React from 'react'

const ContainerStatus = ({ handlePendingClicks, handleCompletedCliks, handleTodosCliks }) => {
  return (
    <>
      <p onClick={handleTodosCliks}>Todos</p>
      <p onClick={handleCompletedCliks}>Completed</p>
      <p onClick={handlePendingClicks}>Pending</p>
    </>
  )
}

export default ContainerStatus
