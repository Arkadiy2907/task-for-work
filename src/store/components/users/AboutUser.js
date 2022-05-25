import React from 'react';
import { arrUserId } from '../AllFakeData/ArrUserId';
import { useParams } from "react-router-dom"
/* import "./userId.scss" */

const AboutUser = () => {
	const { userId } = useParams();
	const [userData, setUserData] = React.useState(null)
	const memoPerson = React.useMemo(() => !!arrUserId && arrUserId.find(item => item.indexId === Number(userId)), [userId])

	React.useEffect(() => {
		setUserData(memoPerson)
	}, [memoPerson])

	return userData && (
		<>
			<table className="aboutUser__info">
				<tr className='aboutUser__userName'>
					<td>&nbsp;</td>
					<td colspan="5">{userData.surname}&nbsp;{userData.name}</td>
					<td>&nbsp;</td>
				</tr>
				<tr className="aboutUser__info">
					<td>&nbsp;</td>
					<td>{userData.mail}</td>
					<td>{userData.phone}</td>
					<td>{userData.city}</td>
					<td>{userData.website}</td>
					<td>{userData.company}</td>
					<td>&nbsp;</td>
				</tr>
			</table>

		</>
	)
}

export default AboutUser