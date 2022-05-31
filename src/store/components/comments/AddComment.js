import React from "react"
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addCommentForm } from "../../../api";
import PropTypes from "prop-types"
import "./comment.scss"

const AddComment = ({ closeNewComment, userId }) => {
	const [formData, setFormData] = React.useState({})
	const dispatch = useDispatch()
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset
	} = useForm({
		mode: "all"
	})

	const showInputValue = event => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	const randomNum = () => {
		return Math.round(Math.random() * 10000)
	}

	const [formId, setFormId] = React.useState(randomNum())

	const onSubmit = () => {		
		dispatch(addCommentForm(formData))
		reset()
	}

	const closForm = () => {
		setFormId(randomNum())
		closeNewComment()
	}

	return (
		<>
			<div className="addComment">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="attention">
						<p><b> Все поля должны быть заполнены!</b></p>
					</div>
					<div className="allForm">
						<input type="hidden" {...register(`id`)} value={formId} />
						<input type="hidden" {...register(`userId`)} value={userId} />
						<div className="nameForm">
							<p>пожалуйста введите свое имя </p>
							<input
								type="text"
								onChange={showInputValue}
								value={formData.name}
								{...register(`name`, {
									required: "Это поле обязательно",
									minLength: {
										value: 2,
										message: "минимум 2 символа"
									},
									maxLength: {
										value: 25,
										message: "максимум 25 символов"
									}
								})}
							/>
							<div className="errors">
								{errors.name && <span>{errors.name.message}</span>}
							</div>
						</div>
						<div className="emailForm">
							<p>пожалуйста введите свой email </p>
							<input
								type="email"
								onChange={showInputValue}
								value={formData.email}
								{...register("email", {
									required: "Email обязателен",
									validate: (value) =>
										value.includes("@") || "Email должен включать '@' "
								})}
							/>
							<div className="errors">
								{errors.email && <span>{errors.email.message}</span>}
							</div>
						</div>
						<div className="bodyForm">
							<p>пожалуйста введите свой коментарий: </p>
							<textarea
								type="text"
								onChange={showInputValue}
								value={formData.body}
								{...register(`body`, {
									required: "Это поле обязательно",
									minLength: {
										value: 2,
										message: "минимум 2 символа"
									},
									maxLength: {
										value: 165,
										message: "максимум 25 символов"
									}
								})}
							/>
							<div className="errors">
								{errors.body && <span>{errors.body.message}</span>}
							</div>
						</div>
					</div>
					<div className="wrap__btn btn__valid">
						<button type="button" disabled={!isValid} onClick={closForm} className='btn'>submit</button>
					</div>
				</form>
			</div>
		</>
	)
}

AddComment.propTypes = {
	userId: PropTypes.number,
	closeNewComment: PropTypes.func,
}

export default AddComment