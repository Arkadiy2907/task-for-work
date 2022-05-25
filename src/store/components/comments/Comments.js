import React from "react"
import { useSelector } from "react-redux";
import CommentsItem from "./CommentsItem";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import AddComment from "./AddComment";
// import "./post.scss"

const Comments = () => {
	const comments = useSelector(state => state.comment.comment)
	const posts = useSelector(state => state.post.post)
	const { postId } = useParams()

	const nowPosts = !!posts && posts.find(item => item.id === Number(postId))

	const [nowPost, setNowPost] = React.useState(nowPosts)
	const [returnPosts, setReturnPosts] = React.useState(nowPost.userId)

	React.useEffect(() => {
		setNowPost(nowPosts)
	}, [nowPosts]);

	React.useEffect(() => {
		setReturnPosts(nowPost.userId)
	}, [nowPost]);

	const [addComment, setAddComment] = React.useState(false)

	const toggleComment = () => setAddComment(prew => !prew)
	const closeAddComment = () => setAddComment(false)

	return (
		<div className="wrap_postComment">
			<div className="wrap__post">
				<div className="post">
					<h3>Заголовок поста: {nowPost.title}</h3>
					<p><b>Обсуждаемый пост:</b> {nowPost.body}</p>
				</div>
			</div>
			<div className='wrap__comment'>
				<h3>Коментарии к посту</h3>
				<ul className='comment'>
					{!!comments && comments.map(item =>
						<CommentsItem
							name={item.name}
							email={item.email}
							body={item.body}
							key={item.id}
						/>
					)}
				</ul>
			</div>
			<div className="wrap__btn">
				<div className="btn btnA">
					<Link to={`/${returnPosts}`}>назад к постам пользователя</Link>
				</div>
				<button onClick={toggleComment} className='btn'>добавить коментарий</button>
			</div>
			{addComment && <AddComment
				closeNewComment={closeAddComment}
				userId={nowPost.userId}
			/>}

		</div>
	)
}

export default Comments