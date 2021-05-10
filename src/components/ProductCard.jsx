import React from "react";

function ProductCard({ id, title, value, description, 
	remaining, togglePledgeModal, selectProduct }) {
	return (
		<div 
		className={remaining >= 1
	   	? "product card"
	   	: remaining < 1 ? "product product--unavailable card" 
	   	: "product card" }>
	  	
	  	<div className="container" >

		  	<div className="product__container">
		  		<h3 className="product__heading margin__sm">
		  		{title} 
		  		</h3>

		  		<h3 className="product__pledge margin__xl highlight">
		  		Pledge ${value} or more
		  		</h3>
		  	</div>

	  		<p>{description}</p>
	  		
	  		<div className="product__container">
		  		<div className="product__remaining margin__lg">
			  		<h1 className="product__remaining__num">
			  		{remaining}
			  		</h1>
			  		<p className="product__remaining__text">
			  		left
			  		</p>
		  		</div>

		  		<button
		  		className={remaining >= 1
		  			? "btn btn--product btn--cyan" 
		  			: "btn btn--product btn--unavailable"}
		  		id={id}
		  		onClick={remaining
		  			? togglePledgeModal
		  			: null}>
		  		{remaining 
		  			? "Select Reward"
		  			: "Out of Stock"}
		  		</button>
		  	</div>

	  	</div>
	  </div>
	)
}

export default ProductCard