import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from 'redux-thunk'
import { postReducer } from "./reducer/postReducer"
import { commentReducer } from "./reducer/commentReducer"

const rootReducer = combineReducers({
	comment: commentReducer,
	post: postReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))