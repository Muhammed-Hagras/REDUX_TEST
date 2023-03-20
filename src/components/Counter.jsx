import React from 'react'
import { useDispatch, useSelector } from "react-redux"

export default function Counter() {

  const dispatach = useDispatch();

    const count = useSelector(state => {
        if(state.count < 1) return "no number";
        return state.count;
    })

    const increase = () =>{
      const action = {type: "increase"};
    }


    const decrease = () => {
      const action = {type : "decrease"}
    }

  return (
    <div>
      <h2>Hello Redux </h2>
      <p>Count : {count}</p>
      <button className='btn btn-success'>Increase +</button>
      <button className='btn btn-danger'>Decrease </button>

    </div>
  )
}
