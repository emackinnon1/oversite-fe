import React from "react";
import "./ResultCard.css";

const ResultCard = (props) => {
	return (
		<div className="result-card">
			<img />
			<div className="card-info">
				<h2>{`${props.first_name} ${props.last_name}`}</h2>
				<ul>
					<li>{props.role}</li>
					<li>{props.party}</li>
					{/* <li>{props.state}</li> */}
				</ul>
			</div>
		</div>
	);
};

export default ResultCard;
