import Modal from "./Modal";

function NavModal({ showNavModal, toggleNavModal, className }) {

	if (!showNavModal) {
		return null
	}
	return (
		<Modal
		toggleModal={toggleNavModal}
		className="nav-modal"
		modalContent=
			<div>
				<div className="nav column">
					<p className="nav__text container">About</p>
					<hr className="nav__hr"></hr>
					<p className="nav__text container">Discover</p>
					<hr className="nav__hr"></hr>
					<p className="nav__text container">Get Started</p>
				</div>
			</div>
		/>
	)
}

export default NavModal