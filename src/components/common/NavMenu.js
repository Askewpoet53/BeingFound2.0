import React from "react";

import MenuItem from "./MenuItem";

export default class NavMenu extends React.Component {
	render = () => {
		let containerClass =
			"navMenuContainer" + (this.props.active ? " activeNav" : " hiddenNav");

		return (
			<div className={containerClass}>
				<div className="navMenu">
					<MenuItem
						onClick={this.props.toggleMenu}
						override={true}
						passback="ABOUT"
						text="ABOUT BEING FOUND"></MenuItem>

					<MenuItem
						onClick={this.props.toggleMenu}
						override={true}
						passback="AUTHOR"
						text="ABOUT THE AUTHOR"></MenuItem>

					<MenuItem
						onClick={this.props.toggleMenu}
						override={true}
						passback="ORDER"
						text="ORDER SIGNED COPY"></MenuItem>

					<MenuItem
						onClick={this.props.toggleMenu}
						override={true}
						passback="HOLIDAY"
						text="BEING FOUND GIVES BACK"></MenuItem>

					<MenuItem
						passback="AMAZON"
						text="ORDER E-BOOK 0R PAPERBACK ON AMAZON"
						onClick={() => {
							window.open("https://www.geeksforgeeks.org", "_blank");
						}}></MenuItem>

					<MenuItem
						onClick={this.props.toggleMenu}
						override={true}
						passback="FANART"
						text="FAN ART"></MenuItem>
				</div>
			</div>
		);
	};
}
