import {useRef, useEffect} from 'react'

function Ref() {
    // const textElement = document.getElementById("textElement");
    const textElements = useRef();
    const btnElements = useRef();
    console.log(textElements.current);
    console.log(btnElements);

    useEffect(()=> {
        console.log("this is our ref element", textElements);
        textElements.current.innerText = "Super fast reloading"
    }, [])

    return(
        <div >
           <h1 ref={textElements}>Loading...</h1>
           <button ref={btnElements} >Click me</button>
        </div>
    )
}

export default Ref;


//types of functions 
// creating function with name function
//     function click() {
//         return()
//     }
// // named arrow function
//     const click = () => {

//     }
// // annoym arrow function with return keyword
//     () => {
//         return()
//     }
// // annoym arrow function without return keyword
//     () => (

//     )