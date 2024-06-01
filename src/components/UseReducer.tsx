import React, { useReducer, useState } from 'react'
function reducerFunction(state: string[], action: any) {
    if (action.type === "add_item" ) {
        return [
            ...state,
            action.item
        ];
    }else if (action.type === "delete_item") {
            return [
                ...state,
                
            ]
        }
}
const UseReducerComp = () => {

    const initialState: string[] = [];
    const [task, setTask] = useState("");
    const [state, dispatch] = useReducer(reducerFunction, initialState);
    // console.log("state",state)
    return (
        <>
            {/* <B /> */}
            <input type="text" placeholder='add item in todolist' onChange={(e) => setTask(e.target.value)} value={task} />
            <button onClick={() => {setTask("");dispatch({ type: "add_item", item: task })}}>Add Item</button>
            <ul>
                {state.length>0 && state.map((item: string,index:number) => {
                    return (<><li key={index}>{item}</li><button onClick={()=>dispatch({ type: "delete_item", item: task })}>Delete Item</button></>
                )
                })}
            </ul>

        </>
    );
}

export default UseReducerComp
// else if (action.type === "delete_item") {
//     return {
//         ...state,
//     }
// } else {
//     return new Error("unsupported action")
// }