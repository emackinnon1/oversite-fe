import React, { useState, useEffect } from "react";
import "./SingleRep.css";
import { getMemberInfo, sendTweet } from "../../apiCalls";
import Collapsible from "../Collapsible/Collapsible";
import { APP_URL } from "../../apiConfig";

const SingleRep = (props) => {
	const [memberInfo, setMemberInfo] = useState({});
	const [tweet, setTweet] = useState("");

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

	console.log(tweet);

	return (
		<section className="single-rep-container">
			<h1>
				{memberInfo.first_name} {memberInfo.last_name}
			</h1>
			<div className="profile-container">
				<div className="bio-container">
					<img
						className="rep-img"
						src={memberInfo.image}
						alt={`${memberInfo.first_name} ${memberInfo.last_name}`}
					/>
					<div className="bio-info">
						<h3>{memberInfo.state}</h3>
						<h3>{memberInfo.party}</h3>
						<h3>{memberInfo.chamber}</h3>
						<h4>{memberInfo.role}</h4>
						<h4>{memberInfo.district && `District: ${memberInfo.district}`}</h4>
						<p>Phone: {memberInfo.phone}</p>
						<p>Office: {memberInfo.address}</p>
					</div>
				</div>
				<div className="contact-container">
					<ul>
						{memberInfo.contact_form_url && (
							<li>
								<a href={memberInfo.contact_form_url}>Contact Form</a>
							</li>
						)}
						{memberInfo.facebook && (
							<li>
								<a href={memberInfo.facebook}>Facebook</a>
							</li>
						)}
						{memberInfo.twitter_url && (
							<li>
								<a href={memberInfo.twitter_url}>Twitter</a>
							</li>
						)}
						{memberInfo.youtube && (
							<li>
								<a href={memberInfo.youtube}>Youtube</a>
							</li>
						)}
					</ul>
					<form
						className="message-form"
						onSubmit={(e) => {
							sendTweet(APP_URL, tweet, memberInfo.twitter_handle);
						}}>
						<textarea
							placeholder="Type your tweet here...."
							value={tweet}
							onChange={(e) => setTweet(e.target.value)}
							maxlength={
								memberInfo.twitter_handle &&
								280 - (memberInfo.twitter_handle.length + 1)
							}
							style={{
								height: "6em",
								resize: "none",
								width: "inherit",
							}}></textarea>
						<button type="submit">Tweet this Congress Member</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default SingleRep;
