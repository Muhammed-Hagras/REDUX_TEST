import React from 'react'
import { useDispatch, useSelector } from "react-redux"


export default function MyCounter() {
  const dispatach = useDispatch();

  const count = useSelector((state) => {
    if (state.count < 1) return "no number";
    return state.count;
  });

  const increase = () => {
    const action = { type: "increase", payload:2 };
    dispatach(action)
  };

  const decrease = () => {
    const action = { type: "decrease" , payload:2};
    dispatach(action)

};

  return (
    <div>
      <h2>Hello Redux </h2>
      <p className='fw-bold '>Count : {count}</p>
      <button className="btn btn-success mx-3 px-3" onClick={increase}>Increase +</button>
      <button className="btn btn-danger mx-3 px-3" onClick={decrease}>Decrease -</button>
    </div>
  );
}
