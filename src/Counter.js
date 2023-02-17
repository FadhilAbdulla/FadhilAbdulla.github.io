import React,{useState,useEffect} from 'react'

function Counter() {

  const[counter,setCounter] = useState(0)

  useEffect(()=>{
    console.log("Mounted......")
    console.log("updated....."+counter)
  },[counter])


  return (
    <div>
    <h1>Counter : {counter} </h1>
    <button onClick={() => setCounter(counter+1)}>Incriment</button>
    </div>
  )
}

export default Counter