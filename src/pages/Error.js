import React from "react";
import { Link } from "react-router-dom";

import backgroundImage from "../resources/images/Background_1.png";

//import components
// import Navbar from "../components/common/navbar";

import { Redirect } from "react-router-dom";

let style = {
	backgroundImage: `URL(${backgroundImage})`,
	backgroundRepeat: "no-repeat",
	backgroundAttachment: "fixed",
	backgroundPosition: "center",
};

export default class Success extends React.Component {
	render = () => {
		if (localStorage.getItem("purchase-error") == null) {
			return <Redirect to="/"></Redirect>;
		}
		return (
			<div style={style} id="SUCCESS" name="SUCCESS" className="pageContainer">
				<div className="page success">
					{/* <Navbar></Navbar> */}
					<div className="pageHeader">
						<div className="titleHeader">
							<div className="titleText">ERROR! TRY AGAIN!</div>
						</div>
					</div>
					<div className="pageBody">
						<div className="card">
							<div className="cardBody">

                                <div className="cardBodyText emphasisText">
                                    We are very sorry for the inconvienince please try again soon!
                                </div>
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
