import {createStore, combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
// generic reducer
const reducer = combineReducers({
    form: reduxFormReducer
})

// communication bw store and reducer
const store = (createStore)(reducer);


export default store;



