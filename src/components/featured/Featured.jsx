import React from 'react';
import { CiSearch } from 'react-icons/ci';
import './Featured.scss';

const Featured = () => {
	return (
		<div className='featured'>
			<div className='container'>
				<div className='left'>
					<h1>
						Connect <i>through stories </i>
					</h1>
					<span className='text'>
						Join a vibrant community of book enthusiasts who believe in the
						magic of sharing. Borrow and lend books, creating meaningful
						connections one page at a time.
					</span>
					<div className='search'>
						<div className='searchInput'>
							<input type='text' placeholder='Try "Rich Dad Poor Dad"' />
						</div>
						<button>
							<CiSearch size={24} color='white' />
						</button>
					</div>
					<div className='popular'>
						<span>Popular:</span>
						<button>Romance</button>
						<button>Non-Fiction</button>
						<button>Self-Help</button>
						<button>Poetry</button>
						<button>Business</button>
					</div>
				</div>
				<div className='right'>
					<img src='./img/woman1.png' alt='' />
				</div>
			</div>
		</div>
	);
};

export default Featured;
