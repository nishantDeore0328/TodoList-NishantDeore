import React, { useState } from "react"

const App = () => {
  const [inputVal, setInputVal] = useState('');
  const[inputArr, setInputArr] = useState([]);

  const addItems =() =>{
    if(!inputVal){
      alert("Please give some data");
    }
    else{
      setInputArr([...inputArr,inputVal]);
      setInputVal("")
    }
  }

  const DeleteItem = (id) =>{
    const newArr = inputArr.filter((val,ind)=>{
        return id !== ind
    });
    setInputArr(newArr)
   

  }
  return(
    <div  style={{textAlign: "center"}}>
      <div>
        <h2>Todo App </h2> <br />
        <input
          type="text"
          value={inputVal}
          onChange={(e) =>{setInputVal(e.target.value)}}
        />
        <button onClick={addItems}>submit</button>
       </div> 
       <div>
        <ul>
          {
               inputArr.map((val,ind)=> {
                return <li key={ind}>{val} <button onClick={()=>DeleteItem(ind)}> Delete</button> </li> 
              })
          }
         
        </ul>
       </div>
    </div>
  )
}

export default App