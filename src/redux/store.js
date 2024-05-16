import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import StudentSlice from "./slice/StudentSlice";

const rootReducer = combineReducers({
    StudentSlice
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
// store.subscribe(() => {console.log(store.getState())})
