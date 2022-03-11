import React from "react";


 const Counter = () => {

 

    const [counter, setCounter] = React.useState(1)
    const handelIncrement = (value) => {
      setCounter(counter + value)
    }
    const handelDouble = (value) => {
      setCounter(counter*2)
    }
    // if(counter%2===0){
    //   return <h1>Counter is odd</h1>
    // }
    // else{
    //   return <h2> counter is odd</h2>
    // }

  return (
    <>
        <h1>counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handelIncrement(1)}>Add</button>
      <button onClick={() => handelIncrement(-1)}>Reduce</button>
      <button onClick={() => handelDouble(2)}>Double</button>
    </>
      
    
  );
  }
  export {Counter}