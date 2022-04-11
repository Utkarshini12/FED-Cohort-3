import React, { Component } from 'react';

class Controlled extends Component {

    constructor(props) {
        super(props);

        this.input = React.createRef();
    }



    // state = {
    //     value : ""
    // }

    // handleChange =(e) => {
    //     this.setState({value: e.target.value})
    // }

    handleSubmit = (e) => {
        // alert("Controlled component" + this.state.value);
        e.preventDefault();
        console.log("This is being tracked by ref" + this.input.current.value);
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                  Name: 
                  <input 
                  ref={this.input}
                  type="text"
                //   value={this.state.value}
                //   onChange={this.handleChange}
                  />
              </label>
              <input type="submit" value="Submit" />
          </form>
        )
    }
}

export default Controlled;