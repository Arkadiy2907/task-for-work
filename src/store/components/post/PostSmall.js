import React from "react"
import { useSelector } from "react-redux";
import PostSmallItem from "./PostSmallItem";
import "./post.scss"

const PostSmall = () => {
	const postSmall = useSelector(state => state.post.post).slice(0, 3)

	return (
		<div className="wrapper__postSmall">
			<div className='postSmall__title'>
				<p>Посты</p>
			</div>
			<div className='postSmall__info'>
				{!!postSmall && postSmall.map(item =>
					<PostSmallItem
						title={item.title}
						body={item.body}
						key={item.id}
					/>
				)}
			</div>
		</div>
	)
}

export default PostSmall