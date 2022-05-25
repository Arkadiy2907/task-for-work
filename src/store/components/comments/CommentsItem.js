import React from "react"
import PropTypes from "prop-types"

const CommentsItem = ({ name, email, body }) => {
	return (
		<li className="PostFullItem">
			<div className="PostFullItem__title">
				<h3>Имя: {name}</h3>
			</div>
			<div className="PostFullItem__body">
				<p> <b>Почта:</b> {email}</p>
			</div>
			<p><b>Коментарий:</b> {body}</p>
			
		</li>
	)
}

CommentsItem.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
	body: PropTypes.string,
}

export default CommentsItem