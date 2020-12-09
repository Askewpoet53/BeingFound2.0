import React from "react";

import Spinner from "../../resources/images/Spinner-1s-200px.svg";

/**
 * @property {Function} onSubmit - function that runs on submittion
 * @property {Function} updateEmail - funciton that runs on change
 */
export default class EmailInput extends React.Component {
	state = { loading: false };

	handleUpdate = (evt) => {
		evt.preventDefault();
		this.props.updateEmail(evt.target.value);
	};

	submit = () => {
		this.props.onSubmit();
		this.setState({ loading: true });
	};

	render = () => {
		return (
			<div className={this.props.className}>
				{this.state.loading ? (
					<img className="loader" src={Spinner}></img>
				) : (
					<div className="emailInput">
						<input
							onChange={this.handleUpdate}
							type="email"
							placeholder="Your email"
						/>
						<button onClick={this.submit}>Submit</button>
					</div>
				)}
			</div>
		);
	};
}
