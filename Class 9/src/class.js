import React, {Component} from "react";

// class ClassComp extends Component {
//     render() {
//         const element = x; 
//         function handleSubmit(e) {

//         }

//         return (
//             <div>
//                 <h1>I am a class component </h1>
//                 <button>Submit</button>
//             </div>

//         )
//     }

// }

// export default ClassComp

class Welcome extends Component {
    render() {
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}