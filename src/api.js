import { addPostAction, addCommentAction } from "./store/action/Action"

export const getPost = numId => {
	return dispatch => {
		fetch(`https://jsonplaceholder.typicode.com/users/${numId}/posts`)
			.then(response => response.json())
			.then(json => dispatch(addPostAction(json)))
	}
}

export const getComments = numPos => {
	return dispatch => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${numPos}/comments`)
			.then(response => response.json())
			.then(json => dispatch(addCommentAction(json)))

	}
}

export const addCommentForm = (data) => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/comments', {
			method: 'POST',
			body: JSON.stringify(data)
		})
			.then(response => response.json())
	}
}