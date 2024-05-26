import React, { useContext } from 'react'
import { CreateContext } from './B.tsx'

const C = () => {
  const useCon = useContext(CreateContext);
  console.log(useCon)
  return (
    <div>
      <h1>{useCon}</h1>
    </div>
  )
}

export default C
