import { createStore } from 'redux';
import {reducers} from '../reducers/reducer';
const store = createStore(reducers);
export default store;