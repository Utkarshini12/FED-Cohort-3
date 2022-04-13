import {useState} from 'react';

// convert data into string // return us a string 
const ValidateData =(props) => {
    return (
        <h1>
            <CheckNumber number2={props.number1} />

        </h1>

    )
}

// data that we received is a number or not  // checknumber = true 
const CheckNumber = (props) => {
    return(
        <div>Check number : 
            {props.number2}
        </div>
    )

}

const PropsDrilling = () => {
    const [numbers] = useState("8"); // this is the data 
    return(
        <div>
            <h1>Total orders pickup today : </h1>
            <ValidateData number1 = {numbers} />


        </div>
    )
}

export default PropsDrilling;