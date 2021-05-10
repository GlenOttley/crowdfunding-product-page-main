import React from "react";
import headerImgMobile from "../images/image-hero-mobile.jpg";
import headerImgDesktop from "../images/image-hero-desktop.jpg";

function Header() {
	return (
		<div className="header">
			<img 
			className="header__img--mobile"
			src={headerImgMobile}
			alt="computer on bamboo monitor riser" />
			<img 
			className="header__img--desktop"
			src={headerImgDesktop}
			alt="computer on bamboo monitor riser" />
		</div>
	)
}

export default Header