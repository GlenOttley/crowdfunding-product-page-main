import React from "react";

function PledgeStats({ stats }) {

	const width = stats.amount / stats.goal * 100

	return (
		<div className="card">
			<div className="pledge-stats container">

				<div className="stat">
					<h1 className="stat__heading">
					${stats.amount.toLocaleString()}
					</h1>
					<p className="stat__text">
					of ${stats.goal.toLocaleString()} backed
					</p>
					
				</div>

				<hr className="stat__hr"></hr>

				<div className="stat">
					<h1 className="stat__heading">
					{stats.backers.toLocaleString()}
					</h1>
					<p className="stat__text">
					total backers
					</p>
				</div>

				<hr className="stat__hr"></hr>

				<div className="stat">
					<h1 className="stat__heading">
					{stats.daysRemaining}
					</h1>
					<p className="stat__text">
					days left
					</p>
				</div>

			</div>

			<div className="container">
				<div className="progress-bar">
					<div 
					className="progress-bar__inner"
					style={
						{width: `${width}%`}}>
					</div>
				</div>
			</div>

		</div>
	)
}

export default PledgeStats