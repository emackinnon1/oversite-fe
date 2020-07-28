import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ResultCard.css";

const ResultCard = (props) => {
	console.log(props);

	const setDefaultUrl = (e) => {
		e.target.src = '/images/image-not-found.png'
	}

	return (
		<Link to={`/member/${props.id}`}>
			<div className="result-card">
				<img src={props.image}
				onError={setDefaultUrl} alt="headshot" class="rep-photo" />
				<div className="card-info">
					<h3 class="rep-name">
						{props.first_name} {props.last_name}
					</h3>
					<ul>
						<li>{props.role}</li>
						<li>
							{(props.party === "Democrat" && (
								<i class="fas fa-democrat"></i>
							)) || <i class="fas fa-republican"></i>}{" "}
							{props.party}
						</li>
					</ul>
				</div>
			</div>
		</Link>
	);
};

export default ResultCard;
