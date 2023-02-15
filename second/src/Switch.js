import useState from "react";

export default function Switch() {
    const[SwitchStatus,setSwitchStetus]=useState(" ");

    //event listener function
    function modifyState() {
      setSwitchStetus=('light is on')
    }

    return(
        <>
        <p>The value of the state variable SwitchStatus is {SwitchStatus}</p>
        <button onClick={modifyState}>Swtich On The Light</button>
        </>
    )
  }