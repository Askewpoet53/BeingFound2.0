import React from "react";
import Axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

//import url
import settings from "../../api/settings.json";

//import images
import bookImage from "../../resources/images/being found SMALL.png";

const stripePromise = loadStripe(
	"pk_live_51HTxXeJ2zjEEIxGdmICjkzPd5uB1CPIWFwqCswjfwMrsTurBisezPaGTqwKZVSCng9yOgdlEXyHkRc9s1Q1jD35k00cUffnkP8"
);

export default class OrderSignedCopy extends React.Component {
	componentDidMount = async () => {
		let result = await Axios.get(
			settings.api.dev + "/purchase-signed-copy-availability"
		);
		this.setState({ amountLeft: result.data.left });
	};

	stripeCheckout = async () => {
		if ((this.state.amountLeft = 0)) {
			alert("Sorry there are none left in stock");
			return;
		}

		let response = await Axios.get(settings.api.dev + "/purchase-signed-copy");
		const stripe = await stripePromise;
		const result = await stripe.redirectToCheckout({
			sessionId: response.data,
		});
		// console.log(result);
		if (result.error) {
			localStorage.setItem("purchase-error", JSON.stringify(result.error));
		} else {
			localStorage.setItem("purchase-success", "true");
		}
	};

	render = () => {
		return (
			<div id="ORDER" name="ORDER" className="page order">
				<div className="pageHeader">
					<div className="titleHeader">
						<div className="titleText">PURCHASE COPY</div>
					</div>
				</div>
				<div className="pageBody">
					<div className="card">
						<img className="cardImg bookImg" src={bookImage} alt=""></img>
					</div>
					<div className="card">
						<div className="cardBody">
							<p className="cardText">
								Get a copy of "Being Found" signed by the author Arend Richard.
								Be Advised: Signed copies take additional time for delivery!
								Each copy signed with love.
							</p>
							<p className="subtitleText">
								*Please be advised: Signed paperback copies will be delivered to
								the author after the initial launch on 11/11. Please allow extra
								time for the copies to be signed and sent out (about two weeks).
								Limited availability.
							</p>
						</div>
						<div className="cardAction">
							<div onClick={this.stripeCheckout} className="button">
								<div className="buttonText">Order Signed Copy</div>
							</div>
							<div className="breakLine">
								--------------------- OR ---------------------
							</div>
							<div
								className="button"
								onClick={() => {
									window.open("https://www.amazon.com/dp/B08KGS8HMW", "_blank");
								}}>
								<div className="buttonText">Order Unsigned on Amazon</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
}
