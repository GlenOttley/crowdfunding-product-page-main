import Modal from "./Modal";
import thanksIcon from "../../images/icon-check.svg";

function ThanksModal({ showThanksModal, toggleThanksModal }) {

	if (!showThanksModal) {
		return null
	}
	return (
		<Modal
		toggleModal={toggleThanksModal}
		className={"thanks-modal"}
		modalContent=
			<div>
				<div className="container column column--center">
					<img 
					className="thanks__img margin__lg"
					src={thanksIcon} 
					alt="tick" />

					<h3 className="margin__lg">Thanks for your support!</h3>
					
					<p className="thanks__text margin__xl">
					Your pledge brings us one step closer to 
					sharing Mastercraft Bamboo Monitor Riser worldwide. 
					You will get an email once our campaign is completed.
					</p>

					<button 
					className="btn btn--cyan"
					onClick={toggleThanksModal}>
					Got it!
					</button>

				</div>
			</div>
		/>
	)
}

export default ThanksModal