import React, { useState } from "react";
import mastercraftLogo from "../images/logo-mastercraft.svg";
import bookmarkIcon from "../images/icon-bookmark.svg";
import bookmarkIconCyan from "../images/icon-bookmark-cyan.svg";

function ActionCall({ togglePledgeModal }) {

	const [clicked, setClicked] = useState(false)
	const toggleClicked = () => {
		clicked ? setClicked(false) : setClicked(true)
	}

	return (
		<div className="action-call card">
			<div className="container">

				<img 
				className="action-call__img"
				src={mastercraftLogo}
				alt="mastercraft logo" />

				<h2 className="action-call__heading">
				mastercraft bamboo monitor riser
				</h2>

				<p>A beautifully handcrafted monitor stand 
				to reduce neck and eye strain.</p>

				<div className="row spaced">
					<button
					className="btn btn--cyan"
					onClick={togglePledgeModal}>
					Back this project
					</button>

					<div className="bookmark__container row">
						<img
						className="bookmark__img"
						src={clicked ? bookmarkIconCyan : bookmarkIcon}
						alt="bookmark this project"
						onClick={toggleClicked} />
						<p className="bookmark__text">Bookmark</p>
					</div>

				</div>
			</div>
		</div>
	)
}

export default ActionCall