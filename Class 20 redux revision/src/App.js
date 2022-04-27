import { createStore } from 'redux';
import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'; 


// actions
const ADD = "ADD";
const DELETE = "DELETE"


const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

const deleteMessage = (message) => {
  return {
    type: DELETE,
    message: message
  }
}


// generic reducer 

const messageReducer = (state = [], action) => {

  switch (action.type) {
    case ADD:
      return [
        ...state, action.message
      ];
    case DELETE:
      return [
        ...state, action.message
      ];
    default:
      return state;
  }
}
// create redux store
const store = createStore(messageReducer);
// const store = (UIComponent)(state, action)


// UI & Store 

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)

  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input)
    this.setState({
      input: ''
    })
  }
  render() {
    return (
      <div>
        <h2>Type your message</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map((message, idx) => {
            return (
              <li key={idx}>{message}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { messages: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    },
  }
}
// const store = (UIComponent)(state, action)
const Container = connect(mapStateToProps, mapDispatchToProps)(Todo);



class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}

export default App; 


// add action for edit 
// add action for delete












