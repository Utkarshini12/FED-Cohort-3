import { createStore } from "redux";
import {reducers} from '../reducers/reducer'

const store = createStore(reducers);
// (ui component -> state values)(all the reducer functions)
export default store; 