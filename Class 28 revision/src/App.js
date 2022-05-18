import store from './store/store';
import { Provider } from 'react-redux';
import Calender from './component/calender/Calender';
import "./App.css"






function App(){
  return (
    <Provider store={store}>
   <Calender />
   </Provider>
  )
}

export default App;