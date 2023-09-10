import React from 'react';
import './Listings.scss';
import { listings } from '../../data';
import ListingCard from '../../components/listingCard/ListingCard';

const Listings = () => {
	return (
		<div className='listings'>
			<div className='container'>
				<h1>Romance</h1>
				<p>Discover Romance</p>

				<div className='cards'>
					{listings.map((listing) => (
						<div className='listing-card-wrapper' key={listing.id}>
							<ListingCard item={listing} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Listings;
