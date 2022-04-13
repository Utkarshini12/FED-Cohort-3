import { Component } from "react";


class Props extends Component {
    render() {
        return(
            <div>
                <h1>Welcome, {this.props.name}</h1>
                <p>take a quick look at your stats below</p>
            </div>
        )
    }
}


export default Props