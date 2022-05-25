import { FETCH_POST_LIST, RESET } from "../action/ActionTypes"

const defaultState = {
	post: []
}

export const postReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_POST_LIST:
			return { ...state, post: [...state.post, ...action.payload] }
		case RESET:
			return defaultState
		default:
			return state
	}
}