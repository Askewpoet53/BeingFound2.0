//import packages
import React from "react";
import { Events, scrollSpy } from "react-scroll";

//import components
import MenuItem from "../components/common/MenuItem";
import OrderSignedCopy from "../components/sections/OrderSignedCopy";
import About from "../components/sections/About";
import Author from "../components/sections/Author";

//import images
import backgroundImage from "../resources/images/Background_1.png";
import bookImage from "../resources/images/being found SMALL.png";
import menuIcon from "../resources/images/menu.svg";

const style = {
	backgroundImage: `URL(${backgroundImage})`,
	backgroundRepeat: "no-repeat",
	backgroundAttachment: "fixed",
	backgroundPosition: "center",
};

export default class Home extends React.Component {
	state = {
		active: false,
		showMenu: false,
	};

	componentDidMount() {
		Events.scrollEvent.register("begin", function () {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register("end", function () {
			console.log("end", arguments);
		});
		scrollSpy.update();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove("begin");
		Events.scrollEvent.remove("end");
	}

	scrollListener = (evt) => {
		console.log(evt.target.scrollingElement.scrollTop);
		let scrollAmount = evt.target.scrollingElement.scrollTop;
		
		if (scrollAmount >= 900) {
			this.setState({ showMenu: true });
		} else {
			this.setState({ showMenu: false });
		}
		console.log(scrollAmount);
	};
	toggleNavMenu = () => {
		this.setState({ active: !this.state.active });
	};

	componentDidMount() {
		window.addEventListener("scroll", this.scrollListener);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollListener);
	}
	render = () => {
		let pageClass = this.state.active
			? "pageContainer shovedOver"
			: "pageContainer";

		let navBtnClass = this.state.showMenu
			? "navMenuBtn navBtnActive"
			: "navMenuBtn";

		return (
			<div
				onScroll={this.scrollListener}
				style={style}
				id="pageContainer"
				className={"pageContainer"}>
				<div name="NAVMENU" className={navBtnClass}>
					<img src={menuIcon}></img>
				</div>
				<div id="HOME" name="HOME" className="page home">
					<div className="pageHeader">
						<div className="card">
							<img className="cardImg bookImg" src={bookImage} alt=""></img>
						</div>
					</div>
					<div className="pageBody">
						<HomeMenu></HomeMenu>
					</div>
				</div>
				<About></About>
				<Author></Author>
				<OrderSignedCopy></OrderSignedCopy>
			</div>
		);
	};
}

class HomeMenu extends React.Component {
	render = () => {
		return (
			<div className="homeMenu">
				<MenuItem passback="ABOUT" text="ABOUT BEING FOUND"></MenuItem>

				<MenuItem passback="AUTHOR" text="ABOUT THE AUTHOR"></MenuItem>

				<MenuItem passback="ORDER" text="ORDER SIGNED COPY"></MenuItem>

				<MenuItem
					passback="AMAZON"
					text="ORDER E-BOOK 0R PAPERBACK ON AMAZON"
					onClick={() => {
						window.open("https://www.amazon.com/dp/B08KGS8HMW", "_blank");
					}}></MenuItem>

				<MenuItem passback="FANART" text="FAN ART"></MenuItem>
			</div>
		);
	};
}
