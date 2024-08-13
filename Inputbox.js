import { useState } from "react";
 export const Box=()=>{
    const [inputvalue,setinputvalue] =useState();
    const [data,setdata] =useState([]);
    const value=(event)=>{
        setinputvalue=event.target.value;
    }
    const adddata=()=>{
        setdata=[...data,inputvalue];
        console.log(data);
    }
    return(
    <div>
        <input type="text" onChange={(e)=>value(e)} value={inputvalue} placeholder="Enter your contant"/>
        <button onClick={adddata}  >Add</button>
        <button>Deleteall</button>
    </div>
    )  
}