import React from "react";
import "./ResultCard.css";

const ResultCard = (props) => {
	return (
		<div className="result-card">
			<img />
			<div className="card-info">
				<h2>Name</h2>
				<ul>
					<li>Title</li>
					<li>Party</li>
					<li>State</li>
				</ul>
			</div>
		</div>
	);
};

export default ResultCard;
