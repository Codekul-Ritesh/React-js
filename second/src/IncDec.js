import { useState } from "react";

function IncDec(){

    //let number=0

    const[number,setNumber]=useState(0)

    const increment=()=>{
       setNumber(number+1)  // state changes
        console.log(number);
    }

    const decrement=()=>{
        setNumber(number-1)  // state changes
         console.log(number);
     }

    return(
        <div>
            <p>Number is : {number}</p>
            <button type="button" onClick={increment}>Add</button>
            <button type="button" onClick={decrement}>Sub</button>
        </div>
    )
}

export default IncDec