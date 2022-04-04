import {useState, useEffect} from 'react';



function Hooks() {
    // this.state= {
    //     count: 0
    // }
    //     prevState/initial state, nextState/updateState = initial value 
    const [count, setCount] = useState(0); // initial value => 0 -> 1
    console.log("useSate is being rendered");

    useEffect(()=> {
        //mounting
        console.log("First log");
        // fetch("someapi", data)
        },
        //death of a component 
        [count])
    return(
        <div>We are learning hooks 
            <h1>Counter app</h1>
            <h2>Current count : {count} </h2>
            <button onClick={()=> {setCount(count + 1)}}> + </button>
            <button onClick={()=> {setCount(count - 1)}}> - </button>
            <button onClick={()=> {setCount(0)}}> Reset </button>


        </div>
    )
}

export default Hooks;

