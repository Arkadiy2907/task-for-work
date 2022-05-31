import React from 'react';
import { useDispatch } from "react-redux";
import UserCards from './UserCards';
import { arrUserId } from '../AllFakeData/ArrUserId';
import { getPost } from '../../../api';
import { resetAll } from '../../action/Action';
import { Carousel } from "react-responsive-carousel";
import { arrCarusel } from '../AllFakeData/ArrUserId';
import CaruselItem from './CaruselItem';
import "./firstPageCards.scss"

const FirstPage = () => {
	const dispatch = useDispatch()

	const toggleId = i => {
		dispatch(resetAll())
		dispatch(getPost(i))
	}

	const [formData, setFormData] = React.useState('')

	const showInputValue = (e) => setFormData(e.target.value)

	const reset = (e) => {
		e.preventDefault()
		setFormData('')
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
			<section className='wrap__aboutSite'>
				<div className="aboutSite__text">
					<h2>О площадке</h2>
					<div className="aboutSite__text__body">
						<p><b>Современная площадка для проведения концертов и других мероприятий любой сложности.</b></p>
						<p><span className='aboutSite__text__body_gray'> Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам. </span></p>
						<div className='aboutSite__text__body_borderLeft'></div>
					</div>

				</div>
				<div className="aboutSite__form">
					<div className="form__body">
						<p>Оставить заявку на проведение концерта</p>
						<textarea
							type="text"
							onChange={showInputValue}
							value={formData}
							placeholder="Расскажите о вашем предложении"
						/>
					</div>
					<div className="wrap__btn">
						<button type="button" className='btn' onClick={reset}>Отправить</button>
					</div>
				</div>
			</section>
			<section className='wrap__aboutGroup'>
				<div className="title__aboutGroup">
					<h2>О группе</h2>
				</div>
				<div className="body__aboutGroup">
					<p>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</p>
				</div>
			</section>

		</>
	);
}

export default FirstPage;