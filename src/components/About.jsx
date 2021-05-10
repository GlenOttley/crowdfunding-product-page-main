import React from "react";
import ProductCard from "./ProductCard";

function About({ products, submitPledge, togglePledgeModal, selectProduct }) {
	return (
		<div className="about card">
			<div className="container">
				<h2
				className="about__heading">
				About this project
				</h2>
				<p>
				The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
			  to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
			  your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
			  </p>
			  <p>
			  Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
  			to allow notepads, pens, and USB sticks to be stored under the stand.
			  </p>

			  {products.slice(1).map(product => 

				  <ProductCard
				  key={product.id}
				  id={product.id}
				  title={product.title}
				  value={product.value}
				  description={product.description}
					remaining={product.remaining}
					togglePledgeModal={togglePledgeModal}
					selectProduct={selectProduct}
				  />

				)}
			  
			</div>
		</div>
	)
}

export default About