import React from 'react';
import './Listing.scss';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { Slider } from 'infinite-react-carousel/lib';

function Listing() {
	return (
		<div className='listMain'>
			<div className='container'>
				<div className='left'>
					<h1>Rich Dad Poor Dad</h1>
					<div className='user'>
						<img
							className='pp'
							src='https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt=''
						/>
						<span>Anna Bell</span>
						<div className='stars'>
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<span>5</span>
						</div>
					</div>
					<div className='slider'>
						<img
							src='https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt=''
						/>
					</div>
					<h2>About this lisitng</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						beatae quisquam a quis accusamus sequi tempora ad porro quidem?
						Laboriosam itaque deleniti, asperiores eveniet consectetur provident
						assumenda dicta fugit nisi?
					</p>

					{/* Start - This rent item part show for only mobile view */}
					<div className='rent-item-mobile'>
						<div className='price'>₦700 per week</div>
						<div className='item'>
							<MdOutlineDeliveryDining size={25} />
							<span>2 Days Max Delivery</span>
						</div>
						<div className='details'>
							<span>
								Item rented can take a maximum of 2 days to get delivered. The
								item return date count-down would begin 2 days after payment
							</span>
						</div>
						<button>Rent this item</button>
					</div>

					{/* End */}

					<div className='seller'>
						<h2>About the owner</h2>
						<div className='user'>
							<img
								src='https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
							/>
							<div className='info'>
								<span>Anna Bell</span>
								<div className='stars'>
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<span>5</span>
								</div>
								<span>Lekki, Lagos</span>
							</div>
						</div>
					</div>

					<div className='reviews'>
						<h2>Reviews</h2>
						<div className='item'>
							<div className='user'>
								<img
									className='pp'
									src='https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600'
									alt=''
								/>
								<div className='info'>
									<span>Garner David</span>
								</div>
							</div>
							<div className='stars'>
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
								<span>5</span>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
								possimus nihil quo architecto nisi vero aliquam consequatur
								praesentium? Hic nostrum tempore eaque atque deleniti quod fuga
								exercitationem voluptatibus totam excepturi!
							</p>
						</div>
						<hr />
						<div className='item'>
							<div className='user'>
								<img
									className='pp'
									src='https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600'
									alt=''
								/>
								<div className='info'>
									<span>Garner David</span>
								</div>
							</div>
							<div className='stars'>
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
								<span>5</span>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
								possimus nihil quo architecto nisi vero aliquam consequatur
								praesentium? Hic nostrum tempore eaque atque deleniti quod fuga
								exercitationem voluptatibus totam excepturi!
							</p>
						</div>
					</div>
				</div>
				<div className='right'>
					<div className='price'>
						<h3>Rich Dad Poor Dad</h3>
						<h2>₦700 per week</h2>
					</div>

					<div className='details'>
						<div className='item'>
							<MdOutlineDeliveryDining size={25} />
							<span>2 Days Max Delivery</span>
						</div>
					</div>
					<div className='features'>
						<div className='item'>
							<span>
								Item rented can take a maximum of 2 days to get delivered. The
								item return date count-down would begin 2 days after payment
							</span>
						</div>
					</div>
					<button>Rent this item</button>
				</div>
			</div>
		</div>
	);
}

export default Listing;
