import React from "react";
import DatePicker from "react-date-picker";

import uploadIcon from "../../resources/images/upload.svg";

export default class HolidayNomineeForm extends React.Component {
	state = {
		image: null,
	};
	render = () => {
		return (
			<div className="holidayNomineeForm">
				<form
					onSubmit={(evt) => {
						evt.preventDefault();
						return false;
					}}>
					<div className="formRow">
						<label>Name </label>
						<input
							onChange={(evt) => {
								this.props.updateInfo(evt.target.value, "name");
							}}
							type="Name"
							placeholder="Your name"
						/>
					</div>
					<div className="formRow">
						<label>Email </label>
						<input
							onChange={(evt) => {
								this.props.updateInfo(evt.target.value, "email");
							}}
							type="email"
							placeholder="Your email"
						/>
					</div>
					<div className="formRow">
						<label>Phone </label>
						<input
							onChange={(evt) => {
								this.props.updateInfo(evt.target.value, "phone");
							}}
							type="phone"
							placeholder="Your phone"
						/>
					</div>
					<div className="formRow">
						<label>DOB </label>
						<DatePicker
							value={this.props.DOB}
							className="datePicker"
							onChange={(evt) => {
								// console.log(evt);
								this.props.updateInfo(evt, "DOB");
							}}
						/>
					</div>
					<div className="formRow">
						<h1 className="formHeader sectionSplit">NOMINEE INFO</h1>
					</div>
					<div className="formRow">
						<label>Nominee Name </label>
						<input
							onChange={(evt) => {
								this.props.updateInfo(evt.target.value, "nomineeName");
							}}
							type="nomineeName"
							placeholder="Nominee Name"
						/>
					</div>
					<div className="formRow">
						<label>Nominee Email </label>
						<input
							onChange={(evt) => {
								this.props.updateInfo(evt.target.value, "nomineeEmail");
							}}
							type="nomineeEmail"
							placeholder="Nominee Email"
						/>
					</div>
					<div className="formRow">
						<label>Nominee DOB </label>
						<DatePicker
							value={this.props.nomineeDOB}
							className="datePicker"
							onChange={(evt) => {
								// console.log(evt);
								this.props.updateInfo(evt, "nomineeDOB");
							}}
						/>
					</div>
					<div className="formRow">
						<label>Description </label>
						<textarea
							name="paragraph_text"
							onChange={(evt) => {
								this.props.updateInfo(evt.target.value, "description");
							}}
							placeholder="Description"
						/>
					</div>
					<div className="formRow">
						<label>Reason For Nomination </label>
						<textarea
							onChange={(evt) => {
								this.props.updateInfo(evt.target.value, "reason");
							}}
							type="reason"
							placeholder="Reason"
						/>
					</div>
					<div className="formRow">
						<input
							id="image"
							name="image"
							onChange={(evt) => {
								// console.log(evt.target.files[0]);
								this.setState({ image: evt.target.files[0].name });
								this.props.updateInfo(evt.target, "image");
							}}
							type="file"
							accept="image/jpeg, image/png, image/jpg"
							placeholder="image"
							className="inputfile"
						/>
						<label className="nomineeImgBtn" htmlFor="image">
							<img className="uploadNomineeImg" src={uploadIcon} alt=""></img>
							{this.state.image ? this.state.image : "Nominee Image (optional)"}
						</label>
					</div>
				</form>
			</div>
		);
	};
}
