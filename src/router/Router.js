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
					<Route path="/success" component={Success}></Route>
					<Route path="/error" component={Error}></Route>
					<Route exact path="/" component={App}></Route>
					<Route
						exact
						path="/about"
						render={(props) => {
							return <App {...props} scrollTo={"ABOUT"}></App>;
						}}></Route>
					<Route
						exact
						path="/author"
						render={(props) => {
							return <App {...props} scrollTo={"AUTHOR"}></App>;
						}}></Route>
					<Route
						exact
						path="/order"
						render={(props) => {
							return <App {...props} scrollTo={"ORDER"}></App>;
						}}></Route>
					<Route
						exact
						path="/holidayhelp"
						render={(props) => {
							return <App {...props} scrollTo={"HOLIDAY"}></App>;
						}}></Route>
				</Switch>
			</BrowserRouter>
		</main>
	);
}
