import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import studentsReducer from './reducers/reducerStudent';

const rootReducer = combineReducers({
    studentsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
