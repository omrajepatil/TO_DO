import React from 'react'
import Single from './Single'


function Task({items}) {
  return (
    <>
    <center>


    {items.map((work) => (
    <Single work={work.name} dueDate={work.dueDate} />
))}
  
  </center>
    </>
  )
}

export default Task