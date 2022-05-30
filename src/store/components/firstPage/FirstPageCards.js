import React from 'react';
import { useDispatch } from "react-redux";
import UserCards from './UserCards';
import { arrUserId } from '../AllFakeData/ArrUserId';
import { getPost } from '../../../api';
import { resetAll } from '../../action/Action';
import { Carousel } from "react-responsive-carousel";
import { arrCarusel } from '../AllFakeData/ArrUserId';
import CaruselItem from './CaruselItem';
// import img1 from "../../../images/1.jpg"
// import img2 from "../../../images/2.jpg"
// import img3 from "../../../images/3.jpg"
// import img4 from "../../../images/4.jpg"
// import img5 from "../../../images/5.jpg"
import "./firstPageCards.scss"
// import 'react-responsive-carousel/lib/styles/carousel.css';

const FirstPage = () => {
	const dispatch = useDispatch()

	const toggleId = i => {
		dispatch(resetAll())
		dispatch(getPost(i))
	}

	return (
		<>
			<section>
				<Carousel
					showThumbs={false}
					showStatus={false}
					infiniteLoop
					autoPlay
					useKeyboardArrows
					transitionTime={1000}
				>
					{!!arrCarusel && arrCarusel.map(item =>
						<CaruselItem
							img={item.img}
							title={item.title}
							body={item.body}
							key={item.id}
						/>
					)}
				</Carousel>
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