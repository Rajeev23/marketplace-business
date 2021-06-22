import React, { Component } from 'react';
import Slider from 'react-slick';
import './_testimonial.scss';



const DonorTestimonialsettings = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 10000,
	arrows: true,
	nextArrow: <DtNextArrow />,
	prevArrow: <DtPrevArrow />,
	appendDots: dots => (
		<div>
			<ul> {dots} </ul>
		</div>
	),
	customPaging: i => (
		<div className="dot-item"></div>
	  )
};

function DtPrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="dtm-arrow arrow-prev" onClick={onClick}>
			<svg className="dtm-arrow-svg" viewBox="0 0 20 20">
				<path
					d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
									L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
									c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
									c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
									S18.707,9.212,18.271,9.212z"
				></path>
			</svg>
		</div>
	);
}

function DtNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="dtm-arrow arrow-next" onClick={onClick}>
			<svg className="dtm-arrow-svg" viewBox="0 0 20 20">
				<path
					d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
									l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
									c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
									c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
									S1.293,9.212,1.729,9.212z"
				></path>
			</svg>
		</div>
	);
}

const items = [
	{
		imageUrl:
			'https://give-marketplace.s3.ap-south-1.amazonaws.com/static/images/home/homeTemp/vinod-khosla.jpg',
		imageAlt: 'Vinod Khosla',
		heading: 'Send children to school',
		description:
			'People often wonder where the money would go. I can tell you, I started working with GiveIndia when the pandemic first broke a year ago. We validate them, it’s a very good, reliable organization. People should have confidence in giving to GiveIndia and know that the money will be used immediately to help somebody.',
		profileName: 'Vinod Khosla',
		profileImageUrl: '/static/images/home/home-testimonial/suman.jpg',
		profileImageAlt: 'Vinod Khosla',
		profileDescription: 'Venture Capitalist',
		ctatext: 'Donate Now ',
		ctalink: 'https://fundraisers.giveindia.org/projects/fight-against-covid'
	},
	{
		imageUrl:
			'https://give-marketplace.s3.ap-south-1.amazonaws.com/static/images/home/homeTemp/devi-shetty.jpg',
		imageAlt: 'Dr. Devi Shetty',
		heading: 'Send children to school',
		description:
			'There is a healthcare crisis looming and we must act fast to protect our frontline workers. Doctors, nurses and paramedics’ safety is crucial to providing healthcare to patients and we are prioritising that through the India COVID Response fund.',
		profileName: 'Dr. Devi Shetty',
		profileImageUrl: '/static/images/home/home-testimonial/suman.jpg',
		profileImageAlt: 'Dr. Devi Shetty',
		profileDescription: 'Chairman, Narayana Health',
		ctatext: 'Donate Now ',
		ctalink: ''
	},
	{
		imageUrl:
			'https://give-marketplace.s3.ap-south-1.amazonaws.com/static/images/home/homeTemp/robert-rrosen.jpg',
		imageAlt: 'Robert Rosen',
		heading: '',
		description:
			'GiveIndia’s pursuit of bringing trust, convenience and choice for donors, is aligned with our goal	to enable more informed and intentional generosity by everyday givers. We are happy to be a	part of this respected group of funders who have come forward to support this effort.',
		profileName: 'Robert Rosen',
		profileImageUrl: '',
		profileImageAlt: 'Robert Rosen',
		profileDescription:
			'Director of Philanthropic Partnerships, Bill & Melinda Gates Foundation',
		ctatext: 'Donate Now ',
		ctalink: ''
	},
	{
		imageUrl:
			'https://give-marketplace.s3.ap-south-1.amazonaws.com/static/images/home/homeTemp/sanjay-gupta.jpg',
		imageAlt: 'Sanjay Gupta',
		heading: '',
		description:
			'GiveIndia was one of the first to understand the challenges that we as a society faced and mobilised enormous resources to support the people in need - a commendable job, thank you.',
		profileName: 'Sanjay Gupta',
		profileImageUrl: '',
		profileImageAlt: 'Sanjay Gupta',
		profileDescription: 'Country Manager and VP, Google India',
		ctatext: 'Donate Now ',
		ctalink: ''
	}
	// {
	// 	imageUrl: 'https://give-marketplace.s3.ap-south-1.amazonaws.com/static/images/home/homeTemp/ankit-Gaur.jpg',
	// 	imageAlt: 'Ankit Gaur',
	// 	heading: '',
	// 	description:
	// 		'We would like to thank our customers for donating generously and encouraging us to continuously innovate and enable safe, secure and trusted giving options. The idea of galvanizing the country has always resonated with our philosophy of giving back to society — thank you, GiveIndia for giving us the opportunity.',
	// 	profileName: 'Ankit Gaur',
	// 	profileImageUrl: '',
	// 	profileImageAlt: 'Ankit Gaur',
	// 	profileDescription: 'Director, Business Development, PhonePe',
	// 	ctatext: 'Donate Now ',
	// 	ctalink: ''
	// }
];

export default class index extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		// const { items } = this.props;

		const donortestimonial = items.map((item, index) => (
			<div key={index}>
				<div className="dtm-items">
					<div className="dtm-items-img">
						<img src={item.imageUrl} alt={item.imageAlt} />
					</div>
					<div className="dtm-items-content">
						<div className="dtm-beneficiary">
							{/* <div className="img-wrapper">
								<img
									src={`${config.cdnUrl}${item.profileImageUrl}`}
									alt={item.profileImageAlt}
								/>
							</div> */}
							<div className="dtm-beneficiary-bio">
								<h3>{item.profileName}</h3>
								<h4>{item.profileDescription}</h4>
							</div>
						</div>
						<p>
							&ldquo; {item.description} &rdquo;
						</p>
						{/* <a
							className="dtm-items-cta"
							href={item.ctalink}
							target="_blank"
							onClick={() => {
								if (window.eventDispatcher) {
									window.eventDispatcher.dispatchEventSync(
										'testimonial-cta',
										{},
										{ amplitude: true }
									);
								}
							}}
						>
							{item.ctatext}
						</a> */}
					</div>
				</div>
			</div>
		));

		return (
			<div className="donor-testimonials-wrapper">
				<div className="donor-testimonials container">
					<div className="dtm-header">
						<h2>Testimonials</h2>
						<div className="dtm-header-bar"></div>
					</div>
					<div className="dtm-items-container">
						<Slider {...DonorTestimonialsettings}>{donortestimonial}</Slider>
					</div>
				</div>
			</div>
		);
	}
}
