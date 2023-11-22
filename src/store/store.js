import { combineReducers, createStore } from "redux"
import { studenReducer } from "./studentSlice/studentSlice";


const reducer=combineReducers(
    {
            students:studenReducer
    }
)

export const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())