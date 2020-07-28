import React, { useState, useEffect } from "react";
import "./SingleRep.css";
import { getMemberInfo, sendTweet } from "../../apiCalls";
import { APP_URL } from "../../apiConfig";

import ContentLoader from 'react-content-loader'

const SingleRep = (props) => {
	const [memberInfo, setMemberInfo] = useState({});
	const [tweet, setTweet] = useState("");
	const [isSending, setIsSending] = useState(false);
	const [isLoading, setIsLoading] = useState(true)
	const [messageSuccess, setMessageSucces] = useState(false);
	console.log("Member info", memberInfo)
	const Loading = () => <ContentLoader />

	useEffect(() => {
		let mounted = true;
		const getData = async (url, id) => {
			const member = await getMemberInfo(url, id);
			setMemberInfo(member[0]);
			setIsLoading(false)
		};
		if (mounted) {
			getData(APP_URL, props.id);
		}
		return () => (mounted = false);
	}, [props.id]);


	return ( 
		<section className="single-rep-container">
			<h1>
				{memberInfo.first_name} {memberInfo.last_name}
			</h1>
			{isLoading ? <Loading style={{textAlign: "center"}}/> :
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
						<p>{memberInfo.phone}</p>
						<p>{memberInfo.address}</p>
						<ul>
							{memberInfo.contact_form_url && (
								<li>
									<a className="link-icon" href={memberInfo.contact_form_url}>
										<img 
											
											src="/images/contact_form_icon.svg"
											alt="contact form"
										/>
									</a>
									<span className ="link-discription">Contact</span>
								</li>
							)}
							{memberInfo.facebook && (
								<li>
									<a className="link-icon" href={memberInfo.facebook}>
										<img 
											src="/images/facebook_icon.svg" 
											alt="facebook" />
									</a>
									<span className ="link-discription">Facebook</span>
								</li>
							)}
							{memberInfo.twitter_url && (
								<li>
									<a className="link-icon" href={memberInfo.twitter_url}>
										<img 
											src="/images/logo_icon.svg" 
											alt="twitter" />
									</a>
									<span className ="link-discription">Twitter</span>
								</li>
							)}
							{memberInfo.youtube && (
								<li>
									<a className="link-icon"  href={memberInfo.youtube}>
										<img 
											src="/images/youtube_icon.svg" 
											alt="youtube" />
									</a>
									<span className ="link-discription">YouTube</span>
								</li>
							)}
						</ul>
					</div>
				</div>
				<form
					className="message-form"
					onSubmit={async (e) => {
						setIsSending(true);
						setMessageSucces(
							await sendTweet(APP_URL, tweet, memberInfo.twitter_handle, e)
						);
						setTweet("");
					}}>
					<textarea
						data-testid="twitter-msg"
						placeholder="Type your tweet here...."
						value={tweet}
						onChange={(e) => setTweet(e.target.value)}
						maxLength={
							memberInfo.twitter_handle &&
							280 - (memberInfo.twitter_handle.length + 1)
						}
						style={{
							height: "3em",
							resize: "none",
							width: "65%",
							padding: ".8em"
						}}></textarea>
					<button
						alt="tweet-btn"
						type="submit"
						disabled={isLoading && "disabled"}>
						{(isLoading && !messageSuccess && "Sending...") ||
							`Tweet ${memberInfo.first_name} ${memberInfo.last_name}`}
					</button>
				</form>
			
			</div>
			}	
		</section>
	);
					
};

export default SingleRep;
