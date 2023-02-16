import React,{ useState } from "react";

class ClassIncDec extends React.Component{

    //const[number,setNumber]=useState(0)

    constructor(){
        super()
        // state is an object
        this.state={
            number:0
        }
    }

    increment=()=>{
      // setNumber(number+1)  // state changes
       this.setState({number:this.state.number+1})
    }

     decrement=()=>{
      //  setNumber(number-1)  // state changes
      this.setState({number:this.state.number-1})
     }

     render(){
        return(
            <div>
                <p>Number is : {this.state.number}</p>
                <button type="button" onClick={this.increment}>Add</button>
                <button type="button" onClick={this.decrement}>Sub</button>
            </div>
        )
     }

  
}

export default ClassIncDec