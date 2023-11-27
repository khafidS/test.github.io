import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./multipolar.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Multipolar Technology</div>
							<div className="work-subtitle">
								Aplication Developer 
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./gosantha.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Gosantha Global</div>
							<div className="work-subtitle">
								Aplication Developer
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
