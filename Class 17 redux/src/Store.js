import {createStore, combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';

const reducer = combineReducers({
    form: reduxFormReducer
})

// communication bw store and reducer
const store = (createStore)(reducer);


export default store;



