import Status from './Status';
import './App.css';


const comment = {
  text: "hello I hope you are enjoying react!",
  author: {
    name: "hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64"
  },
  likes: {
    heart: 2, 
    shocked: 5
  }
}

const comment2 = {
  text: "hello I hope you love dogs !",
  author: {
    name: "hello Doggo",
    avatarUrl: "http://placekitten.com/g/64/64"

  }
}
const comment3 = {
  text: "hello I hope you love dogs !",
  author: {
    name: "hello Doggo",
    avatarUrl: "http://placekitten.com/g/64/64"

  }
}

function Avatar(props) {
  return (
    <img src={props.user.avatarUrl} alt={props.user.name} />
  )
}

function UserInfo(props) {
  return (
    <div>
      <Avatar user={props.user} />
      <div>
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div>
      <UserInfo user={props.author} />
      <div>
        {props.text}
      </div>
    </div>
  )
}



function App() {

  return (
    <div className="App">
      <Comment text={comment.text} author={comment.author} />
      <Comment text={comment2.text} author={comment2.author} />
      <Status status = "success" />


    </div>
  );
}

export default App;
