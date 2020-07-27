import React from "react";
import { Link } from "react-router-dom";
import "./ResultCard.css";

const ResultCard = (props) => {
	console.log(props);
	return (
		<div className="result-card">
			<img src={props.image} alt="headshot" class='rep-photo'/>
			<div className="card-info">
				<Link to={`/member/${props.id}`}>
					<h3 class='rep-name'>
						{props.first_name} {props.last_name}
					</h3>
				</Link>
				<ul>
					<li>{props.role}</li>
					<li>{(props.party === 'Democrat' && <i class="fas fa-democrat"></i>) || <i class="fas fa-republican"></i>} {props.party}</li>

				</ul>
			</div>
		</div>
	);
};

export default ResultCard;
