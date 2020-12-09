//import packages
import React from "react";

import HolidayNominee from "../form/HolidayNominee";
import regex from "../../auth/regex";

export default class HolidayHelp extends React.Component {
	state = {
		isLoading: false,
		name: null,
		email: null,
		phone: null,
		DOB: null,
		nomineeName: null,
		nomineeEmail: null,
		description: null,
		reasonForNomination: null,
		nomineeImage: null,
	};

	updateInfo = (value, name) => {
		// console.log(value, name);

		switch (name) {
			case "DOB":
				this.setState({ DOB: value });
				break;
			case "name":
				this.setState({ name: value });
				break;
			case "email":
				this.setState({ email: value });
				break;
			case "phone":
				this.setState({ phone: value });
				break;
			case "nomineeName":
				this.setState({ nomineeName: value });
				break;
			case "nomineeEmail":
				this.setState({ nomineeEmail: value });
				break;
			case "description":
				this.setState({ description: value });
				break;
			case "reason":
				this.setState({ reasonForNomination: value });
				break;
			case "image":
				this.setState({ nomineeImage: value });
				break;
		}
	};

	onSubmit = () => {
		let { isLoading, ...data } = this.state;

		console.log(data);

		let check1 = regex.emailCheck.test(data.email);

		regex.emailCheck.compile();

		let check2 = regex.emailCheck.test(data.nomineeEmail);

		let valid = true;

		switch ("true") {
			case check1 ? "false" : "true":
				alert("Please enter a correct email");
				valid = false;
				break;
			case check2 ? "false" : "true":
				alert("Please enter a correct email for the nominee");
				valid = false;
				break;
			case data.description.length < 30 ? "true" : "false":
				alert("Please explain more for your description");
				valid = false;
				break;
			case data.reasonForNomination < 30 ? "true" : "false":
				alert("Please explain more for your description");
				valid = false;
				break;
		}

		
	};

	render = () => {
		return (
			<div id="HOLIDAY" name="HOLIDAY" className="page author">
				<div className="pageHeader">
					<div className="titleHeader">
						<div className="titleText">BEING FOUND GIVES BACK</div>
					</div>
				</div>
				<div className="pageBody">
					<div className="card lightCard">
						<HolidayNominee
							key={this.state.DOB}
							DOB={this.state.DOB}
							updateInfo={this.updateInfo}></HolidayNominee>
						<div className="submitBtn">
							<button onClick={this.onSubmit}>SUBMIT</button>
						</div>
					</div>
					<div className="card">
						<div className="cardBody">
							<p className="cardText">
								Welcome to Being Found Gives Back! It has been my (author Arend
								Richard) lifelong goal to uplift the LGBTQIA+ community in any
								way possible throughout my career and life. I know from personal
								experience that the holiday season can be one of the toughest
								times of the year for the queer community. From ages 18-25 I
								spent every Christmas without family and was barely able to
								survive financially. I know I’m not the only one who has
								experienced this, and I know there are still young people
								struggling with these same circumstances today.
							</p>
							<p className="cardText">
								Along with the help of some of my friends (credited below w/
								their contribution), I’m hoping to alleviate one of those
								burdens for LGBTQIA+ young adults by giving $500 to as many
								struggling queer people who need it as possible. Everyone
								involved is honored to be able to help bring a little holiday
								joy to those who truly need it.
							</p>
							<p className="cardText">
								You will find a submission form to nominate someone you feel
								deserves this extra help. Our team will choose the recipients on
								12/23/2020 and send the money that same day via CashApp or
								Venmo.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	};
}
