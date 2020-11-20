import React from "react";
import { Link } from "react-scroll";

//import images
import authorImage from "../../resources/images/authorImage.jpg";

export default class OrderSignedCopy extends React.Component {
	render = () => {
		return (
			<div id="AUTHOR" name="AUTHOR" className="page author">
				<div className="pageHeader">
					<div className="titleHeader">
						<div className="titleText">ABOUT THE AUTHOR</div>
					</div>
				</div>
				<div className="pageBody">
					<div className="card">
						<img className="cardImg bookImg" src={authorImage} alt=""></img>
					</div>
					<div className="card">
						<div className="cardBody">
							<p className="cardText">
								Arend Richard is a first time author based in Denver, CO. Prior
								to his debut in writing, Arend saw success in video content
								creation on YouTube. He also created a podcast called
								"Fun2Speculate" in which the host and guest speculate on wild
								and crazy ideas about life, aliens, the Earth, and more.
							</p>
						</div>
						<div className="cardAction">
							<Link
								to="ORDER"
								containerId={"pageContainer"}
								activeClass={"active"}
								offset={-15}
								spy={true}
								smooth={true}
								duration={1000}>
								<div className="button">
									<div className="buttonText">PURCHASE</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	};
}
