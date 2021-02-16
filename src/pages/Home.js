//import packages
import React from "react";
import { Events, scrollSpy, animateScroll as scroll } from "react-scroll";

//import components
import MenuItem from "../components/common/MenuItem";
import OrderSignedCopy from "../components/sections/OrderSignedCopy";
import About from "../components/sections/About";
import Author from "../components/sections/Author";
// import FanArt from "../components/sections/FanArt";
import HolidayHelp from "../components/sections/HolidayHelp";
import NavMenu from "../components/common/NavMenu";

//import images
import backgroundImage from "../resources/images/Background_1.png";
import bookImage from "../resources/images/being found SMALL.png";
import menuIcon from "../resources/images/menu.svg";
import closeIcon from "../resources/images/close.svg";

const style = {
	backgroundImage: `URL(${backgroundImage})`,
	backgroundRepeat: "no-repeat",
	backgroundAttachment: "fixed",
	backgroundPosition: "center",
	backgroundSize: "cover",
};

export default class Home extends React.Component {
	state = {
		active: false,
		showMenu: false,
	};

	componentDidMount() {
		Events.scrollEvent.register("begin", function () {
			// console.log("begin", arguments);
		});

		Events.scrollEvent.register("end", function () {
			// console.log("end", arguments);
		});

		window.addEventListener("scroll", this.scrollListener);
		scrollSpy.update();
		if (this.props.scrollTo) {
			console.log(this.props.scrollTo);
			scroll.scrollTo(this.props.scrollTo, {
				duration: 100,
				smooth: true,
				containerId: "pageContainer",
				spy: true,
			});
		}
	}

	componentWillUnmount() {
		Events.scrollEvent.remove("begin");
		Events.scrollEvent.remove("end");

		window.removeEventListener("scroll", this.scrollListener);
	}

	scrollListener = (evt) => {
		// console.log(evt.target.scrollingElement.scrollTop);
		let scrollAmount = evt.target.scrollingElement.scrollTop;

		if (scrollAmount >= 900) {
			this.setState({ showMenu: true });
		} else {
			this.setState({ showMenu: false });
			if (this.state.active) {
				this.setState({ active: false });
			}
		}

		// console.log(scrollAmount);
	};
	toggleNavMenu = () => {
		this.setState({ active: !this.state.active });
	};

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
				<div
					onClick={this.toggleNavMenu}
					name="NAVMENU"
					className={navBtnClass}>
					{this.state.active ? (
						<img className="navIcon" src={closeIcon}></img>
					) : (
						<img className="navIcon" src={menuIcon}></img>
					)}
				</div>
				<NavMenu
					toggleMenu={this.toggleNavMenu}
					active={this.state.active}></NavMenu>
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
				{/* <HolidayHelp></HolidayHelp> */}
				{/* <FanArt></FanArt> */}
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
				<MenuItem
					passback="AUDIBLE"
					text="LISTEN TO BOOK ON AUDIBLE"
					onClick={() => {
						window.open(
							"https://www.audible.com/pd/B08WC89BBL/?source_code=AUDFPWS0223189MWT-BK-ACX0-238924&ref=acx_bty_BK_ACX0_238924_rh_us",
							"_blank"
						);
					}}></MenuItem>

				{/* <MenuItem passback="HOLIDAY" text="BEING FOUND GIVES BACK"></MenuItem> */}
				{/* <MenuItem passback="FANART" text="FAN ART"></MenuItem> */}
			</div>
		);
	};
}
