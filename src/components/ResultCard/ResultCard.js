import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./ResultCard.css";


const ResultCard = (props) => {

	

	const setDefaultUrl = (e) => {
		e.target.src = "/images/image-not-found.png";
	};

	return (
		<Link data-testid="card-link" to={`/member/${props.id}`}>
			<div className="result-card">
				<img
					src={props.image}
					onError={setDefaultUrl}
					alt="headshot"
					className="rep-photo"
				/>
				<div className="card-info">
					<h3 className="rep-name">
						{props.first_name} {props.last_name}
					</h3>
					<ul>
						<li>{props.role}</li>
						<li>
							{(props.party === "Democrat" && (
								<i className="fas fa-democrat"></i>
							)) || <i className="fas fa-republican"></i>}{" "}
							{props.party}
						</li>
					</ul>
				</div>
			</div>
		</Link>
	);
};

export default ResultCard;


ResultCard.propTypes = {
	first_name: PropTypes.string,
	id: PropTypes.string,
	image: PropTypes.string,
	last_name: PropTypes.string,
	party: PropTypes.string,
	role: PropTypes.string,
	state: PropTypes.string,
}