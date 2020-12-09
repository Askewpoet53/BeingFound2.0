import React from "react"; 
import {
	Link,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

import Axios from "axios";
import EmailInput from "../form/Email";
// import regex
import regex from "../../auth/regex";

//import url
import settings from "../../api/settings.json";

//import images
import bookImage from "../../resources/images/being found SMALL.png";

export default class About extends React.Component {
	state = { email: null };

	updateEmail = (evt) => {
		this.setState({ email: evt });
	};

	onEmailSubmit = async (evt) => {
		let result = regex.emailCheck.test(this.state.email);
	
		if (result) {
			//send to back end
			const response = await Axios.post(
				settings.api.dev + "/signup-newsletter",
				{
					email: this.state.email,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			localStorage.setItem("newsletter", "true");

			alert(response.data);
		} else {
			alert("Email is not valid");
		}

		this.setState({ emailCheck: true });
	};
	render = () => {
		return (
			<div id="ABOUT" name="ABOUT" className="page about">
				{localStorage.getItem("newsletter") ? null : (
					<EmailInputContainer
						className="emailSignupContainer"
						updateEmail={this.updateEmail}
						onSubmit={this.onEmailSubmit}></EmailInputContainer>
				)}
				<div className="pageHeader">
					<div className="titleHeader">
						<div className="titleText">ABOUT BEING FOUND</div>
					</div>
				</div>
				<div className="pageBody">
					<div className="card">
						<img className="cardImg bookImg" src={bookImage} alt=""></img>
					</div>
					<div className="card">
						<div className="cardBody">
							<p className="cardText emphasisText">
								Being Found is the new Sci-Fi book series written by Arend
								Richard.{" "}
							</p>
							<p className="cardText">
								The first book in the three part series will be launching on
								11/11/2020."Being Found" will be available as an E-Book through
								Amazon as well as Paperback through Amazon. Signed author copies
								are currently available for preorder (limited quantity). Audio
								Book coming soon!
							</p>
							<p className="cardText">
								A war is being fought in the higher dimensions of the Universe
								and the most important players are just waking up to their
								purpose. Cameron has been hearing the thoughts of everyone
								around him for as long as he can remember. A double edged gift
								that has given him fantastic insight into the human mind, and
								prevented him from making a real connection to the people around
								him. He has no idea where this “gift” comes from or why it was
								given to him, but he’s about to find out. One night on his way
								home from work, Cameron is approached by a mysterious man with
								purple eyes whose thoughts he cannot hear. Little does Cameron
								know, that man has come from somewhere far away to awaken him to
								his destiny. What happens next sends Cameron on a mission that
								spans the Universe. Discovering the reasons behind his “gift”
								and his purpose on Earth.
							</p>
						</div>
						<div className="cardAction">
							<Link
								to="ORDER"
								activeClass={"active"}
								offset={-15}
								spy={true}
								smooth={true}
								duration={1000}>
								<div className="button">
									<div className="buttonText">PURCHASE</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	};
}

class EmailInputContainer extends React.Component {
	render = () => {
		return (
			<div className="emailSignup">
				<EmailInput

					onSubmit={this.props.onSubmit}
					updateEmail={this.props.updateEmail}
					className={"emailInput"}></EmailInput>
			</div>
		);
	};
}
