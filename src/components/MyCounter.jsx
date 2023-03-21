import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { increase, decrease}  from '../store/countSlice';


export default function MyCounter() {
  const dispatach = useDispatch();

// //   const count = useSelector((state) => {
// //     if (state.count < 1) return "no number";
// //     return state.count;
// //   });

// //   const toggleState = useSelector(state=> state.showCount);

// /*---------------Global State better than multi selector--------------*/
// // const globalState = useSelector(state=>state)

// const {showCount,count} = useSelector(state=>state)


// /*---------------Handle less than zero--------------*/
// const hanldeCountValue = (val) =>  val < 1? "no number" : val;



// //   const increase = () => {
// //     const action = { type: "increase", payload:2 };
// //     dispatach(action)
// //   };

// //   const decrease = () => {
// //     const action = { type: "decrease" , payload:2};
// //     dispatach(action)

// // };

// /*---------------more Action Handler--------------*/

// const countHandler = (type, payload) => dispatach({type, payload});

// /*-------------Could Also be included in handler-----*/

// const toggleCounter = () => {
//     const action = {type: "toggleCounter"};
//     dispatach(action)
// }

// console.log(toggleState)

const {count, showCount} = useSelector(state=>state.counter);
const dispatch = useDispatch()
console.log(showCount)
  return (
    <div>
      <h2>Hello Redux </h2>
      {/* {showCount && <>
      <p className='fw-bold '>Count : {hanldeCountValue(count)}</p>
      <div className="btns">
      <button className="btn btn-success mx-3 px-3" onClick={()=> countHandler("increase", 2)}>Increase +</button>
      <button className="btn btn-danger mx-3 px-3" onClick={() => countHandler("decrease", 1)}>Decrease -</button>
      </div>
      </>}
      <button className="btn btn-warning my-3 mx-auto px-3 d-block" onClick={toggleCounter}>Show /Hide Count </button> */}
      <>
      <p className='fw-bold '>Count : {count}</p>
      <div className="btns">
      <button className="btn btn-success mx-3 px-3" onClick={()=> dispatch(increase(4))}>Increase +</button>
      <button className="btn btn-danger mx-3 px-3" onClick={() => dispatch(decrease(2))}>Decrease -</button>
      </div>
      </>
      
    </div>
  );
}
