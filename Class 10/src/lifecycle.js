import React, {Component} from "react";

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count: 0
            
        };
        console.log("Constructor is called");
    }


// called before the page loads
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps is called");
    }
// looking for an update // waiting for any event to happen 
    shouldComponentUpdate() {
        console.log("shouldComponent update is called");
        return true;
    }
// capture previous state before any change
    getSnapshotBeforeUpdate(){
        console.log("getsnapshotbeforeupdate is called");
    }
// updates the component
    componentDidUpdate() {
        console.log("componentdid update is called");
    }
    render(){
        console.log("render is called");
        

        return (
            <div>React is awesome!
                <button 
                onClick={()=> {
                    this.setState({count: this.state.count + 1})
                }}
                >
                    Click me {this.state.count}
                </button>
            </div>
        )
    }

    componentDidMount() {
        console.log("Component did mount is called");
    }
}

export default Lifecycle;