import { Link } from "react-router-dom";
import "./header.scss"

const Header = () => {
	return (
		<div className="wrap__header">
			<header className="header">
				<div className="header__nameSite">
					<h1>concert club</h1>
				</div>
				<div className="header__btn">
					<div className="pepoleBuyTicket btn">
						<Link className="header__button_back" to="/">Купили билеты</Link>
					</div>
					<div className="btn">
						<p>Версия для слабовидящих</p>
					</div>
					<div className="btn">
						<p>Мой профиль</p>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;