import { Link } from "react-router-dom";
import React from 'react';
import PropTypes from "prop-types"
/* import "./header.scss" */

const UserCards = ({ el, name, surname, to, onClick }) => {
	return (
		<li className="userCards__item">
			<div className="userCards__item__user">
				{name} {surname}
			</div>
			<div className="wrap__btn">
				<div className="btn">
					<Link to={to} onClick={() => onClick(el)}>
						Смотреть Профиль
					</Link>
				</div>
			</div>
		</li>
	);
}

UserCards.propTypes = {
	el: PropTypes.number,
	surname: PropTypes.string,
	name: PropTypes.string,
	to: PropTypes.string,
	onClick: PropTypes.func
}

export default UserCards;