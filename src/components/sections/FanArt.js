import React from "react";

import Spinner from "../../resources/images/Spinner-1s-200px.svg";

import ImageGrid from "../common/ImageGrid";

//import test images 
// import testImage1 from "../../resources/images/"

export default class FanArt extends React.Component {
	state = { loading: true, test: true, art: [] };

	componentDidMount = () => {
		/**
		 * load in images from backend
		 */

		if (this.state.test){
			 
		}
	};

	render = () => {
		return (
			<div id="FANART" name="FANART" className="page fanArt">
				<div className="pageHeader">
					<div className="titleHeader">
						<div className="titleText">FAN ART</div>
					</div>
				</div>
				<div className="pageBody">
					<div className="card">
						{this.state.loading ? (
							<img className="loader" src={Spinner}></img>
						) : (
							<ImageGrid></ImageGrid>
						)}
					</div>
				</div>
			</div>
		);
	};
}
