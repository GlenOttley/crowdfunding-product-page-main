import React from "react";
import crowdfundLogo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close-menu.svg";

function Menu({ showNav, toggleNavModal }) {

	return (
		<div className="menu">
			<div className="row spaced">
				<img
				className="menu__logo"
				src={crowdfundLogo}
				alt="crowdfund logo" />
				<img 
				className="menu__hamburger"
				src={!showNav ? hamburgerIcon : closeIcon}
				alt="show navigation"
				onClick={toggleNavModal} />
				<div className="menu__nav row spaced">
					<p className="menu__nav__item">About</p>
					<p className="menu__nav__item">Discover</p>
					<p className="menu__nav__item">Get Started</p>
				</div>
			</div>
		</div>
	)
}

export default Menu