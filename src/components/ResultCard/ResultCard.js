import React from "react";
import { Link } from "react-router-dom";
import "./ResultCard.css";

const ResultCard = (props) => {
	console.log(props);
	return (
		<div className="result-card">
			<img src={props.image} alt="headshot" />
			<div className="card-info">
				<Link to={`/member/${props.id}`}>
					<h2>
						{props.first_name} {props.last_name}
					</h2>
				</Link>
				<ul>
					<li>{props.role}</li>
					<li>{props.party}</li>
				</ul>
			</div>
		</div>
	);
};

export default ResultCard;
