import React from "react"
import FirstPage from "./store/components/firstPage/FirstPageCards"
import Header from "./store/components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Comments from "./store/components/comments/Comments";
import UserId from "./store/components/users/UserId";

import "./App.scss"

const App = () => {
	return (
		<div className="wrapper">
			<div className="wrap">
				<Router>
					<Header />					
					<Routes>
						<Route path="/" exact element={<FirstPage />} />
						<Route path="/:userId" exact element={<UserId />} />
						<Route path="/comments/:postId" exact element={<Comments />} />
						<Route path="/undefined" exact element={<FirstPage />} />
					</Routes>
				</Router>
			</div>
		</div>
	)
}

export default App;