import React, { createContext } from 'react';
import C from './C.tsx';
const CreateContext = createContext();

const B = () => {
  const props = "Hello Welcome to Context API";
  return (
    <div>
       {/* context provider */}
      <CreateContext.Provider value={props}>
        <h1>Context</h1>
        <C />
      </CreateContext.Provider>

    </div>
  )
}

export default B
export {CreateContext}
