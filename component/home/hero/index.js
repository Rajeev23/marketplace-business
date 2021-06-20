import React, { Component } from 'react';
import getConfig from 'next/config';
import './_hero.scss';
import Fade from 'react-reveal/Fade';
const config = getConfig().publicRuntimeConfig;


export default class Hero extends Component {
	constructor(props) {
		super(props);
		this.state = { visible: false };
	}

	

render() {
	return (
	<div className="start-fundraiser-banner">
    <Fade bottom duration={1000} delay={600} distance="30px">
		<div className="sfb-container container">
			<div className="sfb-container-left">
				<div className="sfb-content">
				<strong>Raise for You</strong><br />
				<i>to become You</i><br />
					<p>Help us<br />to Help You</p>
				</div>
				<a href=""><button className="btn btn-primary" >Help you </button></a>
			</div>
			<div className="sfb-container-right">
				{/* <img 
                src={require(`../../../assets/home/background1.jpg`)}
                // src="../../../assets/home/background1.jpg"
                // src={"../../../home/background1.jpg"} 
                // src="/home/background1.jpg" 
                alt="hero image" /> */}
			</div>
		</div>
        </Fade>
	</div>
	);
}
}
