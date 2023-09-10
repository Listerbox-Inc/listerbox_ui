import React from 'react';
import './Slide.scss';
// import Slider from 'infinite-react-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CategoryCard from '../categoryCard/categoryCard';
import { cards } from '../../data';

const Slide = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className='slide'>
			<div className='container'>
				<Slider {...settings}>
					{cards.map((card) => (
						<CategoryCard item={card} key={card.id} />
					))}
				</Slider>
				{/* <div>
					{cards.map((card) => (
						<CategoryCard item={card} key={card.id} />
					))}
				</div> */}
			</div>
		</div>
	);
};

export default Slide;
