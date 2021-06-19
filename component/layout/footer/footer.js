import React from 'react';
import Logo from '../partials/Logo';
import { Row, Col, Container } from 'reactstrap';
import FacebookIcon from '../partials/facebook';
import TwitterIcon from '../partials/twitter';
import InstagramIcon from '../partials/instagramIcon';
import LinkedinIcon from '../partials/linkedinIcon';
// import ToggleButton from './toggle';
import * as Icon from 'react-feather';
// import './_layout.scss'



export default class Footer extends React.Component {
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
        const {darkMode} = this.props
		return (
			<Container fluid  className="footer" id="footer"  style={{}}>
        {/* <Logo/> */} 
				<Row className="footer-top  d-flex" style={{ paddingTop: '2rem' }}>
					<Col xs="12" md="4" lg="3" sm="12" className="d-flex justify-content-center align-self-center footer-height-for-mobile  ">
						<Row className="footer-column" >
							<Col className="footer-panel-f3" xs="12" style={{ overflow: 'hidden' }}>
								<Row >
									<Col xs="4" md="6" className="footer-right">
										<p>
											<a href="/dashboad" className="no-hover-a footer-link">User</a>
										</p>
									</Col>
									<Col xs="4" md="6" className="footer-right">
										<p>
											<a href="/missions" className="no-hover-a footer-link">Campaign</a>
										</p>
									</Col>
									<Col xs="4" md="6" className="footer-right">
										<p>
											<a href="/help" className="no-hover-a footer-link">Help</a>
										</p>
									</Col>
									<Col xs="4" md="6" className="footer-right">
										<p>
											<a href="/contactus" className="no-hover-a footer-link">Contact Us</a>
										</p>
									</Col>
									<Col xs="4" md="6" className="footer-right">
										<p>
											<a href="" className="no-hover-a footer-link">hello4</a>
										</p>
									</Col>
									<Col xs="4" md="6" className="footer-right">
										<p>
											<a href="/careers" className="no-hover-a footer-link">wooo</a>
										</p>
									</Col>
									
								</Row>
							</Col>
						</Row>
					</Col>
					<Col className="footer-logo p-0" xs="12" md="4" lg="7" sm="12">
					
					{/* <ToggleButton
					{...{darkMode}}
					classNames={this.state.toggle ? 'btn btn-toggle active no-hover' : 'btn btn-toggle no-hover'}
					/> */}

					</Col>
					<Col className="ml-auto currency-input align-self-center " xs="12" md="4" lg="2" sm="12">
          {/* <Logo/> */}
					</Col>
				</Row>
				{/* <Row className="partners-logo-panel footer-bottom d-flex f-d-col">
					<p className="test-muted">Partners</p>
					<div className="mb-2">
						<img src={`${config.cdnUrl}/static/images/partners/logo/fankind_logo.svg`} />
					</div>
				</Row> */}

				<Row className="footer-bottom">
				
					{/* hello conten */}
					<div className="footer-bottom-left">
						<p> <span className="footer-mobile_view">© Copyright {(new Date().getDate())}:{(new Date().getFullYear())} @Rajeev Nayan. All rights reserved. </span>  &nbsp; &nbsp; &nbsp; &nbsp; <span className="footer-mobile_view"></span> </p>
						  
						 <style jsx>{
							`
								.footer-exempted-span {

							    padding-bottom: 0;
							    padding-top: 10px;
									width: 100%;
								}

							`
						}
						</style>


					</div>
					<div className="footer-bottom-right ">
						<span>
							{/* <a className="no-hover-a" href="/"><p>Terms  </p></a> */}
						</span>
						<span>
						<SunMoon {...{darkMode}} /> 
						</span>
						<span>
							<a href="/sitemap.xml"><p>Site Map</p></a>
						</span>
						<div className="footer-bottom_mobile">
						<span>
							<a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank">
								<FacebookIcon
									style={{ color: 'red', display: 'flex', alignItems: 'center' }}
									size={20}
									color="#00B5F3"
								/>
							</a>
						</span>
						<span>
							<a rel="noopener noreferrer" href="https://twitter.com/" target="_blank">
								<TwitterIcon
									style={{ display: 'flex', alignItems: 'center' }}
									size={20}
									color="#00B5F3"
								/>
							</a>
						</span>
						<span>
							<a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank">
								<InstagramIcon
									style={{ display: 'flex', alignItems: 'center' }}
									size={20}
									color="#00B5F3"
								/>
							</a>
						</span><span>
							<a rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank">
								<LinkedinIcon
									style={{ display: 'flex', alignItems: 'center' }}
									size={20}
									color="#00B5F3"
								/>
							</a>
						</span>
						</div>
					</div>
				</Row>
				

			</Container>
		);
	}
}


const SunMoon = ({darkMode,props}) => {
	return (
	  <div className="SunMoon" onClick={darkMode.toggle} style={{cursor: 'pointer'}}>
		<div>
		{darkMode.value ? <Icon.Sun color={'#ffc107'} /> : <Icon.Moon />}
		</div>
	  </div>
	);
  };

 