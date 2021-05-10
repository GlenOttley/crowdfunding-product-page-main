import React from 'react';

function Modal({ modalContent, toggleModal }) {
return (
		<div 
		className="modal"
		onClick={toggleModal}>
			<div 
			className="modal__content container column"
			onClick={e => e.stopPropagation()}>
			{modalContent}
			</div>
		</div>
	)
}

export default Modal