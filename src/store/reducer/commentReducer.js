import { FETCH_COMMENT, RESET_COMMENTS } from "../action/ActionTypes"

const defaultState = {
	comment: []
}

export const commentReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_COMMENT:
			return { ...state, comment: [...state.comment, ...action.payload] }
		case RESET_COMMENTS:
			return defaultState
		default:
			return state
	}
}