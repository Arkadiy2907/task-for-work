import React from "react"
import PropTypes from "prop-types"

const PostSmallItem = ({ title, body }) => {
	
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
		<div className="postSmallItem" onClick={toglle}>
			<h3>{title}</h3>
			<p>{oneString}</p>
		</div>
	)
}

PostSmallItem.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string
}

export default PostSmallItem