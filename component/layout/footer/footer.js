import React, { Component, Fragment } from "react";
import Logo from '../partials/Logo';
import { Row, Col, Container } from 'reactstrap';
import FacebookIcon from '../partials/facebook';
import TwitterIcon from '../partials/twitter';
import InstagramIcon from '../partials/instagramIcon';
import LinkedinIcon from '../partials/linkedinIcon';
// import ToggleButton from './toggle';
import * as Icon from 'react-feather';
import './_footer.scss'



class Footer extends Component {

	constructor(props) {
		super(props);
		let darkMode = 'Light';

		if (darkMode === 'Light' || darkMode === 'Night') {
			this.state = {
				darkMode: 'Light',
				toggle: false,
			};
		} else {
			this.state = {
				darkMode: 'Night',
				toggle: true,
			};
		}
	}
	toggleButtons = () => {
		const darkMode = this.state.toggle ? 'Light' : 'Night';
		this.setState({
			toggle: !this.state.toggle,
		});
	};

	render() {
		const { darkMode } = this.props
		return (
			<div id="footer" style={{}}>
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 footer-contact">
								<h3>Rajeev</h3>
								<p>
									BTM 2nd Satge <br />
									Banglore, KA 560076<br />
									India <br /><br />
									<strong>Phone:</strong> +91-8590884203<br />
									<strong>Email:</strong> marketpalce@business.com<br />
								</p>
							</div>

							<div className="col-lg-3 col-md-6 footer-links">
								<h4>Useful Links</h4>
								<ul>
									<li><Icon.ChevronRight color={'#C1DEBA'} height={'15'} /> <a href="#">Home</a></li>
									<li><Icon.ChevronRight color={'#C1DEBA'} height={'15'} /> <a href="#">About us</a></li>
									<li><Icon.ChevronRight color={'#C1DEBA'} height={'15'} /> <a href="#">Services</a></li>
									<li><Icon.ChevronRight color={'#C1DEBA'} height={'15'} /> <a href="#">Terms of service</a></li>
									<li><Icon.ChevronRight color={'#C1DEBA'} height={'15'} /> <a href="#">Privacy policy</a></li>
								</ul>
							</div>

							<div class="col-lg-3 col-md-6 footer-links">
								<h4>Our Services</h4>
								<ul>
									<li><Icon.ChevronRight color={'#C1DEBA'} height={'15'} /> <a href="#">Web Design</a></li>
									<li><Icon.ChevronRight color={'#C1DEBA'} height={'15'} /> <a href="#">Web Development</a></li>
									<li><Icon.ChevronRight color={'#C1DEBA'} height={'15'} /> <a href="#">Product Management</a></li>
									<li><Icon.ChevronRight color={'#C1DEBA'} height={'15'} /> <a href="#">Marketing</a></li>
									<li><Icon.ChevronRight color={'#C1DEBA'} height={'15'} /> <a href="#">Graphic Design</a></li>
								</ul>
							</div>

							<div class="col-lg-3 col-md-6 footer-links">
								<h4>Our Social Networks</h4>
								<p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
								<div class="social-links mt-3">
									<a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank">
										<FacebookIcon
											style={{ color: '#C1DEBA', display: 'flex', alignItems: 'center' }}
											size={20}
											color="#C1DEBA"
										/>
									</a>

									<a rel="noopener noreferrer" href="https://twitter.com/" target="_blank">
										<TwitterIcon
											style={{ display: 'flex', alignItems: 'center' }}
											size={20}
											color="#C1DEBA"
										/>
									</a>

									<a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank">
										<InstagramIcon
											style={{ display: 'flex', alignItems: 'center' }}
											size={20}
											color="#C1DEBA"
										/>
									</a>

									<a rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank">
										<LinkedinIcon
											style={{ display: 'flex', alignItems: 'center' }}
											size={20}
											color="#C1DEBA"
										/>
									</a>
								</div>
							</div>



						</div>
					</div>
				</div>
				<div class="container footer-bottom clearfix">
					<div class="copyright">
						&copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
					</div>
					<div class="c#C1DEBAits">

						Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
					</div>
				</div>

			</div>
		);
	}
}

export default Footer;



