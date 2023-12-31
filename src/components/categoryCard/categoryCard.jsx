import React from 'react';
import { Link } from 'react-router-dom';
import './categoryCard.scss';

const CategoryCard = ({ item }) => {
	return (
		<Link to='/listings?cat=romance'>
			<div className='categoryCard'>
				<img src={item.img} alt='' />
				<span className='desc'>{item.desc}</span>
				<span className='title'>{item.title}</span>
			</div>
		</Link>
	);
};

export default CategoryCard;
