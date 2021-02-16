import React from "react";
import { Link } from "react-router-dom";

import Axios from "axios";
import EmailInputContainer from "../components/form/Email";
// import regex
import regex from "../auth/regex";

//import url
import settings from "../api/settings.json";

//import images
import backgroundImage from "../resources/images/Background_1.png";


const style = {
	backgroundImage: `URL(${backgroundImage})`,
	backgroundRepeat: "no-repeat",
	backgroundAttachment: "fixed",
	backgroundPosition: "center",
	backgroundSize: "cover",
};

export default class Success extends React.Component {
	state = {
		active: false,
		showMenu: false,
	};
	updateEmail = (newEmail) => {
		this.setState({ newsletterEmail: newEmail });
	};

	onEmailSubmit = async (evt) => {
		let result = regex.emailCheck.test(this.state.newsletterEmail);

		if (result) {
			//send to back end
			const response = await Axios.post(
				settings.api.dev + "/signup-newsletter",
				{
					email: this.state.newsletterEmail,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			localStorage.setItem("newsletter", "true");

			alert(response.data.message);
		} else {
			alert("Email is not valid");
		}

		this.setState({ emailCheck: true });
	};
	render = () => {
		return (
			<div style={style} id="SUCCESS" name="SUCCESS" className="pageContainer">
				<div className="page success">
					<div className="pageHeader">
						<div className="titleHeader">
							<div className="titleText">SUCCESSFUL PURCHASE!</div>
						</div>
					</div>
					<div className="pageBody">
						<div className="card">
							<div className="cardBody">
								<p className="cardText emphasisText">
									Sign Up for our Newsletter!
								</p>
								<p className="cardText">
									Sign up to stay up to date on release dates for the second and
									third book in the Being Found series as well as merchandise
									launches and author discussions!
								</p>
								<p className="cardText">
									{localStorage.getItem("newsletter") ? null : (
										<EmailInputContainer
											className="emailSignupContainer"
											updateEmail={this.updateEmail}
											onSubmit={this.onEmailSubmit}></EmailInputContainer>
									)}
								</p>
							</div>

							<div className="cardAction">
								<Link to="/" className="menuItem">
									HOME
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
}
