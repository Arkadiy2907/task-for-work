import React from "react"
import PropTypes from "prop-types"

const CaruselItem = ({ img, title, body }) => {
	return (
		<div className="slide-holder">
			<img
				alt="boy"
				src={img}
			/>
			<div className="img__text">
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div className="wrap__btn">
				<button className='btn'>Купить билет</button>
			</div>
		</div>
	)
}

CaruselItem.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	body: PropTypes.string,
}

export default CaruselItem