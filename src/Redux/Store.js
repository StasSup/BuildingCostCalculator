import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import StepReducer from "./StepReducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
    StepData: StepReducer
})

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__  ?  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
);

export default store
