import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Keys from './keys'
import Uncontrolled from './Uncontrolled';
import Controlled from './Controlled';
import Todo from './Todo'

function App() {
  return (
    <div className="App">
      {/* <Keys />
      <Uncontrolled />
      <Controlled /> */}

      <Todo />
    </div>
  );
}

export default App;
