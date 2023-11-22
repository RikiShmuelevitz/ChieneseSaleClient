import { combineReducers, createStore } from "redux"
import { studenReducer } from "./studentSlice/studentSlice";
import { donationReducer } from "./donationSlice/donationSlice";

const reducer=combineReducers(
    {
            students:studenReducer,
            donations:donationReducer
    }
)

export const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())