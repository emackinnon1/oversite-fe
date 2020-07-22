import React, { useState } from "react";
import "./SingleRep.css";

const SingleRep = () => {
	return (
		<section className="single-rep-container">
			<div className="bio-container">
				<h1>Bernard Sanders</h1>
				<img
					className="rep-img"
					src="https://theunitedstates.io/images/congress/original/S000033.jpg"
					alt="name of the rep from state"></img>
				<h2>Vermont</h2>
				<h3>Independant</h3>
				<h4>Senate</h4>
				<h4>Title</h4>
				<p>District</p>
				<p>Phone number</p>
				<p>Office Address</p>
				<img
					className="district-img"
					src="/images/capital_hill.png"
					alt="capital hill placeholder"></img>
			</div>
			<div className="media-links-msg-input">
				<div className="state-links">
					<ul>
						<li>
							<a href="#">Website</a>
						</li>
						<li>
							<a href="#">YouTube</a>
						</li>
						<li>
							<a href="#">Facebook</a>
						</li>
						<li>
							<a href="#">Twitter</a>
						</li>
						<li>
							<a href="#">News Url</a>
						</li>
					</ul>
					<form className="message-form">
						<textarea
							className="message-area"
							placeholder="Type your tweet here...."></textarea>
						<button type="submit"> Send Message</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default SingleRep;
