import React from 'react';
import './Add.scss';

const Add = () => {
	return (
		<div className='add'>
			<div className='container'>
				<h1>Add New Listing</h1>
				<div className='sections'>
					<div className='info'>
						<label htmlFor=''>Title</label>
						<input type='text' placeholder='e.g. Rich Dad Poor Dad' />
						<label htmlFor=''>Category</label>
						<select name='cats' id='cats'>
							<option value='romance'>Romance</option>
							<option value='mystery'>Mystery</option>
							<option value='science-fiction'>Science Fiction</option>
							<option value='fantasy'>Fantasy</option>
							<option value='thriller'>Thriller</option>
							<option value='horror'>Horror</option>
							<option value='historical-fiction'>Historical Fiction</option>
							<option value='biography'>Biography</option>
							<option value='self-help'>Self-Help</option>
							<option value='travel'>Travel</option>
							<option value='cookbook'>Cookbook</option>
							<option value='science'>Science</option>
							<option value='philosophy'>Philosophy</option>
							<option value='comics'>Comics</option>
							<option value='drama'>Drama</option>
							<option value='poetry'>Poetry</option>
							<option value='classic-literature'>Classic Literature</option>
							<option value='non-fiction'>Non-Fiction</option>
							<option value='business'>Business</option>
							<option value='romantic-comedy'>Romantic Comedy</option>
							<option value='adventure'>Adventure</option>
						</select>
						<label htmlFor=''>Cover Image</label>
						<input type='file' />
						<label htmlFor=''>Upload Images</label>
						<input type='file' multiple />
						<label htmlFor=''>Description</label>
						<textarea
							name=''
							id=''
							placeholder='Brief description about the item'
							cols='0'
							rows='16'
						></textarea>
						<label htmlFor=''>Price(₦)</label>
						<input type='number' />
						<button>Create</button>
					</div>
					{/* <div className='details'>
						<label htmlFor=''>Service Title</label>
						<input type='text' placeholder='e.g. One-page web design' />
						<label htmlFor=''>Short Description</label>
						<textarea
							name=''
							id=''
							placeholder='Short description of your service'
							cols='30'
							rows='10'
						></textarea>
						<label htmlFor=''>Delivery Time (e.g. 3 days)</label>
						<input type='number' />
						<label htmlFor=''>Revision Number</label>
						<input type='number' />
						<label htmlFor=''>Add Features</label>
						<input type='text' placeholder='e.g. page design' />
						<input type='text' placeholder='e.g. file uploading' />
						<input type='text' placeholder='e.g. setting up a domain' />
						<input type='text' placeholder='e.g. hosting' />
						<label htmlFor=''>Price</label>
						<input type='number' />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Add;
