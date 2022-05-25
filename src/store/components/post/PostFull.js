import React from "react"
import { useSelector, useDispatch } from "react-redux";
import PostFullItem from "./PostFullItem";
import { resetAllComments } from "../../action/Action";
import { getComments } from "../../../api";
import "./post.scss"

const PostFull = () => {
	const postFull = useSelector(state => state.post.post)

	const dispatch = useDispatch()

	const toggleComment = i => {		
		dispatch(resetAllComments())
		dispatch(getComments(i))
	}
	
    return (
		<div className='wrapper__postFull'>
			<div className='postFull__title'>
				<p>Публикации</p>
			</div>
			<div className='postFull__info'>
				{!!postFull && postFull.map(item =>
					<PostFullItem
						title={item.title}
						body={item.body}
						key={item.id}
						post={item.id}
						onClick={toggleComment}
					/>
				)}
			</div>
		</div>
    )
}

export default PostFull