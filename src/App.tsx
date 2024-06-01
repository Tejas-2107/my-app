import React from 'react';
import UseReducerComp from './components/UseReducer.tsx';
import customHook from './components/CustomHook.tsx';
// import B from './components/B.tsx';

function App() {
   const customHookData = customHook();
   console.log(customHookData);
  return (
    <>
     
    </>
  );
}

export default App;
