import React from 'react'
import C from './C.tsx'

const B = ({greetMessage}:any) => {
  return (
    <div>
      <C  greetMessage = {greetMessage}/>
    </div>
  )
}

export default B
