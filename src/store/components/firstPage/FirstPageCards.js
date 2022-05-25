import React from 'react';
import { useDispatch } from "react-redux";
import UserCards from './UserCards';
import { arrUserId } from '../AllFakeData/ArrUserId';
import { getPost } from '../../../api';
import { resetAll } from '../../action/Action';
import "./firstPageCards.scss"

const FirstPage = () => {
	const dispatch = useDispatch()

	const toggleId = i => {
		dispatch(resetAll())
		dispatch(getPost(i))
	}

	return (
		<>
			<section className="carusel">
				<div className="carusel__namePartyDate">
					<h1>Twenty One Pilots</h1>
					<p>28.02.23 В 21.00</p>
				</div>
				<div className="curusel__arrowsBuy">
					<div className="curusel__arrowsBuy_prew btn">
						<p>&lt;</p>
					</div>
					<div className="curusel__arrowsBuy_buy btn">
						<p>Купить билет</p>
					</div>
					<div className="curusel__arrowsBuy_next btn">
						<p>&gt;</p>
					</div>
				</div>
			</section>
			<section className="textBuyTicket" >
				<h2>Купили билеты</h2>
				<p>932/<span>1000</span></p>
			</section>
			<section className='userCards'>
				<ul>
					{!!arrUserId && arrUserId.map(item => {
						return (
							<UserCards
								el={item.indexId}
								name={item.name}
								surname={item.surname}
								key={item.indexId}
								onClick={toggleId}
								to={item.to}
							/>
						)
					})
					}
				</ul>
			</section>
		</>
	);
}

export default FirstPage;