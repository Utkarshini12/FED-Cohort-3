
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SyncValidationForm from './SyncValidationForm';
import {Provider} from 'react-redux'
import store from './Store'

function Run() {
  return (
    <Provider store={store}>
    <div className="App">
      <SyncValidationForm />
    </div>
    </Provider>
  );
}

export default Run;
