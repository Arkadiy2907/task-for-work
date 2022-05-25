import React from 'react';
import AboutUser from './AboutUser';
import PostSmall from '../post/PostSmall';
import PostFull from '../post/PostFull';
import "./user.scss"

const UserId = () => {
	return (
		<>
			<div className='wrap__page2'>
				<section className='wrap__aboutUser'>
					<AboutUser />
				</section>
				<section className='wrap__postSmall'>
					<PostSmall />
				</section>
				<section className='wrap__postFull'>
					<PostFull />
				</section>
			</div>
		</>
	)
}

export default UserId