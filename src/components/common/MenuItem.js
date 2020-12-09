import React from "react";
import {
	Link,
	DirectLink,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

export default class MenuItem extends React.Component {
	render = () => {
		if (this.props.onClick && this.props.override == false)
			return (
				<div
					onClick={(evt) => {
						this.props.onClick(this.props.passback);
					}}
					className="menuItem">
					<div className="itemText">{this.props.text}</div>
				</div>
			);

		return (
			<Link
				offset={-15}
				spy={true}
				smooth={true}
				duration={1000}
				to={this.props.passback}>
				<div
					className="menuItem"
					onClick={(evt) => {
						if (this.props.onClick) {
							this.props.onClick();
						}
					}}>
					<div className="itemText">{this.props.text}</div>
				</div>
			</Link>
		);
	};
}
