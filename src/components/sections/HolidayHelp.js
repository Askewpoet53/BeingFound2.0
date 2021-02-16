//import packages
import React from "react";

import HolidayNominee from "../form/HolidayNominee";
import regex from "../../auth/regex";

//import url
import settings from "../../api/settings.json";
import Axios from "axios";
import Spinner from "../../resources/images/Spin-1s-200px.svg";

export default class HolidayHelp extends React.Component {
	state = {
		isLoading: false,
		name: null,
		email: null,
		phone: null,
		DOB: null,
		nomineeName: null,
		nomineeEmail: null,
		nomineeDOB: null,
		description: null,
		reasonForNomination: null,
		nomineeImage: null,
		submitted: false,
	};

	updateInfo = (value, name) => {
		// console.log(value, name);

		switch (name) {
			case "DOB":
				this.setState({ DOB: value });
				break;
			case "nomineeDOB":
				this.setState({ nomineeDOB: value });
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
				let reader = new FileReader();
				let file = value.files[0];

				reader.onloadend = () => {
					this.setState({
						nomineeImage: file,
						imagePreviewUrl: reader.result,
					});
				};

				reader.readAsDataURL(value.files[0]);
				break;
		}
	};

	getAge = (dateString) => {
		console.log(dateString);
		let today = new Date();
		let birthDate = new Date(dateString);
		console.log(birthDate);
		let age = today.getFullYear() - birthDate.getFullYear();
		let m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		console.log(age);
		return age;
	};

	onSubmit = async () => {
		let {
			isLoading,
			submitted,
			nomineeImage,
			nomineeImageURL,
			...data
		} = this.state;

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
			case `${data.description.length < 30}`:
				alert("Please explain more for your description");
				valid = false;
				break;
			case `${data.reasonForNomination < 30}`:
				alert("Please explain more for your description");
				valid = false;
				break;
		}

		if (this.getAge(data.nomineeDOB) > 18 && this.getAge(data.DOB) > 18) {
			if (valid) {
				this.setState({ isLoading: true });
				try {
					let formData = new FormData();

					formData.append("nomineeData", JSON.stringify(data));
					formData.append("nomineeImageData", this.state.nomineeImage);

					// console.log(formData.get("nomineeImageData"));

					let response = await Axios.post(
						settings.api.dev + "/upload-nominee",
						formData,
						{
							headers: {
								accept: "application/json",
								enctype: "multipart/form-data",
							},
						}
					);
					// console.log(response);

					if (response.data === "success") {
						this.setState({ isLoading: false, submitted: true });
					}
				} catch (error) {
					console.log(error);
				}
			}
		} else {
			alert("Please make sure both parties are above 18");
		}
	};

	render = () => {
		return (
			<div id="HOLIDAY" name="HOLIDAY" className="page holiday">
				<div className="pageHeader">
					<div className="titleHeader">
						<div className="titleText">BEING FOUND GIVES BACK</div>
					</div>
				</div>
				<div className="pageBody">
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
							<p className="cardText">Current Giveaway Total: $2000</p>
							<p className="cardText emphasisText">Contributors: </p>
							<p className="cardText">Arend Richard($1000)</p>
							<p className="cardText"> MacDizzle420 ($1000)</p>
						</div>
					</div>

					<div className="card lightCard">
						{this.state.isLoading ? (
							<>
								<img className="holidayLoading" src={Spinner}></img>
							</>
						) : this.state.submitted ? (
							<>
								<p className="cardText">Thank you for submitting a Nominee!</p>
							</>
						) : (
							<>
								<HolidayNominee
									DOB={this.state.DOB}
									nomineeDOB={this.state.nomineeDOB}
									updateInfo={this.updateInfo}></HolidayNominee>
								<div className="submitBtn">
									<button onClick={this.onSubmit}>SUBMIT</button>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		);
	};
}
