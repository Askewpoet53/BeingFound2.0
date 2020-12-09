import React from "react";


export default class ImageGrid extends React.Component {
	state = {
		images: [],
	};

	createSquares = () => {



    };

	render = () => {
		let content = this.createSquares();

		return (
			<div className="imageGrid">
				<div className="gridContent">{content}</div>
			</div>
		);
	};
}

class ImageSquare extends React.Component {
	render = () => {
		return (
			<div className="gridSquare">
				<img className="imageSquare" src={this.props.img}></img>
			</div>
		);
	};
}

class ImageModal extends React.Component {
	render = () => {
		return (
			<div className="modalContainer">
				
			</div>
		);
	};
}
