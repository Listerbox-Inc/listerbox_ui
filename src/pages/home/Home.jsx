import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import HomeListingCat from '../../components/homeListingCat/HomeListingCat';
import { listingsHome } from '../../data';
import ListingCard from '../../components/listingCard/ListingCard';

const Home = () => {
	return (
		<div className='home'>
			<Featured />
			<div className='features'>
				<div className='container'>
					<div className='item-left'>
						<img src='./img/woman2_background.jpg' alt='' />
					</div>
					<div className='item-right'>
						<h1>About us</h1>
						<p>
							Welcome to Listerbox, your Book-Sharing Haven 📚🌟 where we're
							rewriting the way you experience books. We believe in the power of
							sharing stories, connecting readers, and fostering a community
							bound by the love of reading.
						</p>
						<div className='title'>
							<CiCircleCheck size={20} />
							🤝 Connect Through Words
						</div>
						<p>
							Listerbox is more than a platform; it gathers like-minded
							individuals who understand the joy of a good book. Borrow, lend,
							and engage with fellow book lovers to create lasting connections.
							🌍 Explore Limitless Worlds: Immerse yourself in various genres,
							from page-turning thrillers to thought-provoking classics. Our
							curated collection ensures that there's always a captivating tale
							waiting for you.
						</p>
						<div className='title'>
							<CiCircleCheck size={20} />
							🌱 Eco-Friendly Reading
						</div>
						<p>
							By renting and sharing books, you're contributing to a sustainable
							reading culture that reduces waste and helps protect our planet
							for future generations.
						</p>
						<div className='title'>
							<CiCircleCheck size={20} />
							🌟 Seamless Reading Experience
						</div>
						<p>
							Our intuitive platform makes discovering, renting, and returning
							books a breeze. Enjoy a smooth journey from start to finish, all
							pursuing literary adventures. Join Listerbox today and embark on a
							reading revolution that brings people together, one book at a
							time. Because every story shared enriches our lives and builds a
							stronger community. 📖🤗
						</p>
					</div>
				</div>
			</div>

			<HomeListingCat />

			<div className='features-dark'>
				<div className='container'>
					<div className='item-left'>
						<h1 className='intro'>
							<i>Introducing</i> Listerbox
						</h1>
						<h1>Your Personal Library of Possibilities!</h1>

						{/* <div className='title'>
							<CiCircleCheck size={20} />
							🤝 Connect Through Words
						</div> */}
						<p>
							At Listerbox, we believe that books are more than just pages;
							they're gateways to adventure, knowledge, and connection. Our
							platform opens the door to a vibrant world of reading, where you
							can explore, rent, and share books with fellow enthusiasts. Join
							our growing community and immerse yourself in a diverse collection
							spanning genres and cultures. Listerbox brings together a love for
							reading and a commitment to sustainability, making every book an
							opportunity to connect with others while reducing environmental
							impact. Start your literary journey with Listerbox today and be a
							part of the story!
						</p>
						<button className='btn'>Discover Listerbox</button>
					</div>
					<div className='item-right'>
						<img src='./img/group.jpg' alt='' />
					</div>
				</div>
			</div>
			<div className='listings'>
				<div className='container'>
					<h1>Recently added</h1>
					<div className='cards'>
						{listingsHome.map((listing) => (
							<div className='listing-card-wrapper' key={listing.id}>
								<ListingCard item={listing} />
							</div>
						))}
					</div>
				</div>
			</div>

			{/* <FeaturedListing>
				{listings.map((card) => (
					<ListCard key={card.id} item={card}/>
				))}
			</FeaturedListing> */}
		</div>
	);
};

export default Home;
