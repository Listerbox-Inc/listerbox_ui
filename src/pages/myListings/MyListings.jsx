import React from 'react';
import { Link } from 'react-router-dom';
import './MyListings.scss';
import { BsTrash } from 'react-icons/bs';

const MyListings = () => {
	const currentUser = {
		id: 1,
		username: 'Anna',
		isOwner: true,
	};

	return (
		<div className='myListings'>
			<div className='container'>
				<div className='title'>
					<h1>{currentUser.isOwner ? 'Listings' : 'Orders'}</h1>
					{currentUser.isOwner && (
						<Link to='/add'>
							<button>Add New Listing</button>
						</Link>
					)}
				</div>
				<table>
					<tr>
						<th>Image</th>
						<th>Title</th>
						<th>Price</th>
						<th>Rented</th>
						{/* <th className='action'>Action</th> */}
					</tr>
					<tr>
						<td>
							<img
								className='image'
								src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
							/>
						</td>
						<td>Stunning concept art</td>
						<td>₦59</td>
						<td>13</td>
						<td>
							<BsTrash color='red' />
						</td>
					</tr>
					<tr>
						<td>
							<img
								className='image'
								src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
							/>
						</td>
						<td>Ai generated concept art</td>
						<td>₦120</td>
						<td>41</td>
						<td>
							<BsTrash color='red' />
						</td>
					</tr>
					<tr>
						<td>
							<img
								className='image'
								src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
							/>
						</td>
						<td>High quality digital character</td>
						<td>₦79</td>
						<td>55</td>
						<td>
							<BsTrash color='red' />
						</td>
					</tr>
					<tr>
						<td>
							<img
								className='image'
								src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
							/>
						</td>
						<td>Illustration hyper realistic painting</td>
						<td>₦119</td>
						<td>29</td>
						<td>
							<BsTrash color='red' />
						</td>
					</tr>
					<tr>
						<td>
							<img
								className='image'
								src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
							/>
						</td>
						<td>Original ai generated digital art</td>
						<td>₦59</td>
						<td>34</td>
						<td>
							<BsTrash color='red' />
						</td>
					</tr>
					<tr>
						<td>
							<img
								className='image'
								src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
							/>
						</td>
						<td>Text based ai generated art</td>
						<td>₦110</td>
						<td>16</td>
						<td>
							<BsTrash color='red' />
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default MyListings;
