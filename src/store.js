import { combineReducers, createStore } from 'redux'
import reducer from "./reducers"

const appReducers = combineReducers(reducer);
const store = createStore(appReducers);

export default store;