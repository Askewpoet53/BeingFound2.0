import React from "react";

import MenuItem from "./MenuItem";

export default class NavMenu extends React.Component {
	render = () => {
		return (
			<div className="navMenuContainer">
				<div className="navMenu">
					<MenuItem passback="ABOUT" text="ABOUT BEING FOUND"></MenuItem>

					<MenuItem passback="AUTHOR" text="ABOUT THE AUTHOR"></MenuItem>

					<MenuItem passback="ORDER" text="ORDER SIGNED COPY"></MenuItem>

					<MenuItem
						passback="AMAZON"
						text="ORDER E-BOOK 0R PAPERBACK ON AMAZON"
						onClick={() => {
							window.open("https://www.geeksforgeeks.org", "_blank");
						}}></MenuItem>

					<MenuItem passback="FANART" text="FAN ART"></MenuItem>
				</div>
			</div>
		);
	};
}
