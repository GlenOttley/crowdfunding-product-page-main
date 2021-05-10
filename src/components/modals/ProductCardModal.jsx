import React from "react";

function ProductCardModal({ id, title, value, description, 
	remaining, selected, selectProduct, submitPledge, scrollToProduct }) {
	return (
		<div 
		className={remaining >= 1
			? "product card" 
			: remaining < 1 ? "product product--unavailable card" 
			: "product card" }
	 	style={selected 
	 		? {border: "2px solid var(--moderate-cyan)"}
	 		: null }
	 	id={id}>

	 	{scrollToProduct(selected, id)}
	  	
	  	<div className="container">

	  		<div className="row spaced product__card--modal">
			  	<div 
			  	className="row margin__xl zero-margin"
			  	id={id}
			  	onClick={remaining !== 0 || typeof remaining === "undefined"
			  		? selectProduct
			  		: null}
			  	style={{ cursor: "pointer" }}>

			  		<div 
			  		className="checkbox"
			  		id={id}>
			  			{selected 
			  			? <div 
			  			className="checkbox--selected"
			  			id={id}></div>
			  			: null }
			  		</div>

			  		<div 
			  		className="column product__card--modal__row"
			  		id={id}>
				  		<h3 
				  		className="product__heading product__heading--modal margin__sm"
				  		id={id}>
				  		{title}
				  		</h3>

				  		{remaining ?
				  		<h3 
				  		className="product__pledge highlight"
				  		id={id}>
				  		Pledge ${value} or more
				  		</h3>
				  		: null}
				  	</div>
				  </div>

			  	{typeof remaining !== "undefined" && remaining >= 0 ?
		  		<div className="product__remaining--modal margin__lg">
			  		<h1 className="product__remaining__num product__remaining__num--sm">
			  		{remaining}
			  		</h1>

			  		<p 
			  		className="product__remaining__text">
			  		left
			  		</p>
		  		</div>
		  		: null}

		  	</div>

	  		<p className="product__description--modal">{description}</p>
	  		
	  		{typeof remaining !== "undefined" && remaining >= 0 ?
	  		<div className="product__remaining margin__lg">
		  		<h1 className="product__remaining__num product__remaining__num--sm">
		  		{remaining}
		  		</h1>

		  		<p 
		  		className="product__remaining__text">
		  		left
		  		</p>
	  		</div>
	  		: null}

	  	</div>

	  	{selected ? 
	  		<div className="enter-pledge">
	  		<p>Enter your pledge</p>

	  		<div className="container row spaced remove-spaced">
	  			<input
	  			className="btn btn--sm btn--input"
	  			defaultValue={value}>
	  			</input>
	  			<button 
	  			className="btn btn--cyan btn--sm"
	  			id={id}
	  			onClick={submitPledge}>Continue</button>
	  		</div>
	  	</div>
	  	: null}
	  	

	  </div>
	)
}

export default ProductCardModal