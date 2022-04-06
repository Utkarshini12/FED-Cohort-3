import {useState} from 'react'


const GrandChild = props => {
    return(
        <div>
            <h2>Hi you chose this brand : </h2>
            {/* <h2>{props.brand}</h2> */}
            <Child brand={props.brand} />
        </div>

    )
}
const Child = props => {
    return (
        <div>
            <h1>This is my address</h1>
            <h2>Child : {props.brand}</h2>
        </div>
    )
}

const Problem = () => {
    const [brandname] = useState("Amazon");
    return(
        <div>
            <h1>
                Hello
            </h1>
            <GrandChild brand={brandname} />
        </div>
    )
}

export default Problem;