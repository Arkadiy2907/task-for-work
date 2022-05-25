import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const PostFullItem = ({ title, body, post, onClick }) => {

	const [forToggle, setForToggle] = React.useState(false)
	const [oneString, setOneString] = React.useState(body.slice(0, 40))

	let toglle = () => {
		setForToggle(prew => !prew)
		if (forToggle) {
			setOneString(body.slice(0, 40))
		} else {
			setOneString(body)
		}
	}

	return (
		<div className="PostFullItemAndBtn">
			<div className="PostFullItem" onClick={toglle}>
				<h3>{title}</h3>
				<p>{oneString}</p>
			</div>
			<div className="wrap__btn">
				<div className="btn">
					<Link to={`/comments/${post}`} onClick={() => onClick(post)}>
						просмотр коментариев
					</Link>
				</div>
			</div>
		</div>
	)
}

PostFullItem.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	post: PropTypes.number,
	onClick: PropTypes.func
}

export default PostFullItem