import { FETCH_POST_LIST, FETCH_COMMENT, RESET, RESET_COMMENTS } from "./ActionTypes"

export const addPostAction = (payload) => ({ type: FETCH_POST_LIST, payload })
export const addCommentAction = (payload) => ({ type: FETCH_COMMENT, payload })
export const resetAll = () => ({ type: RESET })
export const resetAllComments = () => ({ type: RESET_COMMENTS })