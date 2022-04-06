
import './App.css';
import CustomHook from './customHooks/customHook';
import Problem from './problem/problem';
import Solution from './problem/solution';
import Ref from './refs/ref';

function App() {
  return (
    <div className="App">
      <Ref />
      <Problem />
      <Solution />
      <CustomHook />
    </div>
  );
}

export default App;
