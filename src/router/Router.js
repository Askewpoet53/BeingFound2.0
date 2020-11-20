import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../pages/Home";
// import About from "../pages/About";
// import AboutAuthor from "../pages/AboutAuthor";
// import BuyNow from "../pages/buyNow";
// import SocialMedia from "../pages/socialMedia";
import Success from "../pages/Success";
import Error from "../pages/Error";
// import FanArt from "../pages/fanArt"

export default function router() {
	return (
		<main>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App}></Route>
					{/* <Route path="/about" component={About}></Route> */}
					{/* <Route path="/aboutAuthor" component={AboutAuthor}></Route> */}
					{/* <Route path="/socialMedia" component={SocialMedia}></Route> */}
					<Route path="/success" component={Success}></Route>
					<Route path="/error" component={Error}></Route>
					{/* <Route path="/fanArt" component={FanArt}></Route> */}
				</Switch>
			</BrowserRouter>
		</main>
	);
}
