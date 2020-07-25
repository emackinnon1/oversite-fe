import React, { useState, useEffect } from "react";
import "./SingleRep.css";
import { getMemberInfo } from "../../apiCalls";
import Collapsible from "../Collapsible/Collapsible";
import { APP_URL } from "../../apiConfig";

const SingleRep = (props) => {
	const [memberInfo, setMemberInfo] = useState({});

	useEffect(() => {
		let mounted = true;
		const getData = async (url, id) => {
			const member = await getMemberInfo(url, id);
			setMemberInfo(member[0]);
		};
		if (mounted) {
			getData(APP_URL, props.id);
		}
		return () => (mounted = false);
	}, [props.id]);

	console.log(memberInfo[0]);

	return (
		<section className="single-rep-container">
			<div className="bio-container">
				<h1>
					{memberInfo.first_name} {memberInfo.last_name}
				</h1>
				<img
					className="rep-img"
					src={memberInfo.image}
					alt={`${memberInfo.first_name} ${memberInfo.last_name}`}></img>
				<h3>{memberInfo.party}</h3>
				<h4>Senate</h4>
				<img
					className="district-img"
					src="/images/capital_hill.png"
					alt="capital hill placeholder"></img>
			</div>
			<div className="media-links-msg-input">
				<div className="state-links">
					<h2>Vermont</h2>
					<div></div>
					<ul>
						<li>Website</li>
						<li>YouTube</li>
						<li>Facebook</li>
						<li>Twitter</li>
					</ul>
					<form className="message-form">
						<textarea
							className="message-to-rep"
							placeholder="Type your message here...."></textarea>
						<button type="submit"> Send Message</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default SingleRep;
