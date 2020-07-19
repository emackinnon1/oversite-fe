import React from "react";
import ResultCard from "../ResultCard/ResultCard";
import "./ResultPage.css";

const ResultPage = () => {
	return (
		<div className="results">
			<ResultCard />
			<ResultCard />
			<ResultCard />
		</div>
	);
};

export default ResultPage;
