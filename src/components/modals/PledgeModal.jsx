import Modal from "./Modal";
import ProductCardModal from "./ProductCardModal";
import closeIcon from "../../images/icon-close-modal.svg";


function PledgeModal({ showPledgeModal, togglePledgeModal, 
	products, selectProduct, submitPledge, scrollToProduct }) {

	if (!showPledgeModal) {
		return null
	}

	return (
		<Modal
		toggleModal={togglePledgeModal}
		className="pledge-modal"
		modalContent=
			<div>
				<div className="about">
					<div className="container">
						<div className="row spaced modal__heading">
							<h3>Back this project</h3>
							<img
							className="close-icon"
							src={closeIcon}
							alt="close modal"
							onClick={togglePledgeModal} />
						</div>
						<p>Want to support us in bringing Mastercraft 
						Bamboo Monitor Riser out in the world?</p>

					  {products.map(product => 
					  	<ProductCardModal
						  key={product.id}
						  id={product.id}
						  title={product.title}
						  value={product.value}
						  description={product.description}
							remaining={product.remaining}
							selected={product.selected}
							selectProduct={selectProduct}
							submitPledge={submitPledge}
							scrollToProduct={scrollToProduct}
						  />
					  )}

					</div>
				</div>
			</div>
		/>
	)
}

export default PledgeModal