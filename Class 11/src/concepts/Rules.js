import React, {useState} from 'react';

// 0. Only use hooks inside functional components

function sendData() {
    // 3. Do not call hooks inside regular function 
    //  useState -- incorrect

}

function Form() {
    //1. use name set variable
    const [name, setName] = useState("Utkarshini");
    const [data, setData] = useState(true);


    if(sendData === true) {
        setData(true)
    }





    return(
        <div>Form </div>
    )
    
// 2. always call useState on top level of react functions 
// useState -- incorrect 
}


export default Form()