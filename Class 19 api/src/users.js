import { Component } from "react";



class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data) => this.setState({
            items: data,
            DataIsLoaded: true
        }))
    }

    render() {
        const {items, DataIsLoaded} = this.state;
        if(!DataIsLoaded){
            return(
                <div className="container">
                    <h1 className="text-center">Please wait. Loading...</h1>
                </div>
            )
        }
        
        return(
            <div className="container text-center">
                {
                    items.map((item)=> (
                        <div className="card m-1" key={item.id} >
                            <div className="card-body">
                                <h4><b>{item.username}</b></h4>
                                <p>{item.name}</p>
                                <p>{item.address.zipcode}</p>
                            </div>
                        </div>

                    ))
                }
            </div>
           



        )
    }
} 

export default Users;