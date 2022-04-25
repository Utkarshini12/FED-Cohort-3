import { Component } from "react";


class ApiClass extends Component{
    constructor(props) {
        super(props);

        this.state = {
            postId: null
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: "Utkarshini"}), 
        }

        fetch("https://reqres.in/api/posts", requestOptions)
        .then((response)=> response.json())
        .then((data)=> console.log(data))
    }

    render() {
        const {postId} = this.state;
        return(
            <div>
                <h3>
                Look at Id here
                </h3>
                <p>Returned post ID : {postId}</p>

            </div>
        )
    }
}

export default ApiClass;