import React, { useState, useEffect } from "react";
import productData from "./data.js";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ActionCall from "./components/ActionCall";
import PledgeStats from "./components/PledgeStats";
import NavModal from "./components/modals/NavModal";
import PledgeModal from "./components/modals/PledgeModal";
import ThanksModal from "./components/modals/ThanksModal";
import About from "./components/About";


function App() {
	const [stats, setStats] = useState({
		amount: 89914,
		goal: 100000,
		backers: 5007,
		daysRemaining: 56 
	})

	const [products, setProducts] = useState([]);
	const [showNavModal, setShowNavModal] = useState(false);
	const [showPledgeModal, setShowPledgeModal] = useState(false);
	const [showThanksModal, setShowThanksModal] = useState(false);

	useEffect(() => {
		setProducts(productData)
	}, [products])

	const toggleNavModal = () => {
		showNavModal
		? setShowNavModal(false)
		: setShowNavModal(true)
	}

	const togglePledgeModal = (e) => {
		showPledgeModal 
		? setShowPledgeModal(false) 
		: setShowPledgeModal(true)
		if (e.target.id) { 
			selectProduct(e)
		}
	}

	const toggleThanksModal = () => {
		showThanksModal 
		? setShowThanksModal(false) 
		: setShowThanksModal(true)
	}

	const selectProduct = ({ target }) => {
		let index = products.findIndex(product => product.id === target.id)
		let newProducts = [...products];
		newProducts[index] = {...products[index], ...products[index].selected = true}

		for (let i = 0; i < newProducts.length; i++) {
			if (i !== index)  {
				newProducts[i].selected = false
			}
		}	
		setProducts(newProducts)
	}

	const submitPledge = ({ target }) => {
		let pledgeAmount = Number(target.parentNode.childNodes[0].value)
		stats.amount += pledgeAmount
		stats.backers ++
		setStats(prevStats => ({...prevStats, stats }));

		let index = productData.findIndex(product => product.id === target.id)
		productData[index].remaining --
		products[index].selected = false
		setShowPledgeModal(false)
		toggleThanksModal()
	}

	const scrollToProduct = (selected, id) => {
		if (selected) {
			document.getElementById(id).scrollIntoView()
		}
	}

  return (
    <div className="App">
    	<Header />

    	<NavModal 
    	showNavModal={showNavModal}
    	toggleNavModal={toggleNavModal} />

    	<PledgeModal 
    	showPledgeModal={showPledgeModal}
    	togglePledgeModal={togglePledgeModal}
    	products={products} 
    	selectProduct={selectProduct} 
    	submitPledge={submitPledge}
    	scrollToProduct={scrollToProduct} />

    	<ThanksModal
    	showThanksModal={showThanksModal}
    	toggleThanksModal={toggleThanksModal} />

    	<Menu 
	    	showNav={showNavModal}
	    	toggleNavModal={toggleNavModal} />

    	<main className="main container column">
	    	

	    	<ActionCall togglePledgeModal={togglePledgeModal} />

	    	<PledgeStats stats={stats} />

	    	<About 
	    	products={products} 
	    	togglePledgeModal={togglePledgeModal}
	    	selectProduct={selectProduct} />
    	</main>
    </div>
  );
}

export default App;
