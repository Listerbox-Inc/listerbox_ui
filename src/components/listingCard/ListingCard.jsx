import React from 'react';
import './ListingCard.scss';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ListingCard = ({ item }) => {
	return (
		<Link to='/listing/123' className='link'>
			<div className='listingCard'>
				<img src={item.img} alt='' />
				<div className='info'>
					<div className='user'>
						<img src={item.pp} alt='' />
						<span>{item.username}</span>
					</div>
					<p>{item.desc}</p>
					<div className='star'>
						<AiFillStar />
						<span>{item.star}</span>
					</div>
				</div>
				<hr />
				<div className='details'>
					<AiOutlineHeart />
					<div className='price'>
						<span>Per week</span>
						<h2>₦{item.price}</h2>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ListingCard;
