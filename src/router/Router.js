import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../pages/Home";
import Success from "../pages/Success";
import Error from "../pages/Error";

export default function router() {
	return (
		<main>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App}></Route>
					<Route path="/success" component={Success}></Route>
					<Route path="/error" component={Error}></Route>
				</Switch>
			</BrowserRouter>
		</main>
	);
}
